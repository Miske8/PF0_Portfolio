# Checklist de mise en ligne — o2switch

Cochez chaque étape dans l'ordre. Comptez environ **2 heures** pour une première
mise en production, hors rédaction des contenus.

---

## Phase 1 — Avant le déploiement

### Contenus

- [ ] Nom, initiales et titre professionnel renseignés dans `portfolio/src/data/site.ts`
- [ ] E-mail professionnel créé et testé (réception et envoi)
- [ ] Liens GitHub et LinkedIn vérifiés (ils s'ouvrent dans un nouvel onglet)
- [ ] Message de disponibilité et délai de réponse à jour
- [ ] Photo professionnelle fournie ou initiales validées
- [ ] CV PDF déposés dans `portfolio/public/cv/` sous les noms `cv-fr.pdf` et `resume-en.pdf`
- [ ] Date `resumeUpdated` mise à jour dans `src/data/site.ts`
- [ ] Projets de démonstration remplacés par les projets réels
- [ ] Chaque projet possède sa version FR **et** sa version EN
- [ ] Visuels de projet fournis en 1600 px de large minimum, avec `coverAlt` renseigné
- [ ] Compétences et niveaux relus (aucune affirmation non vérifiable)
- [ ] Fourchettes tarifaires des services validées
- [ ] Reprise de la page « À propos » relue et corrigée

### Technique

- [ ] Domaine réservé et pointé vers o2switch
- [ ] Hébergement o2switch actif
- [ ] `site` mis à jour dans `portfolio/astro.config.mjs` avec le domaine définitif
- [ ] URL du sitemap mise à jour dans `portfolio/public/robots.txt`
- [ ] `npm run check:content` ne remonte aucune erreur
- [ ] `npm run build` se termine sans erreur
- [ ] `npm run preview` vérifié sur mobile, tablette et desktop
- [ ] Mode sombre vérifié (préférence système)
- [ ] Navigation entièrement testée au clavier (Tab, Entrée, Échap pour le menu mobile)
- [ ] Sélecteur de langue testé depuis chaque page, y compris une fiche projet
- [ ] Orthographe et grammaire relues dans les deux langues

---

## Phase 2 — Déploiement

- [ ] SSH activé dans cPanel (ou repli sur `"method": "ftp"`)
- [ ] Clé SSH ajoutée dans cPanel → Clés SSH si vous utilisez `sshKey`
- [ ] `.deploy-config.json` créé avec le bon `remotePath` (`~/public_html/`)
- [ ] Première sauvegarde du contenu existant de `public_html` effectuée
- [ ] `npm run build && npm run deploy` exécuté
- [ ] Site accessible à l'adresse du domaine
- [ ] Pages françaises accessibles : `/`, `/a-propos/`, `/competences/`, `/projets/`, `/services/`, `/cv/`, `/contact/`
- [ ] Pages anglaises accessibles : `/en/`, `/en/about/`, `/en/skills/`, `/en/projects/`, `/en/services/`, `/en/resume/`, `/en/contact/`
- [ ] Fiches projet accessibles dans les deux langues
- [ ] Page 404 personnalisée affichée sur une URL inexistante

---

## Phase 3 — Configuration serveur

- [ ] SSL Let's Encrypt activé (cPanel → SSL/TLS Status)
- [ ] Redirection HTTP → HTTPS fonctionnelle
- [ ] Certificat renouvelé automatiquement (vérifier la date d'expiration)
- [ ] Permissions vérifiées : dossiers `755`, fichiers `644`
- [ ] `public_html/api/config.php` créé depuis `config.example.php`
- [ ] Identifiants SMTP renseignés et **fichier non accessible par URL** (`/api/config.php` renvoie 403)
- [ ] Liste de diffusion ou filtre de tri configuré pour les messages du formulaire

---

## Phase 4 — Tests du formulaire

- [ ] Envoi d'un message de test depuis le site → message reçu
- [ ] Accusé de réception reçu sur l'adresse de l'expéditeur
- [ ] Répondre à la notification répond bien au visiteur (`Reply-To`)
- [ ] Validation des champs testée : nom vide, e-mail invalide, message trop court
- [ ] Message de confirmation affiché après envoi réussi
- [ ] Comportement en cas d'échec vérifié (message d'erreur explicite)
- [ ] Test anti-spam : soumission en moins de 3 secondes refusée
- [ ] Test anti-spam : 6 soumissions en une heure depuis la même IP bloquées
- [ ] Test du champ piège : soumission avec `website` rempli ignorée
- [ ] Livraison vérifiée vers Gmail, Outlook et une adresse professionnelle (pas en spam)

---

## Phase 5 — Qualité

- [ ] Lighthouse mobile exécuté sur l'accueil, les projets et le contact — **≥ 90** sur les 4 catégories
- [ ] LCP mesuré < 2,5 s sur une connexion 4G simulée
- [ ] CLS mesuré < 0,1
- [ ] Poids de la page d'accueil < 1 Mo
- [ ] Sitemap accessible : `/sitemap-index.xml`
- [ ] `robots.txt` accessible et correct
- [ ] Balises `hreflang` vérifiées sur l'accueil et une fiche projet
- [ ] Données structurées validées (test des résultats enrichis Google)
- [ ] Aperçu de partage social vérifié (LinkedIn Post Inspector, opengraph.xyz)
- [ ] `axe DevTools` ou WAVE : aucune erreur critique sur les parcours principaux

---

## Phase 6 — Référencement et mesure

- [ ] Sitemap soumis dans Google Search Console
- [ ] Propriété du domaine validée dans Search Console
- [ ] Sitemap soumis dans Bing Webmaster Tools
- [ ] Mesure d'audience installée (Plausible ou Umami)
- [ ] Vérification qu'aucun cookie n'est déposé sans consentement
- [ ] Politique de confidentialité et mentions légales publiées
- [ ] Fiche Google Business créée si activité locale

---

## Phase 7 — Sauvegardes et transfert

- [ ] Sauvegardes automatiques o2switch activées
- [ ] Dépôt Git distant créé et code poussé
- [ ] Accès au dépôt transféré au Client
- [ ] Export de sauvegarde manuel effectué après la mise en ligne
- [ ] Guides de mise à jour remis (`docs/GUIDE-MISE-A-JOUR-CONTENU.md` et version anglaise)
- [ ] Session de transfert de compétences réalisée
- [ ] Ajout d'un projet effectué en direct par le Client, à titre d'exercice

---

## Phase 8 — Après la mise en ligne

- [ ] Surveillance des erreurs 404 pendant la première semaine
- [ ] Premier relevé des statistiques à J+7
- [ ] Test du formulaire à J+30 (SMTP, spam, délivrabilité)
- [ ] Mise à jour des dépendances (`npm outdated`, `npm audit`)
- [ ] Passage en revue des indicateurs du § 13.2 du cahier des charges à 6 mois

---

## En cas de problème

| Symptôme | Piste à vérifier |
|---|---|
| Page blanche | Consulter les logs d'erreur dans cPanel → Erreurs |
| Formulaire sans réponse | `api/config.php` présent et identifiants SMTP corrects |
| Messages en spam | SPF et DKIM configurés dans cPanel → Authentification des e-mails |
| Mauvais domaine dans les liens | Champ `site` de `astro.config.mjs`, puis rebuild et redéploiement |
| CSS absent | Le déploiement a-t-il bien transféré le dossier `_astro/` ? |
| Ancienne version affichée | Vider le cache du navigateur ; le cache HTML est limité à 10 minutes |
