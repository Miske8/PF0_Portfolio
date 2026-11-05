/**
 * Compétences techniques et savoir-être.
 * ---------------------------------------------------------------------------
 * Pour ajouter une compétence : ajoutez une ligne dans le groupe concerné.
 * `label.fr` et `label.en` peuvent contenir la même valeur pour les noms de
 * technologies, qui ne se traduisent pas.
 *
 * `level` est facultatif et accepte : 'advanced' | 'intermediate' | 'learning'.
 */

import type { Lang } from '../i18n/utils';

export type SkillLevel = 'advanced' | 'intermediate' | 'learning';

export interface Skill {
  label: Record<Lang, string>;
  level?: SkillLevel;
}

export interface SkillGroup {
  /** Clé de traduction du titre du groupe (voir src/i18n/ui.ts). */
  titleKey: 'skills.frontend' | 'skills.backend' | 'skills.tools' | 'skills.soft';
  icon: 'layout' | 'server' | 'wrench' | 'users';
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    titleKey: 'skills.frontend',
    icon: 'layout',
    skills: [
      { label: { fr: 'HTML5 sémantique', en: 'Semantic HTML5' }, level: 'advanced' },
      { label: { fr: 'CSS3 / Tailwind CSS', en: 'CSS3 / Tailwind CSS' }, level: 'advanced' },
      { label: { fr: 'JavaScript (ES2023+)', en: 'JavaScript (ES2023+)' }, level: 'advanced' },
      { label: { fr: 'TypeScript', en: 'TypeScript' }, level: 'intermediate' },
      { label: { fr: 'React', en: 'React' }, level: 'intermediate' },
      { label: { fr: 'Astro', en: 'Astro' }, level: 'advanced' },
      { label: { fr: 'Accessibilité (WCAG 2.1 AA)', en: 'Accessibility (WCAG 2.1 AA)' }, level: 'intermediate' },
    ],
  },
  {
    titleKey: 'skills.backend',
    icon: 'server',
    skills: [
      { label: { fr: 'Node.js', en: 'Node.js' }, level: 'advanced' },
      { label: { fr: 'Express / Fastify', en: 'Express / Fastify' }, level: 'intermediate' },
      { label: { fr: 'API REST', en: 'REST APIs' }, level: 'advanced' },
      { label: { fr: 'PostgreSQL', en: 'PostgreSQL' }, level: 'intermediate' },
      { label: { fr: 'MongoDB', en: 'MongoDB' }, level: 'intermediate' },
      { label: { fr: 'MySQL / MariaDB', en: 'MySQL / MariaDB' }, level: 'intermediate' },
      { label: { fr: 'Authentification (JWT, sessions)', en: 'Authentication (JWT, sessions)' }, level: 'intermediate' },
      { label: { fr: 'PHP 8', en: 'PHP 8' }, level: 'intermediate' },
    ],
  },
  {
    titleKey: 'skills.tools',
    icon: 'wrench',
    skills: [
      { label: { fr: 'Git & GitHub', en: 'Git & GitHub' }, level: 'advanced' },
      { label: { fr: 'Docker', en: 'Docker' }, level: 'intermediate' },
      { label: { fr: 'Figma', en: 'Figma' }, level: 'intermediate' },
      { label: { fr: 'VS Code / Neovim', en: 'VS Code / Neovim' }, level: 'advanced' },
      { label: { fr: 'CI/CD (GitHub Actions)', en: 'CI/CD (GitHub Actions)' }, level: 'intermediate' },
      { label: { fr: 'cPanel / FTP / SSH', en: 'cPanel / FTP / SSH' }, level: 'intermediate' },
      { label: { fr: 'Tests (Vitest, Playwright)', en: 'Testing (Vitest, Playwright)' }, level: 'learning' },
    ],
  },
  {
    titleKey: 'skills.soft',
    icon: 'users',
    skills: [
      { label: { fr: 'Rigueur et souci du détail', en: 'Rigor and attention to detail' } },
      { label: { fr: 'Autonomie', en: 'Autonomy' } },
      { label: { fr: 'Communication claire', en: 'Clear communication' } },
      { label: { fr: 'Travail en équipe', en: 'Teamwork' } },
      { label: { fr: 'Curiosité technique', en: 'Technical curiosity' } },
      { label: { fr: 'Gestion des priorités', en: 'Prioritisation' } },
    ],
  },
];

/** Technologies affichées dans le bandeau de la page d'accueil. */
export const coreStack: string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Astro',
  'Node.js',
  'REST API',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'Docker',
  'Figma',
];
