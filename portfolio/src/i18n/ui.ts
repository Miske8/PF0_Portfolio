/**
 * Chaînes d'interface (UI) du site — français et anglais.
 * ---------------------------------------------------------------------------
 * Toute chaîne visible par l'utilisateur doit figurer ici, dans les deux
 * langues. Les contenus longs (projets, présentation) vivent dans
 * `src/content/` et `src/data/`.
 */

export const defaultLang = 'fr' as const;
export const languages = { fr: 'Français', en: 'English' } as const;
export type Lang = keyof typeof languages;

/**
 * Table de correspondance des routes entre les deux langues.
 * Utilisée par le sélecteur de langue pour rester sur la page courante.
 */
export const routes = {
  home: { fr: '/', en: '/en/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  skills: { fr: '/competences/', en: '/en/skills/' },
  projects: { fr: '/projets/', en: '/en/projects/' },
  services: { fr: '/services/', en: '/en/services/' },
  resume: { fr: '/cv/', en: '/en/resume/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
} as const;

export type RouteKey = keyof typeof routes;

export const ui = {
  fr: {
    // ---------------------------------------------------------------- global
    'site.tagline': 'Développeur web & application',
    'a11y.skipToContent': 'Aller au contenu principal',
    'a11y.openMenu': 'Ouvrir le menu de navigation',
    'a11y.closeMenu': 'Fermer le menu de navigation',
    'a11y.languageSwitcher': 'Changer de langue',
    'a11y.currentPage': 'Page courante',
    'a11y.externalLink': 'ouvre un nouvel onglet',
    'a11y.breadcrumb': "Fil d'Ariane",

    // ------------------------------------------------------------ navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.services': 'Services',
    'nav.resume': 'CV',
    'nav.contact': 'Contact',
    'nav.main': 'Navigation principale',

    // ------------------------------------------------------------------- CTA
    'cta.viewProjects': 'Voir les projets',
    'cta.downloadResume': 'Télécharger le CV',
    'cta.getInTouch': 'Me contacter',
    'cta.contactMe': 'Discutons de votre projet',
    'cta.viewAllProjects': 'Tous les projets',
    'cta.viewCase': 'Voir la fiche projet',
    'cta.liveDemo': 'Démo en ligne',
    'cta.sourceCode': 'Code source',
    'cta.backToProjects': 'Retour aux projets',
    'cta.discoverProfile': 'Découvrir mon parcours',

    // ---------------------------------------------------------------- accueil
    'home.eyebrow': 'Portfolio',
    'home.heroSubtitle':
      "Je conçois et développe des sites et des applications web performants, accessibles et durables — du prototype à la mise en production.",
    'home.value.title': 'Ce que je fais',
    'home.value.1.title': 'Développement front-end',
    'home.value.1.text':
      'Interfaces responsive, composants réutilisables, intégration au pixel et attention portée à l’accessibilité.',
    'home.value.2.title': 'Développement back-end',
    'home.value.2.text':
      'API REST, modélisation de bases de données, authentification et logique métier côté serveur.',
    'home.value.3.title': 'Applications web',
    'home.value.3.text':
      'Applications complètes, du cadrage fonctionnel au déploiement, avec un code maintenable et documenté.',
    'home.stack.title': 'Technologies principales',
    'home.featured.title': 'Projets mis en avant',
    'home.featured.subtitle':
      'Une sélection de réalisations récentes. Chaque fiche détaille le contexte, les objectifs, la stack et les résultats.',
    'home.process.title': 'Ma façon de travailler',
    'home.process.1.title': 'Cadrage',
    'home.process.1.text':
      'Comprendre le besoin réel, le périmètre et les contraintes avant d’écrire la première ligne de code.',
    'home.process.2.title': 'Conception',
    'home.process.2.text':
      'Arborescence, maquettes, choix techniques argumentés et validation avant développement.',
    'home.process.3.title': 'Développement',
    'home.process.3.text':
      'Itérations courtes, code versionné, revues régulières et points d’étape transparents.',
    'home.process.4.title': 'Mise en ligne',
    'home.process.4.text':
      'Tests, optimisation, déploiement, documentation et transfert de compétences.',

    // -------------------------------------------------------------- à propos
    'about.title': 'À propos',
    'about.intro':
      'Développeur web et application, je transforme des besoins métier en interfaces claires et en services fiables.',
    'about.photoAlt': 'Portrait de {name}, développeur web et application',
    'about.goals.title': 'Objectifs professionnels',

    // ------------------------------------------------------------ compétences
    'skills.title': 'Compétences',
    'skills.intro':
      'Les technologies que j’utilise au quotidien, classées par domaine d’intervention.',
    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end',
    'skills.tools': 'Outils & environnement',
    'skills.soft': 'Savoir-être',
    'skills.level.advanced': 'Confirmé',
    'skills.level.intermediate': 'Opérationnel',
    'skills.level.learning': 'En progression',

    // ---------------------------------------------------------------- projets
    'projects.title': 'Projets',
    'projects.intro':
      'Réalisations web et applicatives, présentées avec leur contexte, leurs objectifs et leurs résultats.',
    'projects.filterLabel': 'Filtrer par type de projet',
    'projects.filter.all': 'Tous',
    'projects.filter.web': 'Sites web',
    'projects.filter.application': 'Applications',
    'projects.empty': 'Aucun projet ne correspond à ce filtre.',
    'projects.count': '{count} projet(s) affiché(s)',
    'projects.featuredBadge': 'Mis en avant',

    // ------------------------------------------------------------ fiche projet
    'project.context': 'Contexte',
    'project.objectives': 'Objectifs',
    'project.stack': 'Stack technique',
    'project.features': 'Fonctionnalités principales',
    'project.role': 'Mon rôle',
    'project.results': 'Résultats',
    'project.meta': 'Informations',
    'project.year': 'Année',
    'project.duration': 'Durée',
    'project.category': 'Type',
    'project.category.web': 'Site web',
    'project.category.application': 'Application',
    'project.category.mobile': 'Application mobile',
    'project.links': 'Liens',
    'project.noLink': 'Aucun lien public pour ce projet.',
    'project.details': 'Détail du projet',
    'project.otherProjects': 'Autres projets',
    'project.coverAlt': 'Aperçu du projet {title}',

    // --------------------------------------------------------------- services
    'services.title': 'Services',
    'services.intro':
      'Prestations proposées aux entreprises, agences et indépendants, en mission ponctuelle ou en accompagnement continu.',
    'services.deliverables': 'Livrables',
    'services.scope': 'Périmètre',
    'services.range': 'Fourchette indicative',
    'services.cta.title': 'Un projet en tête ?',
    'services.cta.text':
      'Décrivez-moi votre besoin : je reviens vers vous avec une proposition claire, chiffrée et sans engagement.',

    // --------------------------------------------------------------- CV
    'resume.title': 'CV',
    'resume.intro':
      'Mescurriculum vitae est disponible en français et en anglais, au format PDF optimisé pour l’impression et les logiciels de recrutement.',
    'resume.updated': 'Dernière mise à jour : {date}',
    'resume.downloadFr': 'Télécharger le CV (FR)',
    'resume.downloadEn': 'Télécharger le resume (EN)',
    'resume.fileNote': 'Fichier PDF — s’ouvre dans un nouvel onglet',
    'resume.summary': 'En résumé',

    // ------------------------------------------------------------- contact
    'contact.title': 'Contact',
    'contact.intro':
      'Une opportunité, une mission ou une simple question ? Écrivez-moi, je réponds personnellement à chaque message.',
    'contact.form.title': 'Formulaire de contact',
    'contact.field.name': 'Nom',
    'contact.field.namePlaceholder': 'Votre nom',
    'contact.field.email': 'Adresse e-mail',
    'contact.field.emailPlaceholder': 'vous@exemple.fr',
    'contact.field.subject': 'Sujet',
    'contact.field.subjectPlaceholder': 'Objet de votre message',
    'contact.field.message': 'Message',
    'contact.field.messagePlaceholder': 'Décrivez votre besoin, votre projet ou votre offre…',
    'contact.field.required': 'obligatoire',
    'contact.field.optional': 'facultatif',
    'contact.submit': 'Envoyer le message',
    'contact.submit.loading': 'Envoi en cours…',
    'contact.consent':
      'Les informations transmises sont utilisées uniquement pour répondre à votre demande et ne sont jamais cédées à des tiers. Elles sont conservées 12 mois maximum.',
    'contact.success': 'Merci ! Votre message a bien été envoyé. Je vous réponds sous 24 à 48 h.',
    'contact.error.generic':
      'L’envoi a échoué. Merci de réessayer ou de m’écrire directement par e-mail.',
    'contact.error.name': 'Merci d’indiquer votre nom.',
    'contact.error.email': 'Merci d’indiquer une adresse e-mail valide.',
    'contact.error.message': 'Merci de rédiger un message d’au moins 10 caractères.',
    'contact.direct': 'Écrire directement',
    'contact.profiles': 'Profils en ligne',
    'contact.availability': 'Disponibilité',
    'contact.responseTime': 'Délai de réponse',
    'contact.location': 'Localisation',

    // ------------------------------------------------------------- pied de page
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.legal': 'Informations légales',
    'footer.legalNotice': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.rights': 'Tous droits réservés.',
    'footer.builtWith': 'Site statique généré avec Astro, hébergé en France.',

    // ------------------------------------------------------------- 404
    'notFound.title': 'Page introuvable',
    'notFound.text':
      'La page demandée n’existe pas ou a été déplacée. Utilisez la navigation ci-dessous pour poursuivre votre visite.',
  },

  en: {
    // ---------------------------------------------------------------- global
    'site.tagline': 'Web & application developer',
    'a11y.skipToContent': 'Skip to main content',
    'a11y.openMenu': 'Open navigation menu',
    'a11y.closeMenu': 'Close navigation menu',
    'a11y.languageSwitcher': 'Switch language',
    'a11y.currentPage': 'Current page',
    'a11y.externalLink': 'opens in a new tab',
    'a11y.breadcrumb': 'Breadcrumb',

    // ------------------------------------------------------------ navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
    'nav.main': 'Main navigation',

    // ------------------------------------------------------------------- CTA
    'cta.viewProjects': 'View projects',
    'cta.downloadResume': 'Download resume',
    'cta.getInTouch': 'Get in touch',
    'cta.contactMe': 'Let’s talk about your project',
    'cta.viewAllProjects': 'All projects',
    'cta.viewCase': 'View case study',
    'cta.liveDemo': 'Live demo',
    'cta.sourceCode': 'Source code',
    'cta.backToProjects': 'Back to projects',
    'cta.discoverProfile': 'Discover my background',

    // ---------------------------------------------------------------- home
    'home.eyebrow': 'Portfolio',
    'home.heroSubtitle':
      'I design and build fast, accessible and maintainable websites and web applications — from prototype to production.',
    'home.value.title': 'What I do',
    'home.value.1.title': 'Front-end development',
    'home.value.1.text':
      'Responsive interfaces, reusable components, pixel-accurate integration and a strong focus on accessibility.',
    'home.value.2.title': 'Back-end development',
    'home.value.2.text':
      'REST APIs, database modelling, authentication and server-side business logic.',
    'home.value.3.title': 'Web applications',
    'home.value.3.text':
      'End-to-end applications, from functional scoping to deployment, with maintainable and documented code.',
    'home.stack.title': 'Core technologies',
    'home.featured.title': 'Featured projects',
    'home.featured.subtitle':
      'A selection of recent work. Each case study details the context, objectives, stack and outcomes.',
    'home.process.title': 'How I work',
    'home.process.1.title': 'Scoping',
    'home.process.1.text':
      'Understanding the real need, the scope and the constraints before writing the first line of code.',
    'home.process.2.title': 'Design',
    'home.process.2.text':
      'Sitemap, mockups, justified technical choices and sign-off before development starts.',
    'home.process.3.title': 'Development',
    'home.process.3.text':
      'Short iterations, versioned code, regular reviews and transparent progress updates.',
    'home.process.4.title': 'Launch',
    'home.process.4.text':
      'Testing, optimisation, deployment, documentation and knowledge handover.',

    // --------------------------------------------------------------- about
    'about.title': 'About',
    'about.intro':
      'As a web and application developer, I turn business needs into clear interfaces and reliable services.',
    'about.photoAlt': 'Portrait of {name}, web and application developer',
    'about.goals.title': 'Professional goals',

    // -------------------------------------------------------------- skills
    'skills.title': 'Skills',
    'skills.intro': 'The technologies I use day to day, grouped by area of expertise.',
    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end',
    'skills.tools': 'Tools & environment',
    'skills.soft': 'Soft skills',
    'skills.level.advanced': 'Advanced',
    'skills.level.intermediate': 'Proficient',
    'skills.level.learning': 'Improving',

    // ------------------------------------------------------------ projects
    'projects.title': 'Projects',
    'projects.intro':
      'Web and application work, presented with its context, objectives and outcomes.',
    'projects.filterLabel': 'Filter by project type',
    'projects.filter.all': 'All',
    'projects.filter.web': 'Websites',
    'projects.filter.application': 'Applications',
    'projects.empty': 'No project matches this filter.',
    'projects.count': '{count} project(s) shown',
    'projects.featuredBadge': 'Featured',

    // -------------------------------------------------------- project detail
    'project.context': 'Context',
    'project.objectives': 'Objectives',
    'project.stack': 'Technical stack',
    'project.features': 'Key features',
    'project.role': 'My role',
    'project.results': 'Outcomes',
    'project.meta': 'Details',
    'project.year': 'Year',
    'project.duration': 'Duration',
    'project.category': 'Type',
    'project.category.web': 'Website',
    'project.category.application': 'Application',
    'project.category.mobile': 'Mobile application',
    'project.links': 'Links',
    'project.noLink': 'No public link for this project.',
    'project.details': 'Project detail',
    'project.otherProjects': 'Other projects',
    'project.coverAlt': 'Preview of the {title} project',

    // ------------------------------------------------------------ services
    'services.title': 'Services',
    'services.intro':
      'Services for companies, agencies and freelancers, as a one-off mission or ongoing support.',
    'services.deliverables': 'Deliverables',
    'services.scope': 'Scope',
    'services.range': 'Indicative range',
    'services.cta.title': 'Have a project in mind?',
    'services.cta.text':
      'Tell me about your needs and I will come back with a clear, itemised, no-commitment proposal.',

    // -------------------------------------------------------------- resume
    'resume.title': 'Resume',
    'resume.intro':
      'My resume is available in French and English as a PDF optimised for printing and applicant tracking systems.',
    'resume.updated': 'Last updated: {date}',
    'resume.downloadFr': 'Download resume (FR)',
    'resume.downloadEn': 'Download resume (EN)',
    'resume.fileNote': 'PDF file — opens in a new tab',
    'resume.summary': 'Summary',

    // ------------------------------------------------------------- contact
    'contact.title': 'Contact',
    'contact.intro':
      'An opportunity, a mission or a simple question? Write to me — I answer every message personally.',
    'contact.form.title': 'Contact form',
    'contact.field.name': 'Name',
    'contact.field.namePlaceholder': 'Your name',
    'contact.field.email': 'Email address',
    'contact.field.emailPlaceholder': 'you@example.com',
    'contact.field.subject': 'Subject',
    'contact.field.subjectPlaceholder': 'What is your message about?',
    'contact.field.message': 'Message',
    'contact.field.messagePlaceholder': 'Describe your needs, your project or your offer…',
    'contact.field.required': 'required',
    'contact.field.optional': 'optional',
    'contact.submit': 'Send message',
    'contact.submit.loading': 'Sending…',
    'contact.consent':
      'The information you send is used only to answer your request and is never shared with third parties. It is kept for a maximum of 12 months.',
    'contact.success': 'Thank you! Your message has been sent. I will reply within 24 to 48 hours.',
    'contact.error.generic': 'Sending failed. Please try again or email me directly.',
    'contact.error.name': 'Please enter your name.',
    'contact.error.email': 'Please enter a valid email address.',
    'contact.error.message': 'Please write a message of at least 10 characters.',
    'contact.direct': 'Email me directly',
    'contact.profiles': 'Online profiles',
    'contact.availability': 'Availability',
    'contact.responseTime': 'Response time',
    'contact.location': 'Location',

    // -------------------------------------------------------------- footer
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.legalNotice': 'Legal notice',
    'footer.privacy': 'Privacy policy',
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Static site generated with Astro, hosted in France.',

    // ---------------------------------------------------------------- 404
    'notFound.title': 'Page not found',
    'notFound.text':
      'The page you requested does not exist or has been moved. Use the navigation below to continue.',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
