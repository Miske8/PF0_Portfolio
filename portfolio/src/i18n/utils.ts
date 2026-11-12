import { ui, defaultLang, routes, type Lang, type RouteKey, type UIKey } from './ui';

export { defaultLang, languages, routes } from './ui';
export type { Lang, RouteKey, UIKey } from './ui';

/** Détermine la langue à partir de l'URL courante. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return defaultLang;
}

/**
 * Retourne la fonction de traduction pour une langue.
 * Si une clé manque dans la langue cible, la valeur française est utilisée.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars?: Record<string, string | number>): string {
    const value =
      (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key];
    if (!vars) return value;
    return Object.entries(vars).reduce(
      (acc, [name, replacement]) => acc.replaceAll(`{${name}}`, String(replacement)),
      value
    );
  };
}

/** Construit le chemin d'une route nommée dans une langue donnée. */
export function localizePath(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

/** Ajoute le préfixe de langue à un chemin interne. */
export function withLang(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return path === '/' ? '/en/' : `/en${path}`;
}

/**
 * Détermine la langue opposée à partir de l'URL courante.
 */
export function getAlternateLang(url: URL): Lang {
  return getLangFromUrl(url) === 'fr' ? 'en' : 'fr';
}

/**
 * Retourne l'URL de la page équivalente dans l'autre langue.
 * `alternatePath` permet de gérer les pages dynamiques (fiches projet),
 * dont le chemin diffère entre les deux versions.
 */
export function getAlternateUrl(
  url: URL,
  currentRouteKey?: RouteKey,
  alternatePath?: string
): string {
  const target = getAlternateLang(url);
  if (alternatePath) return withLang(alternatePath, target);
  if (currentRouteKey) return localizePath(currentRouteKey, target);
  return target === 'fr' ? '/' : '/en/';
}

/** Table de correspondance type de projet → clé de traduction. */
export function categoryLabelKey(category: 'web' | 'application' | 'mobile'): UIKey {
  return `project.category.${category}` as UIKey;
}

/** Formate une date « 2025-01 » selon la langue. */
export function formatMonth(value: string, lang: Lang): string {
  const [year, month] = value.split('-').map(Number);
  if (!year) return value;
  const date = new Date(Date.UTC(year, (month ?? 1) - 1, 1));
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
