# subhadipmitra.com

Personal website and technical blog built with Jekyll, based on the [al-folio](https://github.com/alshedivat/al-folio) theme.

**Live site:** [subhadipmitra.com](https://subhadipmitra.com)

## Quick Start

### Local Development (Docker)

```bash
docker-compose up
```

Site available at `http://localhost:8080` with live reload on port `35729`.

### Local Development (Native Ruby)

```bash
bundle install
npm install
bundle exec jekyll serve --watch --port=8080 --host=0.0.0.0 --livereload
```

## Build Scripts

All build scripts are available via npm. Run with `npm run <script>`.

| Script          | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| `generate-cv`   | Compiles LaTeX CV templates to PDF (public and private versions)        |
| `generate-og`   | Generates Open Graph social preview images for all blog posts           |
| `generate-webp` | Builds site and copies generated WebP images to source for git tracking |

### CV Generation

Generates PDF CVs from LaTeX templates:

```bash
npm run generate-cv
```

**Output:**

- `assets/pdf/cv.pdf` - Public version (no phone number)
- `assets/pdf/cv-phone.pdf` - Private version (with phone number)

**Requirements:** `pdflatex` must be installed.

### OG Image Generation

Generates social preview images (1200x630) for blog posts using Satori:

```bash
npm run generate-og
```

**Output:** `assets/img/og/<post-slug>.png`

Images are generated from post front matter (title, description, date, tags).

### WebP Image Generation

Jekyll's ImageMagick plugin generates responsive WebP images during build. To persist these to source:

```bash
npm run generate-webp
```

This builds the site and copies all WebP files from `_site/assets/img/` back to `assets/img/` for git tracking.

## Deployment

### GitHub Pages (Primary)

The site deploys automatically via GitHub Actions on push to `main` branch.

**Workflow:** `.github/workflows/deploy.yml`

The deployment workflow:

1. Sets up Ruby 3.3.5, Python 3.13, Node.js 20
2. Generates OG images (`npm run generate-og`)
3. Installs ImageMagick for responsive WebP generation
4. Builds Jekyll with `JEKYLL_ENV=production`
5. Purges unused CSS with PurgeCSS
6. Deploys `_site/` to GitHub Pages

**Pre-deployment checklist:**

1. Generate CV PDFs if changed: `npm run generate-cv`
2. Commit changes and push to `main` branch
3. OG images and WebP images are generated automatically during CI build

## Project Structure

```
.
├── _bibliography/        # BibTeX publications (papers.bib)
├── _data/                # Structured data (cv.yml, repositories.yml)
├── _includes/            # Liquid template partials
├── _layouts/             # Page templates
├── _pages/               # Static pages (about, cv, publications, etc.)
├── _plugins/             # Custom Jekyll plugins
├── _posts/               # Blog posts (YYYY-MM-DD-title.md)
├── _sass/                # SCSS stylesheets
├── _scripts/             # Build scripts (OG image generator)
├── assets/
│   ├── css/              # Compiled CSS
│   ├── img/              # Images (including generated WebP)
│   ├── js/               # JavaScript files
│   └── pdf/              # Generated PDFs (CV)
├── _config.yml           # Main Jekyll configuration
├── generate-cv.sh        # CV generation script
├── generate-webp.sh      # WebP persistence script
└── package.json          # npm scripts and dependencies
```

## Configuration

Main configuration is in `_config.yml`. Key sections:

- **Site metadata:** Title, description, SEO settings
- **Jekyll Scholar:** BibTeX bibliography configuration
- **ImageMagick:** Responsive image generation (WebP, breakpoints)
- **Analytics:** Google Analytics, optional alternatives
- **Comments:** Hyvor Talk integration

## Writing Posts

Create posts in `_posts/` with the format `YYYY-MM-DD-title.md`:

```yaml
---
layout: post
title: Your Post Title
date: 2024-01-15
description: Brief description for SEO
tags: [data, ai, systems]
categories: technology
featured: true
toc:
  sidebar: left
---
Your content here...
```

After creating a post, run `npm run generate-og` to create its social preview image.

## Publications

Publications are managed via BibTeX in `_bibliography/papers.bib`. Supported custom fields:

- `pdf`, `code`, `website`, `video`, `blog` - Links
- `abstract`, `arxiv`, `doi` - Academic metadata
- `selected: true` - Feature on homepage

## Code Quality

```bash
# Format code
npx prettier --write .

# Check formatting
npx prettier --check .
```

## License

Content is copyright Subhadip Mitra. Theme based on [al-folio](https://github.com/alshedivat/al-folio) (MIT License).
