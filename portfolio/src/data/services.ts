/**
 * Prestations proposées (section Services).
 * ---------------------------------------------------------------------------
 * Pour ajouter un service : ajoutez un objet dans le tableau `services`.
 */

import type { Lang } from '../i18n/utils';

export interface Service {
  id: string;
  icon: 'window' | 'code' | 'devices' | 'app' | 'refresh';
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  /** Périmètre : ce qui est inclus dans la prestation. */
  scope: Record<Lang, string[]>;
  /** Livrables remis au client. */
  deliverables: Record<Lang, string[]>;
  /** Fourchette indicative, affichée à titre informatif. */
  range: Record<Lang, string>;
}

export const services: Service[] = [
  {
    id: 'site-vitrine',
    icon: 'window',
    title: {
      fr: 'Création de site vitrine',
      en: 'Marketing website creation',
    },
    description: {
      fr: 'Conception et réalisation d’un site vitrine professionnel qui présente clairement votre activité et convertit vos visiteurs en contacts.',
      en: 'Design and build of a professional website that presents your business clearly and turns visitors into leads.',
    },
    scope: {
      fr: [
        'Cadrage, arborescence et priorisation des contenus',
        'Maquettes desktop et mobile',
        'Développement des pages, formulaire de contact, SEO de base',
      ],
      en: [
        'Scoping, sitemap and content prioritisation',
        'Desktop and mobile mockups',
        'Page development, contact form, baseline SEO',
      ],
    },
    deliverables: {
      fr: ['Site en ligne', 'Accès aux sources', 'Guide de mise à jour'],
      en: ['Live website', 'Source code access', 'Content update guide'],
    },
    range: {
      fr: 'à partir de 1 800 € HT',
      en: 'from €1,800 excl. tax',
    },
  },
  {
    id: 'front-end',
    icon: 'code',
    title: {
      fr: 'Développement front-end',
      en: 'Front-end development',
    },
    description: {
      fr: 'Intégration ou développement d’interfaces à partir de maquettes Figma, avec des composants réutilisables et un code lisible.',
      en: 'Integration or development of interfaces from Figma mockups, with reusable components and readable code.',
    },
    scope: {
      fr: [
        'Intégration fidèle aux maquettes',
        'Composants réutilisables et documentés',
        'Interactions, états de chargement et gestion des erreurs',
      ],
      en: [
        'Faithful integration of the mockups',
        'Reusable, documented components',
        'Interactions, loading states and error handling',
      ],
    },
    deliverables: {
      fr: ['Code source versionné', 'Bibliothèque de composants', 'Notes d’intégration'],
      en: ['Versioned source code', 'Component library', 'Integration notes'],
    },
    range: {
      fr: 'à partir de 350 € HT / jour',
      en: 'from €350 excl. tax / day',
    },
  },
  {
    id: 'responsive',
    icon: 'devices',
    title: {
      fr: 'Intégration responsive',
      en: 'Responsive integration',
    },
    description: {
      fr: 'Adaptation d’un site existant aux mobiles et tablettes, avec une attention particulière à la lisibilité et aux zones tactiles.',
      en: 'Adapting an existing site to mobile and tablet, with close attention to readability and touch targets.',
    },
    scope: {
      fr: [
        'Points de rupture mobile, tablette et desktop',
        'Images responsives et formats modernes',
        'Correction des débordements et des tailles de police',
      ],
      en: [
        'Mobile, tablet and desktop breakpoints',
        'Responsive images and modern formats',
        'Fixing overflows and font sizing',
      ],
    },
    deliverables: {
      fr: ['Site responsive', 'Rapport de tests multi-écrans'],
      en: ['Responsive website', 'Multi-device test report'],
    },
    range: {
      fr: 'à partir de 600 € HT',
      en: 'from €600 excl. tax',
    },
  },
  {
    id: 'application-web',
    icon: 'app',
    title: {
      fr: 'Développement d’applications web',
      en: 'Web application development',
    },
    description: {
      fr: 'Applications métier sur mesure : authentification, tableaux de bord, gestion de données et API.',
      en: 'Custom business applications: authentication, dashboards, data management and APIs.',
    },
    scope: {
      fr: [
        'Modélisation des données et conception de l’API',
        'Interface d’administration et parcours utilisateurs',
        'Authentification, rôles et sécurité de base',
      ],
      en: [
        'Data modelling and API design',
        'Admin interface and user journeys',
        'Authentication, roles and baseline security',
      ],
    },
    deliverables: {
      fr: ['Application déployée', 'Documentation technique', 'Jeu de données de démonstration'],
      en: ['Deployed application', 'Technical documentation', 'Demo dataset'],
    },
    range: {
      fr: 'sur devis, à partir de 4 000 € HT',
      en: 'on quotation, from €4,000 excl. tax',
    },
  },
  {
    id: 'maintenance',
    icon: 'refresh',
    title: {
      fr: 'Maintenance et évolution',
      en: 'Maintenance and improvements',
    },
    description: {
      fr: 'Reprise d’un projet existant, corrections, mises à jour de sécurité et ajout de fonctionnalités.',
      en: 'Taking over an existing project, bug fixes, security updates and new features.',
    },
    scope: {
      fr: [
        'Audit technique et priorisation des corrections',
        'Mises à jour de dépendances et de sécurité',
        'Évolutions fonctionnelles ponctuelles',
      ],
      en: [
        'Technical audit and fix prioritisation',
        'Dependency and security updates',
        'Occasional feature work',
      ],
    },
    deliverables: {
      fr: ['Rapport d’audit', 'Correctifs livrés', 'Recommandations'],
      en: ['Audit report', 'Delivered fixes', 'Recommendations'],
    },
    range: {
      fr: 'à partir de 80 € HT / mois ou 350 € HT / jour',
      en: 'from €80 excl. tax / month or €350 excl. tax / day',
    },
  },
];
