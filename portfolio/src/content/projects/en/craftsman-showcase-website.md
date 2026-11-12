---
translationKey: workshop-website
title: 'Showcase website — Atelier Bois & Co'
summary: 'Bilingual showcase website for a handcrafted joinery workshop, with a project gallery and online quote requests.'
cover: '../../../assets/projects/workshop.png'
coverAlt: 'Workshop home page with a gallery of wooden projects'
category: 'web'
stack: ['Astro', 'Tailwind CSS', 'JavaScript', 'PHP', 'SEO', 'Figma']
year: 2024
duration: '6 weeks'
role: 'Front-end developer and integrator — design produced together with the client'
context: 'The workshop had a social media page and strong word of mouth, but no website able to present its craft or receive structured quote requests. As part of the client base was foreign, an English version was essential.'
objectives:
  - 'Present the workshop, its skills and a selection of completed projects.'
  - 'Receive qualified quote requests including project description and indicative budget.'
  - 'Rank for local searches for custom joinery work.'
  - 'Let the owner update projects without any technical skill.'
features:
  - 'Project gallery filterable by type (kitchen, staircase, furniture, fit-out).'
  - 'Quote request form with project type, dimensions, budget and photo upload.'
  - 'French and English versions with a language switcher.'
  - 'Detailed project pages with materials, dimensions and techniques used.'
  - 'Local SEO optimisation and structured data for search engines.'
  - 'Lightweight admin interface to publish a new project.'
results:
  - 'Lighthouse score of 100 for performance, accessibility, best practices and SEO on mobile.'
  - '12 to 18 qualified quote requests per month, up from 4.'
  - 'First position on several local custom joinery searches after three months.'
  - 'Projects updated independently by the owner, with no technical support.'
demoUrl: 'https://exemple-atelier-bois.fr'
featured: true
order: 2
---

## The need

The workshop lived on recognised craft and effective word of mouth, but had no online presence matching the quality of its work. Requests arrived by phone, often incomplete, which stretched every quotation.

Two concerns shaped the design: **showing the quality of the work** and **qualifying requests** upstream.

## Technical choices

The site is fully static, generated with **Astro**. The reasoning is simple: a showcase website does not need client-side JavaScript to work. The result is pages that render instantly, excellent SEO and shared hosting that is more than enough.

| Need | Chosen solution |
|---|---|
| Content that is easy to evolve | Projects stored as Markdown files |
| FR/EN bilingual | Native i18n routing with distinct URLs and `hreflang` tags |
| Form with photos | PHP endpoint + PHPMailer, sent over authenticated SMTP |
| Local SEO | `LocalBusiness` structured data and pages per project type |

## The form as a qualification tool

The quote request form was designed as a filter, not just an inbox. The requester specifies the project type, approximate dimensions, planned budget and desired date, and can attach up to five photos.

That information lets the owner reply with a credible range from the very first exchange, which considerably reduced back-and-forth.

## Accessibility and performance

Every image is served as WebP with a set of sizes adapted to the screen, lazily loaded. Navigation is fully possible with a keyboard, contrast meets AA level and the heading structure is consistent across all pages. The site scores 100 in all four Lighthouse categories on mobile.

## Outcome

The website turned a business that relied on word of mouth into a regular acquisition channel. Request volume tripled, with noticeably better quality from the first contact.
