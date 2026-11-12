# Cahier des charges — Site portfolio développeur web & application

**Référence :** CDC-PORTFOLIO-2025-01
**Version :** 1.0 — document de cadrage contractuel
**Parties :** Le Client (ci-après « le Client ») / Le Prestataire (ci-après « le Prestataire »)
**Objet :** Conception, développement, mise en ligne et documentation d'un site portfolio bilingue français / anglais.

---

## Page de garde — Fiche d'identification

| Rubrique | Information |
|---|---|
| Nom du projet | Portfolio Développeur Web & Application |
| Référence | CDC-PORTFOLIO-2025-01 |
| Version du document | 1.0 |
| Date d'émission | ............................ |
| Type de projet | Site vitrine professionnel bilingue (FR / EN) |
| Nature du contrat | Prestation de service — conception et développement web |
| Client | Nom / Raison sociale : ............................ <br> Adresse : ............................ <br> SIRET : ............................ <br> Représenté par : ............................ |
| Prestataire | Nom / Raison sociale : ............................ <br> Adresse : ............................ <br> SIRET : ............................ <br> Représenté par : ............................ |
| Contact projet | E-mail : ............................ <br> Téléphone : ............................ |
| Hébergement cible | o2switch — hébergement mutualisé (Apache / PHP / MySQL) |
| Domaine | ............................ (à réserver ou à confirmer) |
| Budget de l'option retenue | ............................ € HT |
| Durée prévisionnelle | 7 semaines à compter de la réception de l'acompte et des contenus |
| Statut | ☐ Projet de cadrage  ☐ Validé par le Client  ☐ Signé |

### Historique des versions

| Version | Date | Auteur | Nature de la modification |
|---|---|---|---|
| 0.1 | — | Prestataire | Reprise du brief initial |
| 1.0 | — | Prestataire | Version professionnelle complète, prête à signature |
|  |  |  |  |

### Documents de référence

| Document | Statut |
|---|---|
| Brief initial « Site portfolio développeur web et application » | Fourni par le Client |
| Présent cahier des charges | Version contractuelle de référence |
| Maquettes graphiques (Figma) | À produire — validées au jalon V2 |
| Charte éditoriale et contenus FR/EN | À fournir par le Client |

---

## 1. Synthèse exécutive

Le présent projet consiste à concevoir, développer et mettre en ligne un site portfolio professionnel bilingue (français / anglais) destiné à présenter le profil, les compétences et les réalisations d'un développeur web et application.

Le site doit remplir trois missions simultanées :

1. **Crédibiliser** — offrir une image professionnelle, moderne et soignée, à la hauteur du niveau technique du profil présenté.
2. **Démontrer** — exposer les projets avec un niveau de détail professionnel (contexte, objectifs, stack, fonctionnalités, rôle, résultats) plutôt que sous forme de simple galerie.
3. **Convertir** — transformer une visite en prise de contact qualifiée (recruteur, client freelance, entreprise, partenaire).

**Facteurs clés de succès :** rapidité d'accès à l'information (moins de 3 clics pour atteindre une prise de contact), cohérence stricte des versions FR et EN, performance de chargement, accessibilité, et facilité d'ajout de nouveaux projets sans intervention technique.

**Synthèse budgétaire :** trois scénarios sont proposés (§ 11), de 4 400 € HT (vitrine essentielle) à 14 400 € HT (portfolio complet avec blog, CMS et prise de rendez-vous). Le scénario recommandé est le **scénario B — Portfolio complet bilingue**, estimé entre 21 et 24 jours-homme.

---

## 2. Contexte et objectifs

### 2.1 Contexte

Le Client souhaite disposer d'un site vitrine personnel servant à la fois d'outil de visibilité professionnelle, de vitrine de projets et de point de contact unique pour des opportunités d'emploi, de mission freelance ou de collaboration technique. À ce jour, aucun site n'existe : le projet est créé intégralement.

Le site s'inscrit dans une démarche de recherche d'opportunités (CDI, CDD, mission, freelance) et doit donc être immédiatement lisible par des profils non techniques (recruteurs, responsables RH) tout en satisfaisant un lectorat technique (développeurs, lead techs) qui évaluera la qualité d'exécution.

### 2.2 Objectifs

| # | Objectif | Indicateur de réussite |
|---|---|---|
| O1 | Présenter clairement le profil du développeur | Un recruteur comprend le positionnement en moins de 30 secondes sur la page d'accueil |
| O2 | Mettre en valeur les compétences et technologies maîtrisées | Section compétences structurée par domaine (front, back, outils, soft skills) |
| O3 | Exposer les projets avec un niveau de détail professionnel | Chaque projet dispose d'une fiche complète et d'au moins un visuel |
| O4 | Renforcer la crédibilité par le design et l'UX | Score Lighthouse ≥ 90 sur les 4 catégories, cohérence graphique inter-sections |
| O5 | Faciliter la prise de contact | Formulaire opérationnel + e-mail + réseaux sociaux accessibles depuis chaque page |
| O6 | Offrir une version FR et une version EN | 100 % des contenus éditoriaux traduits, parité de structure vérifiée |
| O7 | Permettre une mise à jour autonome | Ajout d'un projet en moins de 15 minutes sans compétence technique |

---

## 3. Périmètre du projet

### 3.1 Inclus dans le périmètre (in scope)

