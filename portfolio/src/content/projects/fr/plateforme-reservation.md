---
translationKey: booking-platform
title: 'Plateforme de réservation en ligne'
summary: "Application web permettant à des salles de sport indépendantes de gérer leurs créneaux, leurs abonnés et leurs paiements en ligne."
cover: '../../../assets/projects/booking.png'
coverAlt: 'Tableau de bord de la plateforme de réservation avec la vue hebdomadaire des créneaux'
category: 'application'
stack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'React', 'Tailwind CSS', 'Stripe', 'Docker']
year: 2024
duration: '4 mois'
role: 'Développeur full-stack — conception, développement et mise en production'
context: "Trois salles de sport indépendantes géraient leurs réservations par téléphone et sur un cahier papier. Les créneaux se chevauchaient, les annulations n’étaient pas tracées et la facturation demandait plusieurs heures par mois. La plateforme a été conçue pour remplacer intégralement ce fonctionnement, côté gérant comme côté adhérent."
objectives:
  - 'Centraliser les réservations de cours collectifs sur un seul outil accessible aux gérants et aux adhérents.'
  - 'Supprimer les doubles réservations et automatiser la gestion des listes d’attente.'
  - 'Encadrer les paiements et les abonnements avec un historique consultable.'
  - 'Fournir un tableau de bord de remplissage par créneau pour piloter l’activité.'
features:
  - 'Réservation en ligne avec capacité par cours, liste d’attente et annulation automatique des places non confirmées.'
  - 'Espace adhérent : planning personnel, historique de présence, gestion de l’abonnement.'
  - 'Espace gérant : création de créneaux récurrents, gestion des coachs, suivi du remplissage.'
  - 'Paiement en ligne par carte et prélèvement récurrent via Stripe.'
  - 'Notifications par e-mail de confirmation, de rappel et d’annulation.'
  - 'Export CSV des présences et de la facturation mensuelle.'
results:
  - 'Temps de gestion administrative réduit d’environ 6 heures à 45 minutes par mois et par salle.'
  - 'Taux de présence effective passé de 68 % à 89 % grâce aux rappels automatiques.'
  - 'Plus de 1 200 réservations traitées le premier trimestre, sans incident de double réservation.'
  - 'Outil adopté par les trois salles pilotes, puis par deux salles supplémentaires.'
demoUrl: 'https://exemple-plateforme-reservation.fr'
repoUrl: 'https://github.com/votre-compte/plateforme-reservation'
featured: true
order: 1
---

## Le besoin

Les salles concernées partageaient le même problème : un planning papier, des réservations prises par téléphone et aucune vision consolidée de l’activité. Au-delà de la perte de temps, les erreurs de réservation créaient des tensions avec les adhérents.

L’objectif n’était donc pas d’ajouter un outil à côté de l’existant, mais de **remplacer complètement le processus**, y compris la facturation.

## Architecture retenue

Le projet repose sur une API REST unique consommée par une interface web responsive :

| Couche | Choix | Raison |
|---|---|---|
| API | Node.js + Express + TypeScript | Écosystème maîtrisé, typage de bout en bout |
| Base de données | PostgreSQL | Besoin de transactions et de contraintes d’intégrité fortes |
| Front-end | React + Tailwind CSS | Composants réutilisables, itérations rapides |
| Paiement | Stripe | Abonnements récurrents et conformité PCI déléguée |
| Déploiement | Docker + CI GitHub Actions | Environnements reproductibles |

Le point critique était la **gestion de concurrence** sur les réservations : deux adhérents ne doivent jamais obtenir la même place. La solution retenue combine une contrainte d’unicité en base et une transaction avec verrouillage de ligne, ce qui rend le doublon impossible même en cas de requêtes simultanées.

## Gestion des listes d’attente

Lorsqu’un cours est complet, l’adhérent rejoint une file d’attente ordonnée. À chaque désistement, la première personne de la file est promue automatiquement et reçoit un e-mail l’invitant à confirmer dans un délai de deux heures. Passé ce délai, la place est proposée à la personne suivante : le créneau reste ainsi rempli sans intervention du gérant.

## Ce que j’en retire

Ce projet m’a confronté à des problématiques que l’on ne rencontre pas sur un site vitrine : intégrité transactionnelle, idempotence des webhooks de paiement, gestion des fuseaux horaires et des changements d’heure, ou encore conception d’interfaces pour des utilisateurs peu à l’aise avec l’informatique. Chacune de ces contraintes a directement influencé l’architecture finale.
