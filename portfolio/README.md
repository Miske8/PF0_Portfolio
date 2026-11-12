# Portfolio développeur — site bilingue FR / EN

Site vitrine professionnel généré statiquement avec **Astro 5**, stylé avec
**Tailwind CSS 4**, hébergé sur un hébergement mutualisé **o2switch**.

- Contenu bilingue français / anglais avec URLs distinctes
- Projets gérés par fichiers Markdown (aucun code à modifier)
- Formulaire de contact PHP avec SMTP authentifié et protections anti-spam
- Optimisé pour le référencement, l'accessibilité (WCAG 2.1 AA) et la performance
- Aucun serveur Node.js requis en production : le site est livré en fichiers statiques

---

## Démarrage rapide

```bash
npm install          # installe les dépendances
npm run dev          # serveur de développement → http://localhost:4321
npm run build        # génère le site dans dist/
npm run preview      # prévisualise le build de production
npm run check:content # vérifie la parité FR/EN et les visuels manquants
npm run deploy       # envoie dist/ vers o2switch (voir « Déploiement »)
```

**Prérequis :** Node.js 20 ou supérieur.

> Astro collecte des statistiques d'usage anonymes par défaut. Elles sont
> désactivées dans tous les scripts npm du projet.

---

## Structure du projet

```
portfolio/
├── astro.config.mjs         Configuration Astro (domaine, i18n, sitemap)
├── public/                  Fichiers copiés tels quels dans le build
│   ├── .htaccess            HTTPS, en-têtes de sécurité, cache, 404
│   ├── robots.txt           Directives d'indexation
│   ├── favicon.svg          Icône du site
│   ├── apple-touch-icon.png Icône iOS
│   ├── images/og-default.png Image de partage social (1200 × 630)
│   ├── cv/                  CV PDF (FR et EN)
│   └── api/                 Endpoint PHP du formulaire de contact
│       ├── contact.php      Point d'entrée
│       ├── config.example.php  Modèle de configuration à copier en config.php
│       └── lib/SmtpMailer.php  Client SMTP sans dépendance
├── scripts/
│   ├── check-content.mjs    Contrôle qualité du contenu
│   └── deploy.mjs           Déploiement rsync ou FTP
├── docs/                    Guides de mise à jour (FR et EN)
└── src/
    ├── assets/projects/     Visuels des projets (optimisés automatiquement)
    ├── components/          Composants réutilisables
    ├── content/
    │   ├── projects/fr|en/  Un fichier Markdown par projet et par langue
    │   └── pages/fr|en/     Contenus longs (page À propos)
    ├── data/                Données structurées : identité, compétences, services
    ├── i18n/                Chaînes d'interface et utilitaires de langue
    ├── layouts/             Gabarit HTML principal
    ├── lib/                 Helpers de la collection « projects »
    ├── pages/               Routes FR (racine) et EN (/en/)
    ├── styles/global.css    Design system (couleurs, typographie, utilitaires)
    └── views/               Gabarits de page partagés entre les deux langues
```

### Pourquoi des « views » en plus des « pages » ?

Chaque page existe en deux exemplaires (`src/pages/index.astro` et
`src/pages/en/index.astro`) mais les deux rendent le **même** composant de
`src/views/` avec une langue différente. La version française et la version
anglaise ne peuvent donc pas diverger structurellement : c'est la garantie de
parité exigée par le cahier des charges.

---

## Internationalisation

| Langue | Préfixe d'URL | Exemple |
|---|---|---|
| Français (par défaut) | aucun | `/projets/` |
| Anglais | `/en/` | `/en/projects/` |

- Les URL sont traduites (`/a-propos/` ↔ `/en/about/`), ce qui sert le référencement.
- Les balises `hreflang` et `x-default` sont générées sur chaque page.
- Le sélecteur de langue conserve la page courante ; sur les fiches projet, il
  s'appuie sur le champ `translationKey`.
- Toutes les chaînes d'interface vivent dans `src/i18n/ui.ts`. Une clé absente
  en anglais retombe automatiquement sur la valeur française.

