import type { SiteConfig } from '../types.js';

export interface NavItem {
  label: string;
  href: string;
  exact: boolean;
}

export function getNavItems(config: SiteConfig): NavItem[] {
  const base = import.meta.env.BASE_URL;

  return [
    { label: 'About', href: base, exact: true },
    { label: 'Experience', href: `${base}experience/`, exact: false },
    { label: 'Research', href: `${base}${config.pages.research}/`, exact: false },
    { label: 'Posts', href: `${base}${config.pages.posts}/`, exact: false },
  ];
}

export function isNavActive(
  currentPath: string,
  href: string,
  exact: boolean
): boolean {
  if (exact) {
    return currentPath === href || currentPath === href.replace(/\/$/, '');
  }

  return (
    currentPath.startsWith(href) ||
    currentPath.startsWith(href.replace(/\/$/, ''))
  );
}
