# Content update guide

This guide explains how to change the website **without any prior technical
knowledge**. Every change is made inside the `portfolio/` folder. After each
change, run the publishing commands (see § 8).

---

## 1. The five files that matter

| What you want to change | File to open |
|---|---|
| Name, job title, email, social links, availability, resume | `src/data/site.ts` |
| Projects (add, edit, remove) | `src/content/projects/fr/` and `src/content/projects/en/` |
| The “About” page | `src/content/pages/fr/about.md` and `src/content/pages/en/about.md` |
| Skills | `src/data/skills.ts` |
| Services and indicative pricing | `src/data/services.ts` |
| Interface wording (buttons, labels, messages) | `src/i18n/ui.ts` |

---

## 2. Changing your personal details

Open `src/data/site.ts` and replace the values inside the quotes.

```ts
export const site = {
  author: 'Firstname Lastname',
  initials: 'FL',                    // two letters shown in the logo
  jobTitle: {
    fr: 'Développeur web & application',
    en: 'Web & application developer',
  },
  email: 'contact@firstname-lastname.com',
  // ...
};
```

**Important rules**

- Never remove the quotes or the commas: they delimit the text.
- If your text contains an apostrophe (`'`), use double quotes instead:
  `en: "Let's build something durable"`.
- Always fill in **both** languages (`fr` and `en`).

---

## 3. Adding a project

A project is **two files**: one in French, one in English.

### Step 1 — Create the French file

Copy an existing file from `src/content/projects/fr/`, rename it
(e.g. `mon-nouveau-projet.md`) and edit its content.

> The **file name** becomes the page address:
> `mon-nouveau-projet.md` → `https://your-domain.com/projets/mon-nouveau-projet/`

### Step 2 — Create the English file

Do the same in `src/content/projects/en/`, using a file name suited to English
(e.g. `my-new-project.md`).

> The `translationKey` field must be **identical in both files**. It links the
> French and English versions and powers the language switcher.

### Available fields

| Field | Required | Description |
|---|---|---|
| `translationKey` | Yes | Shared FR/EN identifier — identical in both files |
| `title` | Yes | Displayed title |
| `summary` | Yes | One or two sentences shown on the card |
| `cover` | No | Visual, stored in `src/assets/projects/` |
| `coverAlt` | Yes if `cover` | Description of the visual for screen readers |
| `category` | Yes | `web`, `application` or `mobile` |
| `stack` | Yes | List of technologies |
| `year` | Yes | Four-digit year |
| `duration` | No | Free text, e.g. `'3 months'` |
| `role` | Yes | Your role on the project |
| `context` | Yes | Two to four sentences of context |
| `objectives` | Yes | List of objectives |
| `features` | Yes | List of delivered features |
| `results` | Yes | List of outcomes |
| `demoUrl` | No | Live demo link |
| `repoUrl` | No | GitHub repository link |
| `featured` | No | `true` to feature it on the home page |
| `order` | No | Display order (1 = first) |
| `draft` | No | `true` to hide it without deleting it |

### Adding the visual

1. Put the image in `src/assets/projects/` (PNG or JPG, **at least 1600 px wide**).
2. In the Markdown file, reference it relatively:
   `cover: '../../../assets/projects/your-image.png'`
3. Describe the image in `coverAlt`.

The site automatically converts images to WebP and generates the sizes each
screen needs: you do not have to resize anything yourself.

### Removing a project

Delete **both** files (FR and EN). To hide a project temporarily instead, add
`draft: true` to both files.

---

## 4. Editing the “About” page

Files: `src/content/pages/fr/about.md` and `src/content/pages/en/about.md`.

- The block between the `---` lines at the top is the header (title, intro, goals).
- Below it, the text is written in **Markdown**:
  - `## Heading` for a subheading
  - `**bold**` for bold
  - `- text` for a bullet
  - Leave a **blank line** between paragraphs.

---

## 5. Editing skills

File: `src/data/skills.ts`.

```ts
{ label: { fr: 'Vue.js', en: 'Vue.js' }, level: 'intermediate' },
```

Available levels: `'advanced'`, `'intermediate'`, `'learning'`. The level is
optional: leave the `level` line out to show the skill without a level.

---

## 6. Editing services and pricing

File: `src/data/services.ts`. Each service holds a title, description, scope,
deliverables and an indicative range, to be filled in for both languages.

---

## 7. Replacing the resume

Drop your two PDF files into `public/cv/`, keeping **exactly** these names:

- `cv-fr.pdf` — French version
- `resume-en.pdf` — English version

Then update the date in `src/data/site.ts`:

```ts
resumeUpdated: '2025-03',
```

---

## 8. Publishing changes

Open a terminal in the `portfolio/` folder and run:

```bash
npm run check:content   # checks that FR and EN are complete
npm run build           # builds the site
npm run deploy          # uploads the site
```

To preview before publishing:

```bash
npm run dev             # http://localhost:4321
```

---

## 9. Common errors

| Message | Cause | Fix |
|---|---|---|
| Missing `translationKey` | Field absent from one file | Add it to both files |
| Missing English version | Project created in one folder only | Create the file in `en/` |
| Visual not found | Misspelled path | Check the file name in `src/assets/projects/` |
| Project not showing | `draft: true` or a high `order` | Check those fields |
| Odd text on the page | Unclosed quote or apostrophe | Check how the text is wrapped |

When in doubt, run `npm run check:content`: it tells you exactly what to fix.

---

## 10. One-off tasks before going live

1. Replace `Prénom Nom`, the email address, GitHub and LinkedIn in `src/data/site.ts`.
2. Replace the `prenom-nom.fr` domain in `astro.config.mjs` and `public/robots.txt`.
3. Replace the placeholder resumes in `public/cv/`.
4. Replace the demo projects with your real ones.
5. Create `public/api/config.php` on the server from `config.example.php` and
   fill in the o2switch SMTP credentials.
6. Remove or replace the demo visuals in `src/assets/projects/`.
