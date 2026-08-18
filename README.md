# Ken Ho — personal academic website

Ken Ho's academic site, built from an Astro academic theme and filled in from public sources plus `F:\Kebn_doc\resume_CV`. Edit anything; leftover template posts, papers, analytics, and the original contact form were removed.

## Run locally

Requires Node.js 22.12+.

```sh
npm install
npm run dev
```

Then open http://localhost:4321/

```sh
npm run build      # static site in dist/
npm run preview    # preview the build
```

## What to replace first

| File | What to put there |
| --- | --- |
| `public/avatar.png` | Your photo (the current file is leftover from the template) |
| `public/favicon.png` | A small square icon |
| `public/contact.png` | Optional image on the Contact page |
| `public/cv.pdf` | A **public** CV (see privacy note below) |
| `src/config.ts` | Name, quote, intro, news, education, social links, `siteUrl` |
| `src/content/research/*.mdx` | Paper pages (add a `cover` image per paper if you want cards to show a thumbnail) |
| `src/content/posts/*.mdx` | Blog / notes |
| `astro.config.mjs` | `site:` URL when you deploy |

Also set `siteUrl` in `src/config.ts` to the same public URL.

## Privacy

`public/cv.pdf` is currently a copy of `FongChiHo_FDA_ORISE_CV (2).pdf`. That file includes a **phone number** and **referee phone numbers**. Drop a redacted CV there before you host this site, or delete `public/cv.pdf` and the resume tab will be empty.

Phone numbers and referee contacts were **not** copied into `src/config.ts`.

## Content sources used

- CV / resume files in `F:\Kebn_doc\resume_CV`
- [LinkedIn](https://www.linkedin.com/in/kenhofc/)
- [Google Scholar](https://scholar.google.com/citations?user=5_kvqfAAAAAJ)
- [ORCID](https://orcid.org/0000-0002-4152-9037)
- [Scholars@Duke](https://scholars.duke.edu/person/ken.ho)
- [Duke OTC](https://otc.duke.edu/team/ken-ho/)
- [CVIT](https://cvit.duke.edu/) / [RAI Labs trainees](https://rai.labs.duke.edu/people/trainees/)
- PubMed / SPIE / *Journal of Medical Imaging* / *Medical Image Analysis* / RSNA 2025 / Duke Radiology Research Day 2026

Under-review manuscripts are listed as such so you can add DOIs later.

## Deploy

The repo includes `vercel.json`. You can also use GitHub Pages (`kenhofc.github.io`) after setting `site` / `siteUrl` and running `npm run build`.
