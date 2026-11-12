---
translationKey: workshop-website
title: 'Site vitrine — Atelier Bois & Co'
summary: 'Site vitrine bilingue pour un atelier de menuiserie artisanale, avec présentation des réalisations et demande de devis en ligne.'
cover: '../../../assets/projects/workshop.png'
coverAlt: 'Page d’accueil du site de l’atelier avec une galerie de réalisations en bois'
category: 'web'
stack: ['Astro', 'Tailwind CSS', 'JavaScript', 'PHP', 'SEO', 'Figma']
year: 2024
duration: '6 semaines'
role: 'Développeur front-end et intégrateur — design réalisé avec le client'
context: "L’atelier disposait d’une page sur un réseau social et d’un bouche-à-oreille solide, mais d’aucun site capable de présenter son savoir-faire ni de recevoir des demandes de devis structurées. La clientèle étant partiellement étrangère, une version anglaise était indispensable."
objectives:
  - 'Présenter l’atelier, ses savoir-faire et une sélection de réalisations.'
  - 'Recevoir des demandes de devis qualifiées, avec descriptif du projet et budget indicatif.'
  - 'Être visible sur les recherches locales de menuiserie sur mesure.'
  - 'Permettre au gérant de mettre à jour les réalisations sans compétence technique.'
features:
  - 'Galerie de réalisations filtrable par type de projet (cuisine, escalier, mobilier, agencement).'
  - 'Formulaire de demande de devis avec type de projet, dimensions, budget et envoi de photos.'
  - 'Version française et anglaise avec sélecteur de langue.'
  - 'Fiches réalisations détaillées avec matériaux, dimensions et techniques employées.'
  - 'Optimisation du référencement local et données structurées pour les moteurs de recherche.'
  - 'Interface d’administration légère pour ajouter une réalisation.'
results:
  - 'Score Lighthouse de 100 en performance, accessibilité, bonnes pratiques et SEO sur mobile.'
  - '12 à 18 demandes de devis qualifiées reçues chaque mois, contre 4 auparavant.'
  - 'Première position sur plusieurs recherches locales de menuiserie sur mesure après trois mois.'
  - 'Réalisations mises à jour en autonomie par le gérant, sans intervention technique.'
demoUrl: 'https://exemple-atelier-bois.fr'
featured: true
order: 2
---

## Le besoin

L’atelier vivait d’un savoir-faire reconnu et d’un bouche-à-oreille efficace, mais n’avait aucune présence en ligne à la hauteur de la qualité de son travail. Les demandes arrivaient par téléphone, souvent incomplètes, ce qui rallongeait chaque chiffrage.

Deux enjeux ont guidé la conception : **montrer la qualité du travail réalisé** et **qualifier les demandes** en amont.

## Choix techniques

Le site est intégralement statique, généré avec **Astro**. Ce choix répond à un besoin simple : un site vitrine n’a pas besoin de JavaScript côté client pour fonctionner. Résultat, des pages qui s’affichent immédiatement, un excellent référencement et un hébergement mutualisé suffisant.

| Besoin | Solution retenue |
|---|---|
| Contenu facile à faire évoluer | Réalisations stockées dans des fichiers Markdown |
| Bilingue FR/EN | Routage i18n natif avec URLs distinctes et balises `hreflang` |
| Formulaire avec photos | Endpoint PHP + PHPMailer, envoi par SMTP authentifié |
| Référencement local | Données structurées `LocalBusiness` et pages par type de réalisation |

## Le formulaire comme outil de qualification

Le formulaire de demande de devis a été pensé comme un filtre, pas comme une simple boîte de réception. Le demandeur précise le type de projet, les dimensions approximatives, le budget envisagé et la date souhaitée, et peut joindre jusqu’à cinq photos.

Ces informations permettent au gérant de répondre avec une fourchette crédible dès le premier échange, ce qui a considérablement réduit les allers-retours.

## Accessibilité et performance

Chaque image est servie en WebP avec un jeu de tailles adapté à l’écran, en chargement différé. La navigation est entièrement possible au clavier, les contrastes respectent le niveau AA et la structure de titres est cohérente sur l’ensemble des pages. Le site obtient un score de 100 sur les quatre catégories Lighthouse en mobile.

## Résultat

Le site a transformé une activité qui dépendait du bouche-à-oreille en un canal d’acquisition régulier. Le volume de demandes a triplé, avec une qualité nettement supérieure dès le premier contact.
