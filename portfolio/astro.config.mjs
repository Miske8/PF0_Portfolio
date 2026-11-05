// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ---------------------------------------------------------------------------
// Configuration du site.
// Adaptez `site` à votre nom de domaine définitif AVANT la mise en production :
// cette valeur alimente le sitemap, les URLs canoniques et les balises hreflang.
// ---------------------------------------------------------------------------
export const SITE_URL = 'https://www.prenom-nom.fr';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',

  // Bilingue français (défaut, sans préfixe) / anglais (préfixe /en/)
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US' },
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: 'auto',
  },

  // Compression HTML et déduplication des styles pour réduire le poids des pages.
  compressHTML: true,

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
