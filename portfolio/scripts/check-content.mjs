// Contrôle qualité du contenu avant mise en ligne.
// - Vérifie la parité FR / EN des projets (champ translationKey).
// - Signale les visuels de couverture manquants.
// - Rappelle les valeurs de démonstration encore présentes.
//
// Usage : npm run check:content
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = resolve(root, 'src/content/projects');

const problems = [];
const warnings = [];
const notices = [];

function readEntries(lang) {
  const dir = join(contentDir, lang);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = readFileSync(join(dir, file), 'utf8');
      const frontmatter = raw.split('---')[1] ?? '';
      const key = frontmatter.match(/translationKey:\s*['"]?([^'"\n]+)['"]?/)?.[1]?.trim();
      const title = frontmatter.match(/title:\s*['"]?([^'"\n]+)['"]?/)?.[1]?.trim();
      const cover = frontmatter.match(/cover:\s*['"]?([^'"\n]+)['"]?/)?.[1]?.trim();
      const draft = /draft:\s*true/.test(frontmatter);
      return { lang, file, key, title, cover, draft };
    });
}

const entries = [...readEntries('fr'), ...readEntries('en')];
const byKey = new Map();

for (const entry of entries) {
  if (!entry.key) {
    problems.push(`${entry.lang}/${entry.file} : champ « translationKey » manquant.`);
    continue;
  }
  if (!byKey.has(entry.key)) byKey.set(entry.key, []);
  byKey.get(entry.key).push(entry);

  if (entry.cover) {
    const coverPath = resolve(root, 'src/content/projects', entry.lang, entry.cover);
    if (!existsSync(coverPath)) {
      problems.push(`${entry.lang}/${entry.file} : visuel introuvable → ${entry.cover}`);
    }
  }
}

for (const [key, group] of byKey) {
  const langs = new Set(group.map((entry) => entry.lang));
  if (!langs.has('fr')) problems.push(`Projet « ${key} » : version française manquante.`);
  if (!langs.has('en')) problems.push(`Projet « ${key} » : version anglaise manquante.`);
}

// --- Valeurs de démonstration -------------------------------------------------
const siteTs = readFileSync(resolve(root, 'src/data/site.ts'), 'utf8');
const placeholders = [
  [/author:\s*'Prénom Nom'/, 'author (nom du développeur)'],
  [/email:\s*'contact@prenom-nom\.fr'/, 'email'],
  [/https:\/\/github\.com\/votre-compte/, 'lien GitHub'],
  [/https:\/\/www\.linkedin\.com\/in\/votre-profil/, 'lien LinkedIn'],
];

for (const [pattern, label] of placeholders) {
  if (pattern.test(siteTs)) notices.push(`${label} : valeur de démonstration encore présente dans src/data/site.ts.`);
}

const astroConfig = readFileSync(resolve(root, 'astro.config.mjs'), 'utf8');
if (astroConfig.includes('prenom-nom.fr')) {
  notices.push('Nom de domaine : valeur de démonstration dans astro.config.mjs et public/robots.txt.');
}

if (!existsSync(resolve(root, 'public/api/config.php'))) {
  notices.push('Formulaire : public/api/config.php absent — copiez config.example.php sur le serveur.');
}

// --- Rapport ------------------------------------------------------------------
const line = '─'.repeat(64);
console.log(line);
console.log(`Contrôle du contenu — ${byKey.size} projet(s) référencé(s)`);
console.log(line);

if (problems.length > 0) {
  console.log('\n✗ À corriger :');
  problems.forEach((item) => console.log(`  • ${item}`));
}

if (warnings.length > 0) {
  console.log('\n! À vérifier :');
  warnings.forEach((item) => console.log(`  • ${item}`));
}

if (notices.length > 0) {
  console.log('\nℹ Avant mise en production :');
  notices.forEach((item) => console.log(`  • ${item}`));
}

if (problems.length === 0) {
  console.log('\n✓ Parité FR/EN complète, aucun visuel manquant.');
}

process.exit(problems.length > 0 ? 1 : 0);