---

## Formulaire de contact

`public/api/contact.php` traite les envois et applique quatre protections :

1. **Champ piège** (honeypot) invisible pour les visiteurs.
2. **Délai minimal de remplissage** — un robot soumet en moins de trois secondes.
3. **Limitation de débit** par adresse IP (5 envois par heure par défaut).
4. **Contrôle de l'origine** — le script refuse les appels venant d'un autre domaine.

Les données sont nettoyées (balises retirées, caractères de contrôle supprimés,
longueurs bornées) et les en-têtes d'e-mail ne peuvent pas être forgés.

L'envoi passe par le **SMTP authentifié** du domaine si `config.php` est présent,
sinon par la fonction `mail()`. Le premier mode est fortement recommandé pour la
délivrabilité.

### Installation sur le serveur

```bash
cp public/api/config.example.php  →  public_html/api/config.php
```

Puis renseignez : adresse de réception, adresse d'expédition, hôte SMTP,
identifiants. Les informations SMTP se trouvent dans cPanel → Comptes de
messagerie → Configurer le client de messagerie.

Test manuel de l'endpoint :

```bash
curl -X POST https://votre-domaine.fr/api/contact.php \
  -F "name=Test" -F "email=test@exemple.fr" \
  -F "message=Message de test depuis le terminal" \
  -F "startedAt=$(($(date +%s%N)/1000000 - 5000))"
```

---

## Déploiement sur o2switch

Créez `.deploy-config.json` à la racine du projet (fichier ignoré par Git) :

```json
{
  "method": "rsync",
  "host": "votreserveur.o2switch.net",
  "user": "votrecompte",
  "port": 22,
  "remotePath": "~/public_html/",
  "sshKey": "~/.ssh/id_ed25519"
}
```

Puis :

```bash
npm run build && npm run deploy
```

Le script `rsync` utilise `--delete` : les fichiers présents sur le serveur mais
absents du build sont supprimés. Vérifiez que `remotePath` pointe bien vers le
dossier du site avant la première exécution.

Si l'accès SSH n'est pas activé, utilisez `"method": "ftp"` avec un champ
`password` et installez `basic-ftp` (`npm install --save-dev basic-ftp`).

### Après la première mise en ligne

1. Activer le SSL Let's Encrypt (cPanel → SSL/TLS Status).
2. Créer `api/config.php` avec les identifiants SMTP.
3. Vérifier les permissions : dossiers `755`, fichiers `644`.
4. Tester le formulaire depuis le site en production.
5. Soumettre le sitemap à Google Search Console.

---

## Contrôle qualité

| Vérification | Commande |
|---|---|
| Parité FR/EN et visuels manquants | `npm run check:content` |
| Types et erreurs de template | `npm run check` |
| Formatage du code | `npm run format` |
| Build de production | `npm run build` |

Cibles de performance visées (Lighthouse mobile) : **≥ 90** sur les quatre
catégories, LCP < 2,5 s, CLS < 0,1, page d'accueil < 1 Mo.

---

## Personnalisation du design

Le design system est défini dans `src/styles/global.css` :

- `--color-brand-*` : échelle de la couleur d'accent.
- `--color-ink-*` : échelle des neutres.
- `--surface`, `--text-primary`, `--border-subtle` : jetons sémantiques qui
  s'inversent automatiquement en mode sombre.

Changer `--color-brand-500` et `--color-brand-600` suffit à modifier l'identité
visuelle de tout le site.

---

## Documentation

- `docs/GUIDE-MISE-A-JOUR-CONTENU.md` — guide utilisateur en français
- `docs/CONTENT-UPDATE-GUIDE-EN.md` — guide utilisateur en anglais

---

## Stack et versions

| Composant | Version |
|---|---|
| Astro | 5.x |
| Tailwind CSS | 4.x |
| TypeScript | fourni par Astro |
| Node.js requis | ≥ 20 |
| PHP (formulaire uniquement) | 8.x |
