/**
 * Données d'identité du site.
 * ---------------------------------------------------------------------------
 * ⚠️  FICHIER À PERSONNALISER EN PRIORITÉ.
 * Toutes les informations personnelles du site sont centralisées ici : modifier
 * ce fichier suffit à mettre à jour le nom, le titre, les liens et le CV.
 */

import type { ImageMetadata } from 'astro';

// Décommentez cette ligne et adaptez le chemin pour utiliser une photo :
// import photoProfil from '../assets/photo-profil.jpg';

export interface SocialLink {
  /** Libellé affiché (identique dans les deux langues). */
  label: string;
  href: string;
  /** Identifiant d'icône utilisé par le composant Icon.astro */
  icon: 'github' | 'linkedin' | 'mail' | 'globe';
}

export const site = {
  /** Nom affiché dans l'en-tête, le pied de page et les métadonnées. */
  author: 'Prénom Nom',

  /** Nom court utilisé pour le logo textuel. */
  shortName: 'P. Nom',

  /** Initiales affichées dans l'avatar de secours. */
  initials: 'PN',

  /** Titre professionnel, par langue. */
  jobTitle: {
    fr: 'Développeur web & application',
    en: 'Web & application developer',
  },

  /** E-mail professionnel affiché publiquement. */
  email: 'contact@prenom-nom.fr',

  /** Téléphone (optionnel — laisser vide pour masquer). */
  phone: '',

  /** Localisation affichée. */
  location: {
    fr: 'Lyon, France — télétravail possible',
    en: 'Lyon, France — remote friendly',
  },

  /** Message de disponibilité affiché sur l'accueil et le contact. */
  availability: {
    fr: 'Disponible pour une mission ou un poste à partir du 1er mars',
    en: 'Available for a mission or a position from March 1st',
  },

  /** Délai de réponse annoncé sur la page contact. */
  responseTime: {
    fr: 'Réponse sous 24 à 48 h ouvrées',
    en: 'Reply within 24 to 48 business hours',
  },

  /** Profils externes. */
  socials: [
    { label: 'GitHub', href: 'https://github.com/votre-compte', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/votre-profil', icon: 'linkedin' },
  ] as SocialLink[],

  /** CV PDF téléchargeables (chemins relatifs au dossier public/). */
  resume: {
    fr: { path: '/cv/cv-fr.pdf', label: 'CV — français' },
    en: { path: '/cv/resume-en.pdf', label: 'Resume — English' },
  },

  /** Date de dernière mise à jour des CV (affichée à l'utilisateur). */
  resumeUpdated: '2025-01',

  /**
   * Photo professionnelle.
   * ---------------------------------------------------------------------------
   * Pour l'activer :
   *   1. placez votre photo dans src/assets/ (JPG ou PNG, 800 × 800 px minimum) ;
   *   2. décommentez la ligne d'import en haut de ce fichier ;
   *   3. remplacez `null` par le nom de l'import.
   *
   * Laisser `null` affiche vos initiales à la place.
   */
  photo: null as ImageMetadata | null,
};

export type Site = typeof site;
