# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server at http://localhost:4321 (hot reload)
npm run build     # Build to dist/
npm run preview   # Preview production build locally
npm run check     # TypeScript/Astro type checking
```

## Architecture

**Stack:** Astro 4 + Tailwind CSS, deployed to GitHub Pages. No JavaScript ships to the browser by default.

**Content** lives in `src/content/` as Markdown files with YAML frontmatter, validated by Zod schemas defined in `src/content/config.ts`. Four collections: `publications`, `talks`, `teaching`, `packages`.

**Pages** in `src/pages/` map 1:1 to URL routes. Each collection has a list page (e.g. `publications.astro`) and a dynamic detail page (`publications/[slug].astro`) that renders the Markdown body.

**Site-wide config** (author name, bio, social links) lives in `src/utils/siteConfig.ts` — this is the single source of truth for personal info shown in `AuthorProfile.astro` and the `<head>`.

## Adding Content

All content additions are Markdown files dropped into the relevant `src/content/` subdirectory. The schema for each collection is in `src/content/config.ts` — match the required/optional fields exactly or `astro check` will fail.

- **Publications**: `title`, `date`, `venue` required; `paperurl`, `citation`, `excerpt` optional
- **Talks**: `title`, `date`, `venue` required; `type` (`conference`|`seminar`|`invited talk`), `location` optional
- **Teaching**: `title`, `date`, `venue` required; `type` (`seminar`|`lecture`|`ta`|`graduate`|`undergraduate`), `location` optional
- **Packages**: `title`, `description`, `date`, `languages` (array) required; `repository`, `documentation`, `status` (`draft`|`active`|`maintained`|`archived`), `featured` (boolean) optional

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push to `master`. The workflow runs `npm ci && npm run build` and uploads `dist/` as the Pages artifact.