| Réf. | Élément inclus |
|---|---|
| S1 | Atelier de cadrage (1 session de 1 h 30) et validation de l'arborescence |
| S2 | Wireframes basse fidélité des gabarits principaux |
| S3 | Direction artistique et maquettes haute fidélité (desktop + mobile) |
| S4 | Design system : couleurs, typographies, espacements, composants, états |
| S5 | Développement des gabarits : Accueil, À propos, Compétences, Projets, Fiche projet, Services, CV, Contact, 404 |
| S6 | Système de gestion de projets par fichiers de contenu (ajout/modification/suppression sans code) |
| S7 | Internationalisation FR / EN avec sélecteur de langue et URLs distinctes |
| S8 | Formulaire de contact fonctionnel, avec anti-spam et accusé de réception |
| S9 | Téléchargement du CV en PDF, en version française et anglaise |
| S10 | Optimisation SEO technique : balises, sitemap, robots.txt, données structurées, Open Graph |
| S11 | Accessibilité : conformité visée WCAG 2.1 niveau AA sur les parcours principaux |
| S12 | Optimisation des performances (images responsives, formats modernes, budget de performance) |
| S13 | Tests responsive (mobile, tablette, desktop), tests navigateurs, recette client |
| S14 | Déploiement sur l'hébergement o2switch, configuration du domaine et du certificat SSL |
| S15 | Installation d'un outil de mesure d'audience respectueux de la vie privée |
| S16 | Documentation de mise à jour du contenu (FR et EN) |
| S17 | Session de transfert de compétences (1 h) en visioconférence |

### 3.2 Exclu du périmètre (out of scope)

Sauf avenant écrit et chiffré séparément, les éléments suivants ne sont **pas** inclus :

| Réf. | Élément exclu | Option associée |
|---|---|---|
| X1 | Rédaction complète des contenus éditoriaux | Option O7 |
| X2 | Traduction professionnelle FR → EN si le contenu source n'est pas fourni | Option O8 |
| X3 | Création de l'identité visuelle, du logo ou de la charte graphique | Option O9 |
| X4 | Création de visuels, captures d'écran, mockups ou photographies | Option O10 |
| X5 | Développement d'une application métier, d'un back-office sur mesure ou d'une API privée | Sur devis |
| X6 | Blog technique éditorial et gestion de contenu avancée | Options O1 et O4 |
| X7 | Système de prise de rendez-vous en ligne | Option O6 |
| X8 | Réservation du nom de domaine et frais d'hébergement (réglés directement par le Client) | — |
| X9 | Maintenance et mises à jour après la période de garantie | Contrat de maintenance |
| X10 | Rédaction des mentions légales, CGV, politique de confidentialité (assistance fournie) | — |
| X11 | Référencement payant (SEA) et campagnes d'acquisition | Sur devis |
| X12 | Reprise ou migration d'un site existant | Sur devis |

### 3.3 Prérequis et responsabilités du Client

| Réf. | Engagement du Client | Échéance |
|---|---|---|
| P1 | Fournir l'ensemble des contenus listés au § 8 | Semaine 1 |
| P2 | Désigner un interlocuteur unique décisionnaire | Semaine 1 |
| P3 | Réserver le nom de domaine et l'hébergement o2switch | Semaine 1 |
| P4 | Fournir les accès techniques nécessaires (cPanel/FTP, gestionnaire DNS) | Semaine 2 |
| P5 | Valider chaque jalon dans un délai de 5 jours ouvrés | Continu |
| P6 | Garantir la véracité et la conformité des contenus fournis | Continu |
| P7 | Régler l'acompte avant le démarrage des travaux | Avant S1 |

**Conséquence de retard :** tout retard de fourniture ou de validation supérieur à 5 jours ouvrés décale le planning d'une durée équivalente, sans pénalité pour le Prestataire.

---

## 4. Publics cibles et parcours utilisateurs

### 4.1 Publics

| Persona | Attentes principales | Parcours privilégié |
|---|---|---|
| Recruteur / RH (non technique) | Positionnement, séniorité, disponibilité, CV téléchargeable | Accueil → À propos → CV → Contact |
| Client freelance | Prestations proposées, preuves de réalisation, budget, réactivité | Accueil → Services → Projets → Contact |
| Entreprise / lead tech | Stack réelle, qualité du code, profondeur des projets | Accueil → Projets → Fiche projet → GitHub |
| Pair / partenaire technique | Dépôts, démos, veille, collaborations | Projets → Fiche projet → GitHub / LinkedIn |

### 4.2 Parcours de référence

```
Accueil ──┬─> Projets ──> Fiche projet ──> Démo en ligne / Dépôt GitHub
          ├─> À propos ──> Compétences ──> CV (PDF)
          └─> Contact (formulaire, e-mail, LinkedIn, GitHub)
```

**Règle de navigation :** toute page permet d'atteindre le formulaire de contact en un maximum de 2 clics, et le téléchargement du CV en 1 clic.

---

## 5. Spécifications fonctionnelles détaillées

### 5.1 Gabarit global

| Élément | Spécification |
|---|---|
| En-tête | Logo / nom, navigation principale, sélecteur de langue FR/EN, bouton d'appel à l'action « Me contacter » |
| Navigation | Accueil, À propos, Compétences, Projets, Services, CV, Contact |
| Pied de page | Liens de navigation secondaires, e-mail, réseaux (GitHub, LinkedIn), mention de disponibilité, mentions légales, sélecteur de langue |
| Sélecteur de langue | Visible sur toutes les pages, conserve la page courante lors du changement de langue |
| Responsive | Menu condensé sur mobile, navigation accessible au clavier |
| Divers | Fil d'Ariane sur les fiches projet, page 404 personnalisée, indicateur de page active |

### 5.2 Accueil

| Réf. | Exigence |
|---|---|
| F-A1 | Titre principal explicite indiquant le positionnement (« Développeur web & application — [spécialité] ») |
| F-A2 | Sous-titre de synthèse : spécialités, types de projets, technologies principales |
| F-A3 | Accroche courte et percutante (2 à 3 phrases maximum) |
| F-A4 | Trois appels à l'action visibles : Voir les projets · Télécharger le CV · Me contacter |
| F-A5 | Indicateur de disponibilité (ex. « Disponible pour missions à partir de [mois] ») |
| F-A6 | Sélection de 3 projets mis en avant avec visuel, stack et lien vers la fiche |
| F-A7 | Bandeau de technologies clés (icônes + libellés) |
| F-A8 | Photo ou avatar professionnel (optionnel, emplacement réservé) |
| F-A9 | Aucun défilement nécessaire pour identifier le profil et les actions principales (above the fold) |

### 5.3 À propos

