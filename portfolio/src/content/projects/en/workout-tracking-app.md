---
translationKey: workout-tracker
title: 'Workout tracking application'
summary: 'Progressive web application to log strength training sessions, visualise progress and share programmes.'
cover: '../../../assets/projects/workout.png'
coverAlt: 'Workout logging screen showing sets, weights and a progress chart'
category: 'application'
stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Service Worker', 'Chart.js']
year: 2023
duration: '3 months'
role: 'Full-stack developer — personal project, from design to release'
context: 'Existing fitness tracking apps were either too complex or locked into a paid ecosystem. The goal was to build a simple tool, fast to use during a session, able to work offline in a gym with no signal, and usable from a plain mobile browser.'
objectives:
  - 'Log a session in under 10 seconds per exercise without leaving the screen.'
  - 'Work offline and sync data once the network is back.'
  - 'Visualise progress per exercise, by volume and by frequency.'
  - 'Allow sharing a programme through a link, with no account required.'
features:
  - 'Fast set logging with weight, reps and rest time.'
  - 'Full offline mode through a service worker and a sync queue.'
  - 'Progress charts per exercise, weekly volume and personal records.'
  - 'Library of over 150 exercises with muscle groups and required equipment.'
  - 'Programme sharing via a public link, with no sign-up for the recipient.'
  - 'Installable on the home screen as an application (PWA).'
results:
  - 'Average set entry time reduced to under 6 seconds in real conditions.'
  - 'Fully functional offline, including creating a complete session.'
  - 'Over 400 regular users and 30,000 sets logged in the first year.'
  - 'Initial load time under 1.5 seconds on a low-end mobile device.'
demoUrl: 'https://exemple-suivi-entrainement.fr'
repoUrl: 'https://github.com/votre-compte/workout-tracker'
featured: true
order: 3
---

## The need

During a session, every second spent on the phone is a second taken away from training. Existing apps required too much input, or demanded a network connection when many gyms have poor coverage.

Three constraints shaped the whole project: **input speed**, **offline operation** and **simplicity**.

## Interface design

The session screen was redesigned several times from a simple principle: one hand, one free hand, a phone set down or held between sets. The resulting decisions:

- Weight and reps fields default to the previous week's values, so most sets need no change at all.
- Touch targets are at least 44 pixels and the main controls sit in the lower third of the screen.
- No modals: logging happens inline, with no context switch.
- The rest timer starts automatically when a set is validated.

## Offline operation

The app is a **Progressive Web App**. The service worker caches the interface and reference data; sessions recorded offline are stored locally and then synchronised once the network returns.

The main difficulty was conflict resolution: a session can be edited on two devices. The chosen strategy compares per-set modification timestamps and merges records rather than overwriting the older version, which prevents any data loss.

## Outcome

The app is used daily by several hundred athletes. Above all it confirmed a belief: perceived performance comes less from features than from removing friction. Every avoided input is progress.

## What I would do differently

The initial data model did not anticipate programme sharing between users. That feature required a migration and a partial schema redesign. Designing a permission model from the start, even for a personal project, saves a great deal of time later.
