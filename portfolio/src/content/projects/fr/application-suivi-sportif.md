---
translationKey: workout-tracker
title: 'Application de suivi d’entraînement'
summary: 'Application web progressive permettant de suivre ses séances de musculation, visualiser sa progression et partager ses programmes.'
cover: '../../../assets/projects/workout.png'
coverAlt: 'Écran de suivi de séance affichant les séries, les charges et un graphique de progression'
category: 'application'
stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Service Worker', 'Chart.js']
year: 2023
duration: '3 mois'
role: 'Développeur full-stack — projet personnel, de la conception à la publication'
context: "Les applications de suivi sportif existantes étaient soit trop complexes, soit enfermées dans un écosystème payant. L’objectif était de concevoir un outil simple, rapide à utiliser pendant une séance, capable de fonctionner hors connexion dans une salle sans réseau et de rester utilisable sur un simple navigateur mobile."
objectives:
  - 'Enregistrer une séance en moins de 10 secondes par exercice, sans quitter l’écran.'
  - 'Fonctionner hors connexion et synchroniser les données au retour du réseau.'
  - 'Visualiser la progression par exercice, par volume et par fréquence.'
  - 'Permettre le partage d’un programme via un lien, sans création de compte.'
features:
  - 'Enregistrement rapide des séries avec poids, répétitions et temps de repos.'
  - 'Mode hors connexion complet grâce à un service worker et à une file de synchronisation.'
  - 'Graphiques de progression par exercice, volume hebdomadaire et records personnels.'
  - 'Bibliothèque de plus de 150 exercices avec groupes musculaires et matériel nécessaire.'
  - 'Partage de programme par lien public, sans inscription pour le destinataire.'
  - 'Installation sur l’écran d’accueil en tant qu’application (PWA).'
results:
  - 'Temps de saisie moyen d’une série ramené à moins de 6 secondes en conditions réelles.'
  - 'Application pleinement fonctionnelle hors connexion, y compris pour créer une séance complète.'
  - 'Plus de 400 utilisateurs réguliers et 30 000 séries enregistrées la première année.'
  - 'Temps de chargement initial inférieur à 1,5 seconde sur un mobile d’entrée de gamme.'
demoUrl: 'https://exemple-suivi-entrainement.fr'
repoUrl: 'https://github.com/votre-compte/workout-tracker'
featured: true
order: 3
---

## Le besoin

Pendant une séance, chaque seconde passée sur le téléphone est une seconde volée à l’entraînement. Les applications existantes demandaient trop de saisies, ou exigeaient une connexion réseau alors que beaucoup de salles de sport ont une couverture médiocre.

Trois contraintes ont structuré tout le projet : **la rapidité de saisie**, **le fonctionnement hors connexion** et **la simplicité**.

## Conception de l’interface

L’écran de séance a été repensé plusieurs fois à partir d’un principe simple : une seule main, une seule main libre, un téléphone posé ou tenu entre deux séries. Les décisions qui en découlent :

- Les champs poids et répétitions reprennent les valeurs de la semaine précédente par défaut : la plupart des séries ne demandent aucune modification.
- Les cibles tactiles mesurent au minimum 44 pixels et les commandes principales sont placées dans le tiers inférieur de l’écran.
- Aucune fenêtre modale : la saisie se fait en ligne, sans changement de contexte.
- Le temps de repos se lance automatiquement à la validation d’une série.

## Fonctionnement hors connexion

L’application est une **Progressive Web App**. Le service worker met en cache l’interface et les données de référence ; les séances enregistrées hors ligne sont stockées localement puis synchronisées au retour du réseau.

La difficulté principale a été la résolution des conflits : une séance peut être modifiée sur deux appareils. La stratégie retenue compare les horodatages de modification par série et fusionne les enregistrements plutôt que d’écraser la version la plus ancienne, ce qui évite toute perte de données.

## Résultat

L’application est utilisée quotidiennement par plusieurs centaines de sportifs. Elle a surtout validé une conviction : la performance perçue par l’utilisateur vient moins des fonctionnalités que de la suppression des frictions. Chaque saisie évitée est un progrès.

## Ce que je ferais différemment

Le modèle de données initial ne prévoyait pas le partage de programmes entre utilisateurs. Cette fonctionnalité a demandé une migration et une refonte partielle du schéma. Concevoir dès le départ un modèle de permissions, même pour un projet personnel, fait gagner beaucoup de temps par la suite.
