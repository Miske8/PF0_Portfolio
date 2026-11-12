# PF0_Portfolio — Portfolio web de Marie Dupont

Portfolio personnel one-page réalisé en **HTML / CSS / JavaScript purs** (aucun framework),
conforme au cahier des charges du projet PF0.

## 🚀 Lancement

Aucune installation nécessaire : ouvrez simplement `index.html` dans un navigateur,
ou lancez un serveur local :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## 📁 Structure

```
PF0_Portfolio/
├── index.html        # Page unique du portfolio
├── css/
│   └── style.css     # Styles (variables CSS, thème clair/sombre, BEM, responsive)
├── js/
│   └── main.js       # Interactions (navigation, thème, filtres, slider, formulaire…)
├── img/              # Illustrations SVG légères (avatar, projets, carte…)
└── README.md
```

## ✨ Fonctionnalités (cahier des charges)

| Exigence | Implémentation |
|---|---|
| Sections complètes | Accueil (hero), À propos (bio + timeline formation/expériences), Services, Compétences, Projets, Témoignages, Contact, Footer |
| Responsive design | Mobile-first, menu burger plein écran, grilles fluides (`auto-fit`/`minmax`), breakpoints 768 / 900 / 560 px |
| Thème clair / sombre | Bouton toggle dans la navbar, mémorisation via `localStorage`, respect de `prefers-color-scheme` |
| Animations au scroll | `IntersectionObserver` + classes `.reveal` / `.in-view`, barres de compétences animées, compteurs animés |
| Effet machine à écrire | Sous-titre du hero (`js/main.js`, section 4) |
| Filtre des projets | Boutons Tous / Web / Applications / Design (`data-category`) |
| Slider témoignages | Défilement automatique (6 s) + navigation par points |
| Formulaire de contact | Validation côté client (nom, email regex, message ≥ 10 car.) avec messages d'erreur et feedback |
| SEO / Accessibilité | Balises méta, `lang="fr"`, HTML sémantique, attributs ARIA, focus visibles, `prefers-reduced-motion` |
| Performance | Aucune dépendance JS externe, images SVG vectorielles, `loading="lazy"` |

## 🎨 Charte graphique

- Polices : **Poppins** (titres) & **Inter** (texte) via Google Fonts
- Palette pilotée par variables CSS (`--hue: 230`) — changez la teinte en 1 ligne
- Dégradé signature bleu → rose utilisé pour boutons, blobs, soulignés

## 📝 Personnalisation rapide

1. **Identité** : remplacez « Marie Dupont » et les coordonnées dans `index.html`.
2. **Couleurs** : modifiez `--hue`, `--secondary` en haut de `css/style.css`.
3. **Projets** : dupliquez un bloc `.project-card` et ajustez `data-category`.
4. **CV** : déposez votre fichier sous `cv-marie-dupont.pdf` à la racine.

---
© 2026 — Projet PF0, réalisé sans framework ni build.
