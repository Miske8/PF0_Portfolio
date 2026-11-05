import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collection « projects » — un fichier Markdown par projet et par langue.
 * ---------------------------------------------------------------------------
 * Arborescence :
 *   src/content/projects/fr/mon-projet.md      → /projets/mon-projet/
 *   src/content/projects/en/my-project.md      → /en/projects/my-project/
 *
 * Le nom du fichier détermine l'URL du projet : choisissez-le court et lisible,
 * et adaptez-le à chaque langue pour le référencement.
 *
 * Le champ `translationKey` relie les deux versions entre elles : il doit être
 * IDENTIQUE dans le fichier FR et dans le fichier EN. C'est ce qui alimente le
 * sélecteur de langue et les balises hreflang.
 *
 * Pour AJOUTER un projet : dupliquez un fichier existant dans chaque dossier,
 * renommez-le, renseignez les champs ci-dessous. Aucun code à modifier.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      /** Identifiant de traduction — identique en FR et en EN. */
      translationKey: z.string(),
      /** Titre du projet. */
      title: z.string(),
      /** Résumé affiché sur la carte (1 à 2 phrases). */
      summary: z.string(),
      /** Visuel de couverture. Placez les images dans src/assets/projects/. */
      cover: image().optional(),
      /** Texte alternatif du visuel — obligatoire dès qu'un visuel est fourni. */
      coverAlt: z.string().optional(),
      /** Domaine principal du projet. */
      category: z.enum(['web', 'application', 'mobile']),
      /** Technologies affichées sous forme de badges. */
      stack: z.array(z.string()).min(1),
      /** Année de réalisation. */
      year: z.number().int().min(2000).max(2100),
      /** Durée indicative (texte libre, ex. « 3 mois »). */
      duration: z.string().optional(),
      /** Rôle tenu sur le projet. */
      role: z.string(),
      /** Contexte du projet (2 à 4 phrases). */
      context: z.string(),
      /** Objectifs poursuivis. */
      objectives: z.array(z.string()).min(1),
      /** Fonctionnalités principales livrées. */
      features: z.array(z.string()).min(1),
      /** Résultats obtenus, mesurables si possible. */
      results: z.array(z.string()).min(1),
      /** URL de la démo en ligne, si elle existe. */
      demoUrl: z.string().url().optional(),
      /** URL du dépôt de code public, s'il existe. */
      repoUrl: z.string().url().optional(),
      /** Mise en avant sur la page d'accueil. */
      featured: z.boolean().default(false),
      /** Ordre d'affichage : plus petit = plus haut. */
      order: z.number().int().default(99),
      /** Masque le projet sans le supprimer. */
      draft: z.boolean().default(false),
    }),
});

/**
 * Collection « pages » — contenus longs rédigés en Markdown.
 * ---------------------------------------------------------------------------
 * Arborescence :
 *   src/content/pages/fr/about.md
 *   src/content/pages/en/about.md
 */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),
    /** Objectifs professionnels listés sur la page À propos. */
    goals: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, pages };