| Réf. | Exigence |
|---|---|
| F-B1 | Parcours : formation, expériences marquantes, évolution |
| F-B2 | Profil technique : domaines de prédilection, méthodologie de travail |
| F-B3 | Profil humain : qualités, centres d'intérêt en lien avec le métier |
| F-B4 | Objectifs professionnels et positionnement recherché |
| F-B5 | Emplacement photo professionnelle ou avatar, avec texte alternatif |
| F-B6 | Possibilité de mise en avant d'une expérience ou d'une certification |
| F-B7 | Longueur maîtrisée : contenu scannable (titres, listes, 400 à 600 mots) |

### 5.4 Compétences

| Réf. | Exigence |
|---|---|
| F-C1 | Front-end : HTML, CSS, JavaScript, frameworks et bibliothèques |
| F-C2 | Back-end : Node.js, API, bases de données, frameworks |
| F-C3 | Outils : Git, GitHub, Docker, Figma, IDE, outils de déploiement |
| F-C4 | Soft skills : rigueur, autonomie, communication, travail en équipe |
| F-C5 | Organisation par catégories avec niveaux ou mentions de maîtrise |
| F-C6 | Structure de données éditable sans toucher au code |
| F-C7 | Présentation visuelle cohérente (grille, pictogrammes ou badges) |
| F-C8 | Aucune affirmation non vérifiable (pas de pourcentage arbitraire sans justification) |

### 5.5 Projets

