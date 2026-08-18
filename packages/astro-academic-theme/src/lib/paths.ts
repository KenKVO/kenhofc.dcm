/** Prefix a site-root path with Astro's `base` (needed on GitHub project Pages). */
export function withBase(path: string): string {
  if (
    !path ||
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('#')
  ) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.replace(/^\//, '');
  if (!clean) return base;
  return `${base}${clean}`;
}
