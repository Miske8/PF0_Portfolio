import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/utils';

export type ProjectEntry = CollectionEntry<'projects'>;

/** Chemin public d'une fiche projet dans une langue donnée. */
export function projectPath(slug: string, lang: Lang): string {
  return lang === 'fr' ? `/projets/${slug}/` : `/en/projects/${slug}/`;
}

/** Extrait le nom de fichier (sans extension) utilisé comme slug d'URL. */
export function slugOf(entry: ProjectEntry): string {
  return entry.id.split('/').slice(1).join('/');
}

/** Langue d'une entrée, déduite de son identifiant (`fr/…` ou `en/…`). */
export function langOf(entry: ProjectEntry): Lang {
  return entry.id.startsWith('en/') ? 'en' : 'fr';
}

/**
 * Retourne les projets publiés d'une langue, triés par `order` puis par année
 * décroissante. Les projets marqués `draft: true` sont exclus.
 */
export async function getProjects(lang: Lang): Promise<ProjectEntry[]> {
  const entries = await getCollection('projects', ({ data, id }) => {
    if (data.draft) return false;
    return lang === 'en' ? id.startsWith('en/') : id.startsWith('fr/');
  });

  return entries.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

/** Projets mis en avant sur la page d'accueil. */
export async function getFeaturedProjects(lang: Lang, limit = 3): Promise<ProjectEntry[]> {
  const projects = await getProjects(lang);
  const featured = projects.filter((project) => project.data.featured);
  return (featured.length > 0 ? featured : projects).slice(0, limit);
}

/**
 * Retrouve la fiche équivalente dans l'autre langue grâce à `translationKey`.
 * Retourne `undefined` si la traduction n'existe pas encore.
 */
export async function getTranslation(entry: ProjectEntry): Promise<ProjectEntry | undefined> {
  const targetLang: Lang = langOf(entry) === 'fr' ? 'en' : 'fr';
  const all = await getCollection('projects');
  return all.find(
    (candidate) =>
      langOf(candidate) === targetLang && candidate.data.translationKey === entry.data.translationKey
  );
}

/**
 * Vérifie la parité FR/EN : signale les projets sans traduction.
 * Utilisé par le script de contrôle qualité (`npm run check:content`).
 */
export async function findTranslationGaps(): Promise<string[]> {
  const all = await getCollection('projects');
  const keys = new Map<string, Set<Lang>>();

  for (const entry of all) {
    const key = entry.data.translationKey;
    if (!keys.has(key)) keys.set(key, new Set());
    keys.get(key)!.add(langOf(entry));
  }

  return [...keys.entries()]
    .filter(([, langs]) => langs.size < 2)
    .map(([key, langs]) => `${key} — langues présentes : ${[...langs].join(', ') || 'aucune'}`);
}
