/**
 * Entity registry: maps organization names to brand colors and optional logos.
 * Colors are used for styled inline mentions; logos appear in the experience timeline.
 */

export interface Entity {
  /** Display name (used for matching in text) */
  name: string;
  /** Alternative names / abbreviations to also match */
  aliases?: string[];
  /** Brand color (light mode) */
  color: string;
  /** Brand color (dark mode) — defaults to color if not set */
  colorDark?: string;
  /** Path to logo image in /public (optional, for experience page) */
  logo?: string;
  /** Alternative logo for dark mode */
  logoDark?: string;
}

export const entities: Entity[] = [
  {
    name: 'Duke University',
    aliases: ['Duke', 'Duke ECE'],
    color: '#012169',
    colorDark: '#6B8FCE',
  },
  {
    name: 'Duke Center for Virtual Imaging Trials',
    aliases: ['CVIT', 'Center for Virtual Imaging Trials'],
    color: '#00539B',
    colorDark: '#7AB8F5',
  },
  {
    name: 'Duke Office of Translation & Commercialization',
    aliases: ['Duke OTC'],
    color: '#012169',
    colorDark: '#6B8FCE',
  },
  {
    name: 'University of California, Los Angeles',
    aliases: ['UCLA'],
    color: '#2774AE',
    colorDark: '#5B9BD5',
  },
  {
    name: 'University of California, Irvine',
    aliases: ['UC Irvine', 'UCI'],
    color: '#0C2340',
    colorDark: '#FFD200',
  },
  {
    name: 'RSNA Scientific Assembly',
    aliases: ['RSNA', 'RSNA 2025'],
    color: '#003366',
    colorDark: '#6FA3DD',
  },
  {
    name: 'SPIE Medical Imaging',
    aliases: ['SPIE'],
    color: '#1B4F72',
    colorDark: '#5DADE2',
  },
  {
    name: 'Duke Radiology Research Day',
    color: '#012169',
    colorDark: '#6B8FCE',
  },
  {
    name: 'Virtual Imaging Trials in Medicine',
    aliases: ['VITM'],
    color: '#00539B',
    colorDark: '#7AB8F5',
  },
  {
    name: 'Canon Medical',
    color: '#CC0000',
    colorDark: '#FF6B6B',
  },
  {
    name: 'GE HealthCare',
    color: '#3B73B9',
    colorDark: '#7EB6FF',
  },
  {
    name: 'OhmMaker LLC',
    color: '#444444',
    colorDark: '#BBBBBB',
  },
  {
    name: 'Topnet Inc.',
    color: '#2E6DB4',
    colorDark: '#6FA3DD',
  },
];

/** Build a lookup from all names/aliases to their entity */
const entityLookup = new Map<string, Entity>();
for (const e of entities) {
  entityLookup.set(e.name, e);
  for (const alias of e.aliases ?? []) {
    entityLookup.set(alias, e);
  }
}

/**
 * Post-process rendered HTML to wrap entity mentions in styled spans.
 * Only matches text that is already inside <em> or <strong> tags (i.e., markdown emphasis),
 * so plain mentions are not affected.
 */
export function highlightEntities(html: string): string {
  for (const [name, entity] of entityLookup) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    let logoHtml = '';
    if (entity.logo && entity.logoDark) {
      logoHtml = `<img src="${entity.logo}" alt="" class="entity-icon entity-icon-light" /><img src="${entity.logoDark}" alt="" class="entity-icon entity-icon-dark" />`;
    } else if (entity.logo) {
      logoHtml = `<img src="${entity.logo}" alt="" class="entity-icon" />`;
    }

    const emPattern = new RegExp(`<em>(${escapedName})</em>`, 'g');
    const darkColor = entity.colorDark ?? entity.color;
    html = html.replace(emPattern, (_match, text) => {
      return `<em class="entity-mention" style="--entity-color: ${entity.color}; --entity-color-dark: ${darkColor}">${logoHtml}${text}</em>`;
    });
  }
  return html;
}

/** Get entity by org name */
export function getEntity(orgName: string): Entity | undefined {
  return entityLookup.get(orgName);
}
