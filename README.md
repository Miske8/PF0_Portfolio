# Portfolio développeur web & application — livrables du projet

Ce dépôt regroupe les deux livrables du projet **CDC-PORTFOLIO-2025-01** :

1. le **cahier des charges professionnel bilingue**, prêt à être envoyé et signé ;
2. le **site portfolio bilingue FR/EN**, développé, testé et prêt à être déployé
   sur l'hébergement o2switch.

---

## 1. Cahier des charges professionnel

Dossier : `cahier-des-charges/`

| Fichier | Usage |
|---|---|
| `CDC-Portfolio-Dev-Web-FR-EN.pdf` | **Document contractuel** à envoyer au client (30 pages, page de garde, sommaire, signatures) |
| `CDC-Portfolio-Dev-Web-FR-EN.html` | Version imprimable — bouton « Imprimer / PDF » intégré |
| `CDC-Portfolio-Dev-Web-FR-EN.md` | Source Markdown, à modifier si le périmètre évolue |

### Ce que contient le document

- Page de garde avec fiche d'identification, historique des versions et documents de référence
- Synthèse exécutive et objectifs mesurables
- **Périmètre « in scope / out of scope »** : 17 éléments inclus, 12 éléments exclus, prérequis et responsabilités du Client
- Publics cibles et parcours utilisateurs
- Spécifications fonctionnelles détaillées, exigence par exigence (accueil, à propos, compétences, projets, services, CV, contact)
- Exigences non fonctionnelles : performance, SEO, accessibilité, compatibilité, sécurité, RGPD
- **Stack technique recommandée** et alternatives évaluées, contraintes o2switch explicitées
- Contenus à fournir par le Client, avec responsable et échéance
- Design et expérience utilisateur, composants du design system
- **Planning en 7 semaines** avec 4 jalons de validation et règles de révision
- **Budget estimatif** : 3 scénarios chiffrés, 12 options à l'unité, coûts récurrents, conditions financières
- Gestion des risques, critères de réussite et indicateurs
- Livrables attendus, options complémentaires
- **Signatures de validation** Client et Prestataire
- **Partie II — version anglaise** complète des sections contractuelles

### Modifier le document

```bash
cd tools
node build-cdc.mjs       # Markdown → HTML imprimable
node make-cdc-pdf.mjs    # HTML → PDF
```

---

## 2. Site portfolio

Dossier : `portfolio/`

| Élément | État |
|---|---|
| Stack | Astro 5, Tailwind CSS 4, TypeScript |
| Pages | 21 pages générées (FR + EN) |
| Sections | Accueil, À propos, Compétences, Projets, Fiches projet, Services, CV, Contact, 404 |
| Bilingue | URLs distinctes (`/projets/` ↔ `/en/projects/`), `hreflang`, sélecteur de langue |
| Gestion des projets | Un fichier Markdown par projet et par langue, sans toucher au code |
| Formulaire de contact | PHP 8 + SMTP authentifié, honeypot, limitation de débit, contrôle d'origine |
| Performance | Site statique, JavaScript client minimal, images converties en WebP responsive |
| Accessibilité | Navigation clavier, contrastes AA, structure sémantique, `prefers-reduced-motion` |
| SEO | Sitemap, robots.txt, données structurées, Open Graph, URLs propres par langue |
| Déploiement | `.htaccess` prêt pour o2switch (HTTPS, en-têtes de sécurité, cache), script `npm run deploy` |
| Documentation | Guides de mise à jour du contenu en français et en anglais |

### Démarrage

```bash
cd portfolio
npm install
npm run dev        # http://localhost:4321
```

### Publication

```bash
cd portfolio
npm run check:content   # parité FR/EN et visuels manquants
npm run build           # génère dist/
npm run deploy          # envoie dist/ vers o2switch
```

Voir `portfolio/README.md` pour la configuration du déploiement et
`portfolio/docs/` pour les guides de mise à jour du contenu.

---

## 3. Contenus de démonstration à remplacer

Le site est livré **fonctionnel et complet**, mais avec des contenus de
démonstration, clairement identifiables. Avant la mise en production :

| À remplacer | Emplacement |
|---|---|
| Nom, initiales, e-mail, téléphone, localisation | `portfolio/src/data/site.ts` |
| Liens GitHub et LinkedIn | `portfolio/src/data/site.ts` |
| Message de disponibilité et délai de réponse | `portfolio/src/data/site.ts` |
| Nom de domaine (`prenom-nom.fr`) | `portfolio/astro.config.mjs` et `portfolio/public/robots.txt` |
| CV en français et en anglais | `portfolio/public/cv/cv-fr.pdf` et `resume-en.pdf` |
| Projets (3 exemples fournis) | `portfolio/src/content/projects/fr/` et `en/` |
| Visuels des projets | `portfolio/src/assets/projects/` |
| Compétences | `portfolio/src/data/skills.ts` |
| Services et fourchettes tarifaires | `portfolio/src/data/services.ts` |

La commande `npm run check:content` liste automatiquement les valeurs de
démonstration encore présentes.

---

## 4. Structure du dépôt

```
Projet Dev/
├── README.md                          Ce fichier
├── cahier-des-charges/                Livrable 1 — document contractuel
│   ├── CDC-Portfolio-Dev-Web-FR-EN.pdf
│   ├── CDC-Portfolio-Dev-Web-FR-EN.html
│   └── CDC-Portfolio-Dev-Web-FR-EN.md
├── docs/
│   └── CHECKLIST-MISE-EN-LIGNE.md     Checklist de mise en production
├── portfolio/                         Livrable 2 — le site
│   ├── README.md                      Documentation technique
│   ├── docs/                          Guides de mise à jour (FR et EN)
│   ├── public/                        Fichiers statiques, endpoint PHP, .htaccess
│   ├── scripts/                       Contrôle de contenu et déploiement
│   └── src/                           Code source du site
├── apercus/                           Captures d'écran des pages
└── tools/                             Génération du CDC, des visuels et des PDF
```

---

## 5. Outils de génération

Dossier : `tools/` (dépendances séparées du site)

| Commande | Rôle |
|---|---|
| `node build-cdc.mjs` | Cahier des charges Markdown → HTML imprimable |
| `node make-cdc-pdf.mjs` | HTML imprimable → PDF paginé |
| `node make-covers.mjs` | Visuels de couverture des projets (PNG 1600 × 900) |
| `node make-assets.mjs` | Image Open Graph, icône iOS, CV PDF provisoires |
| `node shoot.mjs` | Captures d'écran de contrôle du site |

Ces scripts utilisent Chrome headless, installé automatiquement dans
`tools/.chrome-cache/` — aucun navigateur système n'est requis.

---

## 6. Prochaines étapes

1. **Valider le cahier des charges** : choisir le scénario (A, B ou C), les options, compléter les champs de la page de garde, signer.
2. **Fournir les contenus réels** : identité, projets, visuels, CV, liens.
3. **Renseigner la configuration** : domaine, identifiants SMTP, `.deploy-config.json`.
4. **Mettre en ligne** en suivant `docs/CHECKLIST-MISE-EN-LIGNE.md`.
5. **Mesurer** : soumettre le sitemap, installer la mesure d'audience, suivre les indicateurs du § 13.2 du cahier des charges.

---

*Référence projet : CDC-PORTFOLIO-2025-01 — version 1.0*
