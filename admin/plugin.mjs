import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentFile = path.join(root, 'src', 'data', 'site-content.json');
const dirs = {
  posts: path.join(root, 'src', 'content', 'posts'),
  research: path.join(root, 'src', 'content', 'research'),
};
const SLUG = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
const ORDER = ['title', 'tags', 'date', 'priority', 'path', 'excerpt', 'cover', 'selected', 'venue', 'links', 'authors'];

function json(res, status, data) {
  const body = JSON.stringify(data);
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Content-Length', Buffer.byteLength(body));
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function parseScalar(raw) {
  const s = raw.trim();
  if (s === 'true') return true;
  if (s === 'false') return false;
  if (s === '') return '';
  if (s.startsWith('[')) return JSON.parse(s);
  if (/^-?\d+$/.test(s)) return Number(s);
  if (s.startsWith('"')) return JSON.parse(s);
  return s;
}

function parseFrontmatter(yaml) {
  const data = {};
  let listKey = null;
  let current = null;
  for (const line of yaml.split(/\r?\n/)) {
    const item = line.match(/^- (\w+):\s*(.*)$/);
    const nested = line.match(/^  (\w+):\s*(.*)$/);
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (item && listKey) {
      current = { [item[1]]: parseScalar(item[2]) };
      data[listKey].push(current);
    } else if (nested && current && line.startsWith('  ')) {
      current[nested[1]] = parseScalar(nested[2]);
    } else if (kv && !line.startsWith(' ') && !line.startsWith('-')) {
      listKey = null;
      current = null;
      if (kv[2] === '' && (kv[1] === 'links' || kv[1] === 'authors')) {
        listKey = kv[1];
        data[kv[1]] = [];
      } else {
        data[kv[1]] = parseScalar(kv[2]);
      }
    }
  }
  return data;
}

function parseMdx(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  return { data: parseFrontmatter(m[1]), body: m[2].replace(/^\r?\n/, '') };
}

function stringifyMdx(data, body) {
  const lines = ['---'];
  for (const key of ORDER) {
    const v = data[key];
    if (v === undefined || v === null || v === '') continue;
    if (key === 'tags') {
      lines.push(`tags: [${(v || []).map((t) => JSON.stringify(t)).join(', ')}]`);
    } else if (key === 'links' || key === 'authors') {
      if (!Array.isArray(v) || !v.length) continue;
      lines.push(`${key}:`);
      for (const item of v) {
        if (!item?.name) continue;
        lines.push(`- name: ${JSON.stringify(item.name)}`);
        if (item.url) lines.push(`  url: ${JSON.stringify(item.url)}`);
      }
    } else if (typeof v === 'boolean' || typeof v === 'number') {
      lines.push(`${key}: ${v}`);
    } else {
      lines.push(`${key}: ${JSON.stringify(String(v))}`);
    }
  }
  lines.push('---');
  return `${lines.join('\n')}\n\n${String(body || '').replace(/\s*$/, '\n')}`;
}

function entryPath(kind, id) {
  if (!dirs[kind] || !SLUG.test(id)) return null;
  return path.join(dirs[kind], `${id}.mdx`);
}

function listEntries(kind) {
  return fs
    .readdirSync(dirs[kind])
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const id = f.slice(0, -4);
      const { data } = parseMdx(fs.readFileSync(path.join(dirs[kind], f), 'utf8'));
      return {
        id,
        title: data.title || id,
        date: data.date || '',
        venue: data.venue || '',
        selected: !!data.selected,
      };
    })
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function strip(url) {
  return (url || '/').split('?')[0].replace(/\/+$/, '') || '/';
}

function apiHandler(req, res) {
  const sub = strip(req.url);
  const run = async () => {
    if (sub === '/content') {
      if (req.method === 'GET') {
        json(res, 200, JSON.parse(fs.readFileSync(contentFile, 'utf8')));
        return;
      }
      if (req.method === 'PUT') {
        const body = JSON.parse(await readBody(req));
        fs.writeFileSync(contentFile, `${JSON.stringify(body, null, 2)}\n`);
        json(res, 200, { ok: true });
        return;
      }
    }

    const list = sub.match(/^\/list\/(posts|research)$/);
    if (list && req.method === 'GET') {
      json(res, 200, listEntries(list[1]));
      return;
    }

    const entry = sub.match(/^\/entry\/(posts|research)(?:\/([^/]+))?$/);
    if (entry) {
      const kind = entry[1];
      const id = entry[2] ? decodeURIComponent(entry[2]) : '';
      if (req.method === 'GET' && id) {
        const file = entryPath(kind, id);
        if (!file || !fs.existsSync(file)) return json(res, 404, { error: 'Not found' });
        json(res, 200, { id, ...parseMdx(fs.readFileSync(file, 'utf8')) });
        return;
      }
      if (req.method === 'POST' && !id) {
        const body = JSON.parse(await readBody(req));
        const slug = String(body.slug || '');
        const file = entryPath(kind, slug);
        if (!file) return json(res, 400, { error: 'Invalid slug' });
        if (fs.existsSync(file)) return json(res, 409, { error: 'Already exists' });
        const data = body.data || {};
        data.path = data.path || `${kind}/${slug}`;
        fs.writeFileSync(file, stringifyMdx(data, body.body || ''));
        json(res, 201, { id: slug });
        return;
      }
      if ((req.method === 'PUT' || req.method === 'DELETE') && id) {
        const file = entryPath(kind, id);
        if (!file || !fs.existsSync(file)) return json(res, 404, { error: 'Not found' });
        if (req.method === 'DELETE') {
          fs.unlinkSync(file);
          json(res, 200, { ok: true });
          return;
        }
        const body = JSON.parse(await readBody(req));
        fs.writeFileSync(file, stringifyMdx(body.data || {}, body.body || ''));
        json(res, 200, { ok: true });
        return;
      }
    }

    json(res, 404, { error: 'Not found' });
  };

  run().catch((err) => {
    if (!res.headersSent) json(res, 500, { error: err instanceof Error ? err.message : 'Server error' });
  });
}

export function adminCms() {
  return {
    name: 'local-content-studio',
    apply: 'serve',
    configureServer(server) {
      return () => {
        const httpServer = server.httpServer;
        if (!httpServer) return;
        const previous = httpServer.listeners('request').slice();
        httpServer.removeAllListeners('request');
        httpServer.on('request', (req, res) => {
          const pathOnly = (req.url || '/').split('?')[0];
          const base = pathOnly.replace(/\/+$/, '') || '/';
          if (base === '/admin') {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(fs.readFileSync(path.join(root, 'admin', 'index.html')));
            return;
          }
          if (base === '/admin/api' || base.startsWith('/admin/api/')) {
            const query = (req.url || '').includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
            req.url = `${base.slice('/admin/api'.length) || '/'}${query}`;
            apiHandler(req, res);
            return;
          }
          for (const listener of previous) listener.call(httpServer, req, res);
        });
      };
    },
  };
}
