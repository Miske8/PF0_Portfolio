# Guide de mise à jour du contenu

Ce guide explique comment modifier le site **sans connaissance technique préalable**.
Toutes les modifications se font dans le dossier `portfolio/`. Après chaque
modification, relancez la commande de publication (voir § 8).

---

## 1. Les 5 fichiers à connaître

| Ce que vous voulez modifier | Fichier à ouvrir |
|---|---|
| Nom, titre, e-mail, réseaux sociaux, disponibilité, CV | `src/data/site.ts` |
| Projets (ajout, modification, suppression) | `src/content/projects/fr/` et `src/content/projects/en/` |
| Page « À propos » | `src/content/pages/fr/about.md` et `src/content/pages/en/about.md` |
| Compétences | `src/data/skills.ts` |
| Services et tarifs indicatifs | `src/data/services.ts` |
| Textes de l'interface (boutons, libellés, messages) | `src/i18n/ui.ts` |

---

## 2. Modifier vos informations personnelles

Ouvrez `src/data/site.ts` et remplacez les valeurs entre guillemets.

```ts
export const site = {
  author: 'Prénom Nom',              // votre nom
  initials: 'PN',                    // 2 lettres, affichées dans le logo
  jobTitle: {
    fr: 'Développeur web & application',
    en: 'Web & application developer',
  },
  email: 'contact@prenom-nom.fr',
  availability: {
    fr: 'Disponible pour une mission ou un poste à partir du 1er mars',
    en: 'Available for a mission or a position from March 1st',
  },
  // ...
};
```

**Règles importantes**

- Ne supprimez pas les apostrophes ni les virgules : elles encadrent le texte.
- Si votre texte contient une apostrophe (`'`), écrivez-le entre guillemets doubles :
  `fr: "L'expérience utilisateur avant tout"`.
- Renseignez **toujours** les deux langues (`fr` et `en`).

---

## 3. Ajouter un projet

Un projet correspond à **deux fichiers** : un en français, un en anglais.

### Étape 1 — Créer le fichier français

Copiez un fichier existant de `src/content/projects/fr/`, renommez-le
(ex. `mon-nouveau-projet.md`) et adaptez son contenu.

> Le **nom du fichier** devient l'adresse de la page :
> `mon-nouveau-projet.md` → `https://votre-domaine.fr/projets/mon-nouveau-projet/`

### Étape 2 — Créer le fichier anglais

Faites de même dans `src/content/projects/en/`, avec un nom de fichier adapté à
l'anglais (ex. `my-new-project.md`).

> Le champ `translationKey` doit être **identique dans les deux fichiers**.
> C'est lui qui relie la version française et la version anglaise et qui fait
> fonctionner le sélecteur de langue. Un exemple :

**Fichier FR** — `src/content/projects/fr/mon-nouveau-projet.md`

```markdown
---
translationKey: mon-nouveau-projet
title: 'Refonte du site de la mairie'
summary: 'Refonte complète du site institutionnel, avec un budget et un délai contraints.'
cover: '../../../assets/projects/mairie.png'
coverAlt: 'Page d’accueil du nouveau site de la mairie'
category: 'web'
stack: ['Astro', 'Tailwind CSS', 'PHP']
year: 2025
duration: '2 mois'
role: 'Développeur front-end'
context: 'Le site existant n’était pas responsive et impossible à mettre à jour.'
objectives:
  - 'Rendre le site accessible sur mobile'
  - 'Permettre aux agents de publier des actualités'
features:
  - 'Annuaire des services avec recherche'
  - 'Publication d’actualités par les agents'
results:
  - 'Taux de consultation mobile passé de 34 % à 61 %'
demoUrl: 'https://exemple.fr'
repoUrl: 'https://github.com/votre-compte/mairie'
featured: false
order: 4
---

## Le besoin

Texte long décrivant le projet, en Markdown.
```

**Fichier EN** — `src/content/projects/en/municipal-website.md`

```markdown
---
translationKey: mon-nouveau-projet   # ← identique au fichier FR
title: 'Municipal website redesign'
summary: 'Full redesign of the institutional website, with tight budget and timeline.'
# ... mêmes champs, traduits
---
```

### Signification des champs

