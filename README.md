# Konstantin's Academic Website

Modern, fast, and responsive academic website built with **Astro** and **Tailwind CSS**.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev          # Start dev server at http://localhost:4321
```

### Build
```bash
npm run build        # Generate static HTML in dist/
npm run preview      # Preview production build locally
```

## 📁 Project Structure

```
src/
├── content/         # Markdown content (type-safe collections)
│   ├── publications/
│   ├── talks/
│   ├── teaching/
│   └── packages/
├── components/      # Reusable Astro components
├── layouts/         # Page templates
├── pages/           # Routes (auto-generated from file structure)
└── styles/          # Global CSS
```

## 📝 Adding Content

### Publications
Create `src/content/publications/my-paper.md`:
```markdown
---
title: "Paper Title"
date: 2024-01-15
venue: "Journal Name"
paperurl: "https://..."
citation: "Citation text here"
---

Paper abstract and content...
```

Similar structure for **talks** and **teaching**. For **packages**, add:
```markdown
---
title: "Package Name"
description: "What it does"
date: 2024-01-15
languages: ["Python", "R"]
repository: "https://github.com/..."
status: "maintained"  # draft | active | maintained | archived
featured: true        # Shows star badge
---
```

## 🌐 Hosting Options

### Option 1: **Vercel (Recommended - Free)**
Fastest and easiest deployment:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import GitHub repo `konstantingoe/konstantingoe.github.io`
3. Select `rearrange_website` branch (or `main` after merge)
4. Vercel auto-detects `vercel.json` config
5. Build Command: `npm run build`
6. Output Directory: `dist/`
7. **Deploy!** Preview builds on PRs, production on merge

**Result:** Live at https://konstantingoe.github.io (or custom domain)

### Option 2: **GitHub Pages (Free)**
Use GitHub Actions to build and deploy the site:

1. Push to `main` branch
2. Go to repo Settings → Pages
3. Under **Build and deployment**, select **GitHub Actions**
4. Add a workflow that runs `npm ci` and `npm run build`
5. Deploy the generated `dist/` output with GitHub Pages

**Result:** Live at https://konstantingoe.github.io

### Option 3: **Custom VPS (Full Control)**
- Host on AWS, Linode, DigitalOcean, etc.
- Deploy via FTP/SFTP or git hooks
- Use your own domain
- More maintenance, full control

## 🔧 Configuration

- **Site metadata:** `src/utils/siteConfig.ts`
- **Colors/Typography:** `tailwind.config.mjs`
- **Build settings:** `astro.config.mjs`
- **Vercel settings:** `vercel.json`

## 🌙 Features

✅ Dark mode (respects system settings)
✅ Responsive design (mobile, tablet, desktop)
✅ Type-safe content with Zod schemas
✅ Zero JavaScript by default (pure HTML/CSS)
✅ Fast builds (~1s)
✅ SEO-friendly
✅ Git-based deployment

## 📊 Performance

- Build time: ~1 second
- Page size: ~6KB (uncompressed HTML)
- Lighthouse: >90 across all metrics
- No JavaScript overhead

## 🛠 Development

```bash
# Dev server with hot reload
npm run dev

# Type checking
npm run check
```

## 📜 License

MIT License. See LICENSE file for details.
