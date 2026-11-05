---
translationKey: booking-platform
title: 'Online booking platform'
summary: 'Web application letting independent gyms manage their class schedules, members and online payments.'
cover: '../../../assets/projects/booking.png'
coverAlt: 'Booking platform dashboard showing the weekly schedule view'
category: 'application'
stack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'React', 'Tailwind CSS', 'Stripe', 'Docker']
year: 2024
duration: '4 months'
role: 'Full-stack developer — design, development and production deployment'
context: 'Three independent gyms were handling bookings by phone and in a paper diary. Slots overlapped, cancellations were not tracked and monthly invoicing took several hours. The platform was designed to replace that process entirely, for both managers and members.'
objectives:
  - 'Centralise group class bookings in a single tool accessible to managers and members.'
  - 'Eliminate double bookings and automate waiting list management.'
  - 'Secure payments and subscriptions with a searchable history.'
  - 'Provide a per-slot occupancy dashboard to steer the business.'
features:
  - 'Online booking with per-class capacity, waiting list and automatic release of unconfirmed places.'
  - 'Member area: personal schedule, attendance history, subscription management.'
  - 'Manager area: recurring slot creation, coach management, occupancy tracking.'
  - 'Online card payment and recurring direct debit through Stripe.'
  - 'Email notifications for confirmation, reminders and cancellations.'
  - 'CSV export of attendance and monthly invoicing.'
results:
  - 'Administrative time reduced from roughly 6 hours to 45 minutes per month per gym.'
  - 'Actual attendance rate rose from 68% to 89% thanks to automatic reminders.'
  - 'Over 1,200 bookings processed in the first quarter with no double-booking incident.'
  - 'Adopted by the three pilot gyms, then by two additional sites.'
demoUrl: 'https://exemple-plateforme-reservation.fr'
repoUrl: 'https://github.com/votre-compte/booking-platform'
featured: true
order: 1
---

## The need

The gyms shared the same problem: a paper schedule, bookings taken over the phone and no consolidated view of the business. Beyond the wasted time, booking mistakes created friction with members.

The goal was therefore not to add a tool alongside the existing process, but to **replace it entirely**, invoicing included.

## Chosen architecture

The project is built on a single REST API consumed by a responsive web interface:

| Layer | Choice | Reason |
|---|---|---|
| API | Node.js + Express + TypeScript | Familiar ecosystem, end-to-end typing |
| Database | PostgreSQL | Need for transactions and strong integrity constraints |
| Front-end | React + Tailwind CSS | Reusable components, fast iterations |
| Payments | Stripe | Recurring subscriptions with delegated PCI compliance |
| Deployment | Docker + GitHub Actions CI | Reproducible environments |

The critical point was **concurrency handling** on bookings: two members must never get the same place. The chosen solution combines a database uniqueness constraint with a row-locking transaction, making duplicates impossible even under simultaneous requests.

## Waiting list handling

When a class is full, the member joins an ordered queue. On every cancellation, the first person in the queue is promoted automatically and receives an email inviting them to confirm within two hours. After that delay, the place is offered to the next person: the slot stays full without any action from the manager.

## What I took away

This project confronted me with problems you never meet on a showcase website: transactional integrity, payment webhook idempotency, time zone and daylight saving handling, and designing interfaces for users who are not comfortable with computers. Each of those constraints directly shaped the final architecture.