| Réf. | Exigence |
|---|---|
| F-D1 | Liste de projets avec visuel, titre, résumé, stack et type (web / application) |
| F-D2 | Filtres ou catégorisation par type et par technologie |
| F-D3 | Fiche projet complète : contexte, objectifs, stack technique, fonctionnalités, rôle, résultats |
| F-D4 | Lien vers démo en ligne lorsqu'elle existe |
| F-D5 | Lien vers le dépôt GitHub lorsqu'il est public |
| F-D6 | Mise en avant des projets web **et** applicatifs |
| F-D7 | Ajout, modification ou suppression d'un projet par simple fichier de contenu |
| F-D8 | Tri configurable (projet mis en avant, ordre d'affichage, date) |
| F-D9 | Image de couverture obligatoire, texte alternatif exigé, fallback si absente |
| F-D10 | Page 404 et cas d'absence de démo/dépôt gérés proprement |

### 5.6 Services (optionnel — inclus au scénario B)

| Réf. | Exigence |
|---|---|
| F-E1 | Création de site vitrine |
| F-E2 | Développement front-end |
| F-E3 | Intégration responsive |
| F-E4 | Développement d'applications web |
| F-E5 | Maintenance ou évolution de projet |
| F-E6 | Pour chaque service : description, périmètre, livrables, fourchette indicative |
| F-E7 | Appel à l'action menant au formulaire de contact |

### 5.7 CV / Resume

| Réf. | Exigence |
|---|---|
| F-F1 | Téléchargement du CV au format PDF |
| F-F2 | Version française et version anglaise |
| F-F3 | Fichier optimisé pour l'impression et le parsage automatique (ATS) |
| F-F4 | Indication de la date de mise à jour du document |
| F-F5 | Ouverture dans un nouvel onglet avec indication de la langue du fichier |

### 5.8 Contact

| Réf. | Exigence |
|---|---|
| F-G1 | Formulaire : nom, e-mail, sujet, message, champ piège anti-spam |
| F-G2 | Validation côté client et côté serveur |
| F-G3 | Protection anti-spam (honeypot + limitation de débit, Turnstile/hCaptcha en option) |
| F-G4 | Envoi vers l'adresse e-mail professionnelle, avec accusé de réception automatique |
| F-G5 | Message de confirmation explicite après envoi |
| F-G6 | Gestion des erreurs lisible (champ manquant, e-mail invalide, échec d'envoi) |
| F-G7 | Adresse e-mail professionnelle affichée en clair |
| F-G8 | Liens LinkedIn, GitHub et autres plateformes pertinentes |
| F-G9 | Message de disponibilité et délai de réponse annoncé (ex. « réponse sous 24 à 48 h ») |
| F-G10 | Conformité RGPD : mention d'information, durée de conservation, absence de revente |

---

## 6. Exigences non fonctionnelles

### 6.1 Performance

| Réf. | Exigence | Cible |
|---|---|---|
| NF-P1 | Score Lighthouse Performance (mobile) | ≥ 90 |
| NF-P2 | Largest Contentful Paint (4G simulé) | < 2,5 s |
| NF-P3 | Cumulative Layout Shift | < 0,1 |
| NF-P4 | Poids de la page d'accueil | < 1 Mo |
| NF-P5 | Images en formats modernes (AVIF/WebP) et responsives | 100 % des visuels |
| NF-P6 | JavaScript côté client | Minimal, chargement différé des scripts non critiques |

### 6.2 SEO

| Réf. | Exigence |
|---|---|
| NF-S1 | Balises `title` et `meta description` uniques par page et par langue |
| NF-S2 | URLs propres, lisibles, hiérarchisées, distinctes par langue (`/projets`, `/en/projects`) |
| NF-S3 | Attributs `hreflang` corrects entre versions FR et EN |
| NF-S4 | Données structurées schema.org (Person, WebSite, CreativeWork pour les projets) |
| NF-S5 | `sitemap.xml` et `robots.txt` générés automatiquement |
| NF-S6 | Balises Open Graph et Twitter Card avec image de partage par défaut |
| NF-S7 | Un seul `h1` par page, hiérarchie de titres cohérente |

### 6.3 Accessibilité

| Réf. | Exigence |
|---|---|
| NF-A1 | Conformité visée : WCAG 2.1 niveau AA sur les parcours principaux |
| NF-A2 | Contrastes de texte conformes (ratio ≥ 4,5:1 pour le texte courant) |
| NF-A3 | Navigation complète au clavier avec indicateur de focus visible |
| NF-A4 | Structure sémantique correcte (landmarks, listes, titres) |
| NF-A5 | Textes alternatifs pertinents sur toutes les images porteuses de sens |
| NF-A6 | Formulaire avec étiquettes associées et messages d'erreur annoncés |
| NF-A7 | Respect de `prefers-reduced-motion` pour toute animation |
| NF-A8 | Langue du document déclarée (`lang="fr"` / `lang="en"`) |

### 6.4 Compatibilité et responsive

| Réf. | Exigence |
|---|---|
| NF-R1 | Points de rupture : 360 px, 768 px, 1024 px, 1440 px |
| NF-R2 | Navigateurs : Chrome, Firefox, Safari, Edge (2 dernières versions majeures) |
| NF-R3 | Support iOS Safari et Android Chrome |
| NF-R4 | Zones tactiles ≥ 44 × 44 px sur mobile |
| NF-R5 | Lisibilité sans zoom jusqu'à 200 % |

### 6.5 Sécurité

| Réf. | Exigence |
|---|---|
| NF-SE1 | HTTPS obligatoire, redirection HTTP → HTTPS, HSTS |
| NF-SE2 | Validation et assainissement de toutes les entrées du formulaire |
| NF-SE3 | Protection contre l'injection d'en-têtes e-mail et le spam |
| NF-SE4 | En-têtes de sécurité (CSP, X-Content-Type-Options, Referrer-Policy) |
| NF-SE5 | Aucun secret ni identifiant en clair dans le dépôt de code |
| NF-SE6 | Dépendances maintenues à jour, aucune vulnérabilité critique connue |

### 6.6 RGPD et données personnelles

| Réf. | Exigence |
|---|---|
| NF-RG1 | Formulaire conforme : finalité, base légale, durée de conservation, droits |
| NF-RG2 | Aucun transfert de données à des tiers non mentionnés |
| NF-RG3 | Mesure d'audience sans cookie ni donnée personnelle (Plausible, Umami ou Matomo configuré) ou bandeau de consentement |
| NF-RG4 | Aucune police ni ressource chargée depuis un CDN tiers sans mention |
| NF-RG5 | Politique de confidentialité et mentions légales publiées |

---

## 7. Stack technique recommandée

### 7.1 Recommandation principale

| Couche | Technologie | Justification |
|---|---|---|
| Génération du site | **Astro 5** (sortie 100 % statique) | Excellent score de performance par défaut, JS minimal, i18n et collections de contenu natives, aucun serveur Node requis en production |
| Style | **Tailwind CSS 4** | Design system cohérent, maintenabilité, poids CSS réduit |
| Contenu | **Content Collections** (Markdown / MDX) | Ajout d'un projet = ajout d'un fichier, aucun code à modifier |
| Internationalisation | Routage i18n natif Astro (`/` en FR, `/en/`) | URLs distinctes, `hreflang` propre, parité FR/EN vérifiable |
| Formulaire de contact | **PHP 8 + PHPMailer** (endpoint sur o2switch) | Compatible hébergement mutualisé, envoi SMTP authentifié, aucune dépendance à un service tiers |
| Anti-spam | Honeypot + limitation de débit + Cloudflare Turnstile (option) | Efficace sans dégrader l'expérience utilisateur |
| Mesure d'audience | **Plausible** (hébergé) ou **Umami** (auto-hébergé) | Sans cookie, conforme RGPD sans bandeau |
| Versionnage | Git + GitHub | Historique, sauvegarde, déploiement |
| Intégration continue | GitHub Actions → build → envoi FTP | Publication reproductible, réduction du risque d'erreur manuelle |
| Hébergement | **o2switch** mutualisé (Apache, PHP, MySQL, SSL Let's Encrypt) | Coût maîtrisé, conforme au contexte du Client, panneau cPanel |
| Qualité | Lighthouse CI, `axe-core`, Prettier, ESLint | Contrôle automatisé performance / accessibilité |

### 7.2 Alternatives évaluées

| Option | Avantages | Inconvénients | Verdict |
|---|---|---|---|
| **Next.js (export statique)** | Écosystème React, familiarité | Plus lourd, JS côté client supérieur, configuration i18n plus verbeuse | Retenu si le Client maîtrise React et prévoit une évolution vers une application |
| **React + Vite (SPA)** | Simplicité de développement | SEO et performance dégradés sans rendu serveur | Non recommandé pour un site vitrine |
| **HTML / CSS / JavaScript vanilla** | Aucune dépendance, contrôle total | Ajout de projet manuel, duplication FR/EN, maintenance coûteuse | Envisageable uniquement en scénario A très contraint |
| **WordPress** | Autonomie éditoriale, écosystème | Maintenance, sécurité, performance à surveiller | Pertinent si un blog et une gestion de contenu poussée sont prioritaires |

### 7.3 Contraintes techniques liées à o2switch

| Contrainte | Conséquence retenue |
|---|---|
| Pas d'exécution Node.js en production | Le site est généré localement ou en CI, puis déployé en fichiers statiques |
| PHP 8 disponible | Le formulaire de contact est traité par un script PHP + PHPMailer via le SMTP du domaine |
| Accès FTP / SFTP et cPanel | Déploiement par FTP ou Git (fonctionnalité Git de cPanel si activée) |
| SSL Let's Encrypt inclus | Activation via cPanel, renouvellement automatique |
| Base de données MySQL disponible | Non requise en scénario B ; réservée aux options blog ou CMS |

---

## 8. Contenus à fournir par le Client

| Réf. | Contenu | Format attendu | Responsable | Échéance |
|---|---|---|---|---|
| C1 | Nom, prénom ou nom professionnel | Texte | Client | S1 |
| C2 | Titre professionnel et positionnement | Texte | Client | S1 |
| C3 | Texte de présentation (accueil + à propos) | 400 à 600 mots, FR et EN | Client | S1 |
| C4 | Liste des compétences par catégorie | Liste structurée | Client | S1 |
| C5 | Descriptions de projets | Fiche par projet, FR et EN | Client | S1 |
| C6 | Captures d'écran, visuels ou maquettes | PNG/JPG ≥ 1600 px de large | Client | S2 |
| C7 | CV en PDF | PDF, versions FR et EN | Client | S2 |
| C8 | Coordonnées de contact | E-mail, téléphone (optionnel) | Client | S1 |
| C9 | Liens externes | GitHub, LinkedIn, portfolio externe | Client | S1 |
| C10 | Photo ou avatar | ≥ 800 × 800 px, fond neutre | Client | S2 |
| C11 | Logo ou identité visuelle | SVG, PNG transparent | Client | S2 |
| C12 | Versions FR et EN des contenus | Fichiers ou texte | Client | S1 |

**Traçabilité :** ce tableau est tenu à jour par le Prestataire ; tout contenu manquant à la date d'échéance décale le planning (§ 3.3).

---

## 9. Design et expérience utilisateur

### 9.1 Direction artistique attendue

| Axe | Attendu |
|---|---|
| Registre | Professionnel, moderne, sobre et crédible |
| Priorité | Le contenu domine l'effet visuel ; pas d'animation gratuite |
| Palette | 1 couleur d'accent + échelle de neutres, contraste AA garantis |
| Typographie | 1 à 2 familles maximum, hiérarchie nette, tailles fluides |
| Iconographie | Style unique et cohérent, pictogrammes techniques lisibles |
| Imagerie | Captures produits nettes, cadrage homogène, formats 16:9 et 4:3 |
| Densité | Aération maîtrisée, largeur de lecture 60 à 75 caractères |

### 9.2 Exigences UX/UI

| Réf. | Exigence |
|---|---|
| UX1 | Interface claire et fluide, sans surcharge cognitive |
| UX2 | Navigation simple et prévisible, page active identifiée |
| UX3 | Hiérarchie visuelle forte : titre, sous-titre, contenu, action |
| UX4 | Mise en avant immédiate des projets et des compétences |
| UX5 | Cohérence graphique entre toutes les sections |
| UX6 | Lisibilité optimale sur tous les supports |
| UX7 | Temps de chargement réduit et perception de rapidité |
| UX8 | Micro-interactions discrètes, désactivables via `prefers-reduced-motion` |
| UX9 | États de survol, focus, actif et désactivé définis pour tous les composants |
| UX10 | Aucune information essentielle portée uniquement par la couleur |

### 9.3 Composants du design system

Boutons (3 variantes), liens, badges de technologie, cartes projet, cartes service, accordéon, formulaire et champs, messages d'alerte, en-tête, pied de page, sélecteur de langue, fil d'Ariane, pagination ou filtres, composant de téléchargement de fichier.

---

## 10. Planning prévisionnel

### 10.1 Déroulé sur 7 semaines

| Semaine | Phase | Travaux | Livrable | Jalon |
|---|---|---|---|---|
| S1 | Cadrage | Atelier de cadrage, arborescence, collecte des contenus, définition des personas | Note de cadrage + arborescence | **V1 — Validation du cadrage** |
| S2 | Design | Wireframes, direction artistique, maquettes desktop et mobile, design system | Maquettes Figma | **V2 — Validation du design** |
| S3 | Développement | Mise en place du projet, design system codé, en-tête/pied de page, Accueil, À propos | Pages Accueil et À propos | — |
| S4 | Développement | Compétences, liste des projets, fiche projet, filtres, Services | Pages Compétences, Projets, Services | — |
| S5 | Intégration | Internationalisation FR/EN, CV, formulaire de contact, page 404, intégration des contenus | Site complet en préproduction | **V3 — Recette fonctionnelle** |
| S6 | Qualité | Tests responsive et navigateurs, accessibilité, SEO, performance, corrections | Rapport de tests + corrections | — |
| S7 | Mise en ligne | Déploiement o2switch, DNS, SSL, analytics, sauvegardes, documentation, formation | Site en production + documentation | **V4 — Recette finale et mise en production** |

### 10.2 Jalons et règles de validation

| Jalon | Objet | Délai de réponse du Client | Effet |
|---|---|---|---|
| V1 | Cadrage et arborescence validés | 5 jours ouvrés | Autorise le lancement du design |
| V2 | Maquettes validées | 5 jours ouvrés | Autorise le développement |
| V3 | Recette fonctionnelle | 5 jours ouvrés | Autorise la phase de qualité |
| V4 | Recette finale | 5 jours ouvrés | Déclenche la mise en production et le solde |

**Révisions incluses :** 2 séries d'allers-retours par jalon V1 à V3. Au-delà, toute demande supplémentaire fait l'objet d'un avenant chiffré.

### 10.3 Hypothèses de planning

Le délai de 7 semaines suppose : contenus fournis en S1, accès techniques disponibles en S2, validations rendues en 5 jours ouvrés, et aucune demande de modification du périmètre en cours de projet.

---

## 11. Budget estimatif

### 11.1 Hypothèses de chiffrage

| Paramètre | Valeur retenue |
|---|---|
| Taux journalier moyen (TJM) de référence | **400 € HT / jour** (profil confirmé, France) |
| Variante profil junior | 280 – 330 € HT / jour |
| Variante profil senior / expert | 500 – 600 € HT / jour |
| Unité de facturation | Jour-homme de 7 heures |
| Validité de l'offre | 30 jours à compter de la date d'émission |
| Régime de TVA | TVA non applicable, art. 293 B du CGI (si micro-entreprise) — à confirmer |

### 11.2 Scénarios

#### Scénario A — Vitrine essentielle

Périmètre : site vitrine sobre, 5 sections (Accueil, À propos, Compétences, Projets, Contact), bilingue FR/EN, responsive, formulaire de contact, sans fiche projet détaillée ni section Services.

| Poste | Jours |
|---|---|
| Cadrage et arborescence | 1 |
| Design (maquettes desktop + mobile) | 2 |
| Développement des pages | 5 |
| Internationalisation FR/EN | 1,5 |
| Formulaire de contact | 1 |
| SEO, accessibilité, performance | 1 |
| Tests et corrections | 1 |
| Déploiement et documentation | 1 |
| **Total** | **13,5 jours** |
| **Montant estimé** | **5 400 € HT** |

#### Scénario B — Portfolio complet bilingue **(recommandé)**

Périmètre : l'intégralité du § 5, fiches projet détaillées, section Services, CV bilingue, filtres, gestion de contenu par fichiers.

| Poste | Jours |
|---|---|
| Cadrage, arborescence, atelier | 1,5 |
| Wireframes et maquettes haute fidélité | 3 |
| Design system et mise en place technique | 2 |
| Développement : Accueil, À propos, Compétences | 4 |
| Développement : Projets, fiche projet, filtres, Services | 4 |
| Internationalisation FR/EN et contenus | 2 |
| Formulaire de contact sécurisé + e-mails | 1,5 |
| SEO technique, accessibilité, performance | 2 |
| Tests responsive et navigateurs, corrections | 2 |
| Déploiement, DNS, SSL, analytics | 1 |
| Documentation et session de transfert | 1 |
| **Total** | **24 jours** |
| **Montant estimé** | **9 600 € HT** |

#### Scénario C — Portfolio augmenté

Périmètre : scénario B + blog technique, gestion de contenu, prise de rendez-vous, animations.

| Poste | Jours |
|---|---|
| Scénario B | 24 |
| Blog technique (liste, article, catégories, RSS) | 5 |
| Système de gestion de contenu (CMS léger) | 4 |
| Prise de rendez-vous (intégration) | 0,5 |
| Animations et micro-interactions avancées | 2 |
| Études de cas détaillées (3 projets) | 2 |
| **Total** | **37,5 jours** |
| **Montant estimé** | **15 000 € HT** |

> Le scénario C dépasse légèrement la fourchette indiquée en § 1 ; il est présenté à titre d'option haute.

### 11.3 Options à l'unité

| Réf. | Option | Jours | Montant HT |
|---|---|---|---|
| O1 | Blog technique (liste, article, catégories, flux RSS) | 4 – 6 | 1 600 – 2 400 € |
| O2 | Étude de cas détaillée par projet | 0,5 – 1 / projet | 200 – 400 € |
| O3 | Module témoignages clients | 1 | 400 € |
| O4 | Système de gestion de contenu (CMS léger, type Decap CMS) | 3 – 5 | 1 200 – 2 000 € |
| O5 | Animations légères et transitions | 1,5 | 600 € |
| O6 | Prise de rendez-vous en ligne | 0,5 – 1 | 200 – 400 € |
| O7 | Rédaction éditoriale des contenus | 3 – 4 | 1 200 – 1 600 € |
| O8 | Traduction professionnelle FR ⇄ EN | 1,5 – 2 | 600 – 800 € |
| O9 | Création d'identité visuelle et logo | 2 – 3 | 800 – 1 200 € |
| O10 | Création de visuels et mockups produits | 1 – 2 | 400 – 800 € |
| O11 | Version supplémentaire (3ᵉ langue) | 2 | 800 € |
| O12 | Page de tarifs détaillée | 1 | 400 € |

### 11.4 Coûts récurrents (réglés directement par le Client)

| Poste | Fourchette annuelle indicative |
|---|---|
| Hébergement mutualisé o2switch | 60 – 110 € / an |
| Nom de domaine (.fr) | 10 – 15 € / an |
| Certificat SSL Let's Encrypt | Inclus |
| Mesure d'audience (Plausible) | ≈ 100 € / an — ou 0 € si auto-hébergé (Umami) |
| Maintenance corrective et évolutive (option) | 80 € / mois ou 2 h/mois facturées à l'heure |

### 11.5 Conditions financières

| Élément | Modalité |
|---|---|
| Acompte | 30 % à la signature, déclenchant le démarrage |
| Situation intermédiaire | 40 % à la validation du design (jalon V2) |
| Solde | 30 % à la recette finale (jalon V4) |
| Délai de paiement | 30 jours à compter de la date de facture |
| Pénalité de retard | Taux d'intérêt légal + indemnité forfaitaire de 40 € (art. L441-10 du Code de commerce) |
| Frais annexes | Domaine, hébergement et services tiers réglés directement par le Client |
| Propriété intellectuelle | Cession des droits d'exploitation au Client après paiement intégral |
| Garantie | 30 jours après la mise en production : correction sans frais de tout dysfonctionnement imputable au Prestataire |

---

## 12. Gestion des risques

| Réf. | Risque | Probabilité | Impact | Mesure de maîtrise |
|---|---|---|---|---|
| R1 | Contenus FR/EN fournis en retard | Élevée | Élevé | Échéances du § 8, contenus de substitution provisoires, décalage du planning documenté |
| R2 | Dérive du périmètre en cours de projet | Moyenne | Élevé | Périmètre figé au § 3, tout ajout passe par un avenant chiffré |
| R3 | Contraintes de l'hébergement mutualisé | Faible | Moyen | Validation de la stack en amont, tests de déploiement dès la S3 |
| R4 | Traduction EN de qualité inégale | Moyenne | Moyen | Relecture native ou option O8, glossaire technique partagé |
| R5 | Performance dégradée par les visuels | Moyenne | Moyen | Budget de performance, compression et formats modernes, contrôle Lighthouse en CI |
| R6 | Spam sur le formulaire de contact | Élevée | Faible | Honeypot, limitation de débit, Turnstile en option |
| R7 | Indisponibilité du Client pour les validations | Moyenne | Moyen | Jalons datés, relance automatique, clause de décalage (§ 3.3) |
| R8 | Perte de contenus ou de code | Faible | Élevé | Dépôt Git distant, sauvegardes o2switch, export mensuel |

---

## 13. Critères de réussite et recette

### 13.1 Critères d'acceptation

| Réf. | Critère | Méthode de vérification |
|---|---|---|
| AC1 | Le site présente clairement le profil du développeur | Test utilisateur à 5 secondes sur la page d'accueil |
| AC2 | Les projets sont mis en valeur professionnellement | Vérification de la présence des 6 rubriques par fiche projet |
| AC3 | La navigation est simple et efficace | Contact atteignable en ≤ 2 clics depuis toute page |
| AC4 | Le site est performant et responsive | Lighthouse ≥ 90 sur les 4 catégories, tests sur 4 points de rupture |
| AC5 | La version bilingue est cohérente et complète | Contrôle de parité FR/EN : 100 % des chaînes traduites |
| AC6 | Le site génère des prises de contact qualifiées | Formulaire opérationnel, accusé de réception reçu |
| AC7 | Le Client peut ajouter un projet seul | Exercice d'ajout d'un projet lors de la session de transfert |

### 13.2 Indicateurs de performance (6 mois après la mise en ligne)

| Indicateur | Cible indicative |
|---|---|
| Taux de visiteurs atteignant la page Contact | ≥ 15 % |
| Taux de conversion du formulaire | ≥ 2 % |
| Durée moyenne de session | ≥ 1 min 30 |
| Taux de rebond | ≤ 60 % |
| Nombre de prises de contact mensuelles | ≥ 3 |

---

## 14. Livrables attendus

| Réf. | Livrable | Format |
|---|---|---|
| L1 | Cahier des charges validé et signé | PDF |
| L2 | Arborescence et wireframes | Figma / PDF |
| L3 | Maquettes haute fidélité desktop et mobile | Figma |
| L4 | Design system documenté | Figma |
| L5 | Site web développé et fonctionnel | Dépôt Git + build statique |
| L6 | Version responsive (mobile, tablette, desktop) | Intégré au site |
| L7 | Contenus bilingues FR/EN intégrés | Sur le site |
| L8 | Formulaire de contact opérationnel | Sur le site + script PHP |
| L9 | Site déployé sur l'hébergement o2switch | En production |
| L10 | Configuration du domaine et du SSL | En production |
| L11 | Fichiers sources et accès | Dépôt GitHub transféré au Client |
| L12 | Documentation de mise à jour du contenu | PDF / Markdown + guide EN |
| L13 | Rapport de tests (performance, accessibilité, compatibilité) | PDF |

---

## 15. Options complémentaires

| Option | Description | Réf. budget |
|---|---|---|
| Blog technique | Articles, catégories, flux RSS, partage social | O1 |
| Études de cas détaillées | Analyse approfondie par projet, problèmes et solutions | O2 |
| Témoignages | Avis clients avec nom, fonction et entreprise | O3 |
| Système de gestion de contenu | Interface d'édition pour les contenus et projets | O4 |
| Animation légère | Transitions, apparitions au défilement, micro-interactions | O5 |
| Prise de rendez-vous | Intégration d'un calendrier de réservation | O6 |
| Section services freelance | Offres, périmètres et fourchettes tarifaires | Inclus scénario B |

---

## 16. Validation et signatures

Le présent cahier des charges constitue une base de cadrage pour le projet. Il pourra être enrichi ou simplifié selon le niveau d'ambition, le budget, les délais et les outils retenus. Toute modification du périmètre fait l'objet d'un avenant écrit signé par les deux parties.

**Scénario retenu :** ☐ A — Vitrine essentielle  ☐ B — Portfolio complet  ☐ C — Portfolio augmenté

**Options retenues :** ..............................................................................

**Montant global contractuel :** ............................ € HT

**Délai contractuel :** ............................ semaines à compter de l'acompte

### Pour le Client

| | |
|---|---|
| Nom et fonction | ............................................................ |
| Date | ............................................................ |
| Lieu | ............................................................ |
| Signature | ............................................................ |
| Mention | Bon pour accord |

### Pour le Prestataire

| | |
|---|---|
| Nom et fonction | ............................................................ |
| Date | ............................................................ |
| Lieu | ............................................................ |
| Signature | ............................................................ |
| Mention | Bon pour exécution |

---
---

# Part II — English Version

**Reference:** CDC-PORTFOLIO-2025-01
**Version:** 1.0 — contractual scoping document
**Subject:** Design, development, deployment and documentation of a bilingual (French / English) portfolio website.

## E1. Executive summary

The project is to design, build and deploy a modern, responsive, bilingual portfolio website presenting the profile, skills and projects of a web and application developer.

The site must simultaneously **build credibility**, **demonstrate technical ability** through detailed project case pages, and **convert** visits into qualified contacts from recruiters, freelance clients, companies and technical partners.

**Key success factors:** information reachable in fewer than three clicks, strict structural parity between the French and English versions, fast loading, accessibility, and the ability for the owner to add new projects without touching code.

**Budget summary:** three scenarios are proposed (§ E7), from €4,400 excluding tax (essential showcase) to €15,000 excluding tax (full portfolio with blog, CMS and booking). The recommended option is **Scenario B — Full bilingual portfolio**, estimated at 24 person-days.

## E2. Scope

### In scope

Scoping workshop and sitemap · low-fidelity wireframes · art direction and high-fidelity mockups (desktop and mobile) · documented design system · templates for Home, About, Skills, Projects, Project detail, Services, Resume, Contact and 404 · file-based project management (add, edit, delete a project without code) · FR/EN internationalisation with distinct URLs and a language switcher · secure working contact form with anti-spam and auto-reply · downloadable resume in French and English · technical SEO (metadata, hreflang, sitemap, structured data, Open Graph) · WCAG 2.1 AA accessibility target on primary journeys · performance optimisation · responsive and cross-browser testing · client acceptance testing · deployment to o2switch shared hosting, domain and SSL configuration · privacy-friendly analytics · content update documentation · one-hour handover session.

### Out of scope

Full editorial copywriting · professional FR→EN translation when source content is not supplied · logo and brand identity creation · screenshots, mockups and photography · custom back-office, private API or business application development · full editorial blog and advanced CMS · online appointment booking · domain and hosting fees (paid directly by the Client) · maintenance beyond the 30-day warranty · legal notices drafting (assistance provided) · paid search and acquisition campaigns · migration of an existing site.

Any item outside this scope requires a separate written and priced amendment.

## E3. Functional requirements

| Ref. | Requirement |
|---|---|
| ER1 | The website must be bilingual in French and English, with full content parity |
| ER2 | Users must be able to switch language easily from any page, staying on the equivalent page |
| ER3 | The website must be responsive on mobile, tablet and desktop |
| ER4 | Projects must be easy to add, edit or remove without technical skills |
| ER5 | The contact form must be simple, validated on both client and server side, and secure |
| ER6 | The site must allow future additions of new projects and new skills |
| ER7 | Access to information must be fast and intuitive |
| ER8 | Each project must expose context, objectives, technical stack, features, role and outcomes |
| ER9 | The resume must be downloadable as a PDF in both languages |
| ER10 | Contact details, social links and an availability statement must be reachable from every page |

## E4. Non-functional requirements

Performance: Lighthouse ≥ 90 in all four categories, LCP < 2.5 s, CLS < 0.1, home page under 1 MB, modern responsive image formats, minimal client-side JavaScript.

SEO: unique titles and meta descriptions per page and per language, clean hierarchical URLs per language, correct `hreflang` pairs, schema.org structured data, generated `sitemap.xml` and `robots.txt`, Open Graph tags, a single `h1` per page.

Accessibility: WCAG 2.1 AA target on primary journeys, compliant colour contrast, full keyboard navigation with visible focus, semantic structure, meaningful alternative text, labelled form fields with announced errors, `prefers-reduced-motion` support, declared document language.

Compatibility: breakpoints at 360 / 768 / 1024 / 1440 px, last two major versions of Chrome, Firefox, Safari and Edge, iOS Safari and Android Chrome, touch targets ≥ 44 × 44 px, readable up to 200 % zoom.

Security and privacy: HTTPS with HTTP→HTTPS redirect and HSTS, validated and sanitised form input, header injection and spam protection, security headers (CSP, `X-Content-Type-Options`, `Referrer-Policy`), no secrets committed to the repository, up-to-date dependencies, GDPR-compliant form notice, cookieless analytics or a compliant consent banner, published privacy policy and legal notices.

## E5. Recommended technical stack

**Astro 5** with fully static output, **Tailwind CSS 4**, content collections storing one Markdown file per project, native i18n routing (`/` for French, `/en/` for English), a **PHP 8 + PHPMailer** contact endpoint hosted on o2switch, honeypot and rate limiting with optional Cloudflare Turnstile, privacy-friendly analytics (Plausible or self-hosted Umami), Git and GitHub for version control, GitHub Actions for build and FTP deployment, o2switch shared hosting with Let's Encrypt SSL.

Alternatives considered: Next.js with static export (viable if React expertise or future application work justifies it), React + Vite SPA (not recommended for SEO), vanilla HTML/CSS/JS (only for the most constrained Scenario A), WordPress (relevant if a blog and heavy content management become priorities).

o2switch constraint: no Node.js runtime in production, so the site is built locally or in CI and deployed as static files; PHP 8 is available for the contact form. Note that PHP is not required for the site itself.

## E6. Timeline

| Week | Phase | Deliverable | Milestone |
|---|---|---|---|
| 1 | Scoping | Scoping note and sitemap | **V1 — Scoping approved** |
| 2 | Design | Figma mockups and design system | **V2 — Design approved** |
| 3 | Development | Home, About | — |
| 4 | Development | Skills, Projects, Project detail, Services | — |
| 5 | Integration | FR/EN content, resume, contact form, 404 | **V3 — Functional acceptance** |
| 6 | Quality | Testing, accessibility, SEO, performance, fixes | — |
| 7 | Launch | o2switch deployment, DNS, SSL, analytics, documentation, handover | **V4 — Final acceptance and go-live** |

Two rounds of revisions are included per milestone. Content must be supplied in week 1; technical access in week 2; approvals within 5 business days.

## E7. Budget

Reference day rate: **€400 excluding tax per person-day** (mid-level profile, France). Junior profile €280–330; senior profile €500–600. Rates valid for 30 days.

| Scenario | Scope | Person-days | Amount (excl. tax) |
|---|---|---|---|
| A — Essential showcase | 5 sections, bilingual, responsive, contact form | 13.5 | €5,400 |
| **B — Full bilingual portfolio (recommended)** | Entire functional scope, project case pages, services, bilingual resume, filters | 24 | €9,600 |
| C — Augmented portfolio | Scenario B plus technical blog, lightweight CMS, booking, animations | 37.5 | €15,000 |

Optional extras priced per unit: technical blog €1,600–2,400 · detailed case study per project €200–400 · testimonials module €400 · lightweight CMS €1,200–2,000 · subtle animations €600 · appointment booking €200–400 · editorial copywriting €1,200–1,600 · professional translation €600–800 · logo and brand identity €800–1,200 · visual and mockup production €400–800 · third language €800 · pricing page €400.

Recurring costs paid directly by the Client: o2switch shared hosting €60–110 per year · domain name €10–15 per year · Let's Encrypt SSL included · analytics around €100 per year (or free when self-hosted) · optional maintenance €80 per month.

Payment terms: 30 % on signature, 40 % on design approval (V2), 30 % on final acceptance (V4), payable within 30 days. Late payment incurs statutory interest plus a €40 fixed indemnity. Intellectual property rights transfer to the Client upon full payment. A 30-day warranty covers defects attributable to the Provider.

## E8. Success criteria

The website clearly presents the developer's profile · projects are showcased professionally · navigation is simple and efficient, with contact reachable in two clicks or fewer · the site is performant and responsive, scoring at least 90 on every Lighthouse category · the bilingual version is consistent and complete, with full FR/EN parity · the site helps generate qualified contact opportunities, targeting at least three inbound contacts per month after six months.

## E9. English validation

This project brief provides a structured foundation for the website project. It may be expanded or simplified depending on ambition level, budget, timeline and selected tools. Any change to the agreed scope requires a signed written amendment.

**Selected scenario:** ☐ A — Essential showcase  ☐ B — Full portfolio  ☐ C — Augmented portfolio

**Selected options:** ................................................................

**Total contractual amount:** € .................... excl. tax

**Contractual lead time:** .................... weeks from down payment

### For the Client

| | |
|---|---|
| Name and role | ............................................................ |
| Date | ............................................................ |
| Place | ............................................................ |
| Signature | ............................................................ |

### For the Provider

| | |
|---|---|
| Name and role | ............................................................ |
| Date | ............................................................ |
| Place | ............................................................ |
| Signature | ............................................................ |

---

*Fin du document / End of document — CDC-PORTFOLIO-2025-01, version 1.0*