| Champ | Obligatoire | Description |
|---|---|---|
| `translationKey` | Oui | Identifiant commun FR/EN — identique dans les deux fichiers |
| `title` | Oui | Titre affiché |
| `summary` | Oui | Résumé de 1 à 2 phrases sur la carte |
| `cover` | Non | Visuel, à placer dans `src/assets/projects/` |
| `coverAlt` | Oui si `cover` | Description du visuel pour les lecteurs d'écran |
| `category` | Oui | `web`, `application` ou `mobile` |
| `stack` | Oui | Liste des technologies |
| `year` | Oui | Année sur 4 chiffres |
| `duration` | Non | Durée, en texte libre |
| `role` | Oui | Votre rôle sur le projet |
| `context` | Oui | Contexte en 2 à 4 phrases |
| `objectives` | Oui | Liste des objectifs |
| `features` | Oui | Liste des fonctionnalités livrées |
| `results` | Oui | Liste des résultats obtenus |
| `demoUrl` | Non | Lien vers la démo en ligne |
| `repoUrl` | Non | Lien vers le dépôt GitHub |
| `featured` | Non | `true` pour afficher sur la page d'accueil |
| `order` | Non | Ordre d'affichage (1 = premier) |
| `draft` | Non | `true` pour masquer sans supprimer |

### Ajouter le visuel

1. Placez l'image dans `src/assets/projects/` (PNG ou JPG, **1600 px de large minimum**).
2. Dans le fichier Markdown, indiquez le chemin relatif :
   `cover: '../../../assets/projects/nom-de-limage.png'`
3. Décrivez l'image dans `coverAlt`.

Le site convertit automatiquement les images en WebP et génère les tailles
adaptées à chaque écran : inutile de redimensionner vous-même.

### Supprimer un projet

Supprimez les **deux** fichiers (FR et EN). Ou, pour le masquer temporairement,
ajoutez `draft: true` dans les deux fichiers.

---

## 4. Modifier la page « À propos »

Fichiers : `src/content/pages/fr/about.md` et `src/content/pages/en/about.md`.

- Le texte entre `---` en haut du fichier est l'en-tête (titre, accroche, objectifs).
- Le texte en dessous est rédigé en **Markdown** :
  - `## Titre` pour un sous-titre
  - `**gras**` pour du gras
  - `- texte` pour une puce
  - Laisser une **ligne vide** entre chaque paragraphe.

---

## 5. Modifier les compétences

Fichier : `src/data/skills.ts`.

```ts
{ label: { fr: 'Vue.js', en: 'Vue.js' }, level: 'intermediate' },
```

Niveaux possibles : `'advanced'` (confirmé), `'intermediate'` (opérationnel),
`'learning'` (en progression). Le niveau est facultatif : omettez la ligne
`level` pour afficher la compétence sans niveau.

---

## 6. Modifier les services et les tarifs

Fichier : `src/data/services.ts`. Chaque service contient un titre, une
description, un périmètre, des livrables et une fourchette indicative, à
renseigner dans les deux langues.

---

## 7. Remplacer le CV

Déposez vos deux fichiers PDF dans `public/cv/` en conservant **exactement**
ces noms :

- `cv-fr.pdf` — version française
- `resume-en.pdf` — version anglaise

Pensez ensuite à mettre à jour la date dans `src/data/site.ts` :

```ts
resumeUpdated: '2025-03',
```

---

## 8. Publier les modifications

Ouvrez un terminal dans le dossier `portfolio/` et lancez :

```bash
npm run check:content   # vérifie que FR et EN sont complets
npm run build           # construit le site
npm run deploy          # envoie le site en ligne
```

Pour prévisualiser avant publication :

```bash
npm run dev             # http://localhost:4321
```

---

## 9. Erreurs fréquentes

| Message | Cause | Solution |
|---|---|---|
| `translationKey` manquant | Champ absent d'un fichier | Ajoutez le champ dans les deux fichiers |
| Version anglaise manquante | Projet créé dans un seul dossier | Créez le fichier dans `en/` |
| Visuel introuvable | Chemin mal orthographié | Vérifiez le nom du fichier dans `src/assets/projects/` |
| Le projet n'apparaît pas | `draft: true` ou `order` élevé | Vérifiez ces champs |
| La page affiche un texte bizarre | Guillemet ou apostrophe non fermé | Vérifiez l'encadrement des textes |

En cas de doute, lancez `npm run check:content` : la commande indique
précisément ce qui doit être corrigé.

---

## 10. À faire une seule fois, avant la mise en ligne

1. Remplacer `Prénom Nom`, l'e-mail, GitHub et LinkedIn dans `src/data/site.ts`.
2. Remplacer le domaine `prenom-nom.fr` dans `astro.config.mjs` et `public/robots.txt`.
3. Remplacer les CV provisoires dans `public/cv/`.
4. Remplacer les projets de démonstration par vos projets réels.
5. Créer `public/api/config.php` sur le serveur à partir de `config.example.php`
   et y renseigner les identifiants SMTP o2switch.
6. Supprimer ou remplacer les visuels de démonstration dans `src/assets/projects/`.
