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
| `generate-cv`   | Generates CV in PDF and DOCX formats from YAML data                     |
| `generate-og`   | Generates Open Graph social preview images for all blog posts           |
| `generate-webp` | Builds site and copies generated WebP images to source for git tracking |

### CV Generation

The CV uses a unified YAML-based system. All CV content is maintained in YAML files, which serve as the single source of truth for:

- The HTML CV page (`/cv/`)
- PDF exports (via LaTeX)
- DOCX exports

**Source files:**

- `_data/cv_data.yml` - Full CV content
- `_data/cv_data_concise.yml` - Condensed version for targeted applications

**Generate all formats:**

```bash
npm run generate-cv
```

**Individual scripts** (for granular control):

| Script                    | Description                              |
| ------------------------- | ---------------------------------------- |
| `npm run generate-cv`     | Full pipeline: LaTeX + PDF + DOCX        |
| `npm run generate-cv:latex` | Generate full LaTeX files only         |
| `npm run generate-cv:latex-concise` | Generate concise LaTeX files only |
| `npm run generate-cv:docx` | Generate full DOCX only                 |
| `npm run generate-cv:docx-concise` | Generate concise DOCX only       |

**Output files:**

| File                          | Description                            |
| ----------------------------- | -------------------------------------- |
| `assets/cv/cv.pdf`            | Full CV (public, no phone)             |
| `assets/cv/cv-phone.pdf`      | Full CV (private, with phone)          |
| `assets/cv/cv-concise.pdf`    | Concise CV (public, no phone)          |
| `assets/cv/cv-concise-phone.pdf` | Concise CV (private, with phone)    |
| `assets/cv/cv.docx`           | Full CV in Word format                 |
| `assets/cv/cv-phone.docx`     | Full CV in Word format (with phone)    |
| `assets/cv/cv-concise.docx`   | Concise CV in Word format              |
| `assets/cv/cv-concise-phone.docx` | Concise CV in Word format (with phone) |

**Build process:**

```
cv_data.yml → generate-cv-latex.mjs → _build/cv/*.tex → pdflatex → assets/cv/*.pdf
            → generate-cv-docx.mjs  →                              → assets/cv/*.docx
```

Intermediate LaTeX files are generated in `_build/cv/` (gitignored).

**Requirements:** `pdflatex` must be installed for PDF generation.

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
├── _build/               # Generated build artifacts (gitignored)
│   └── cv/               # Intermediate LaTeX files
├── _data/                # Structured data
│   ├── cv_data.yml       # Full CV content (source of truth)
│   ├── cv_data_concise.yml # Concise CV content
│   └── repositories.yml  # GitHub repositories config
├── _includes/            # Liquid template partials
├── _layouts/             # Page templates
├── _pages/               # Static pages (about, cv, publications, etc.)
├── _plugins/             # Custom Jekyll plugins
├── _posts/               # Blog posts (YYYY-MM-DD-title.md)
├── _sass/                # SCSS stylesheets
├── _scripts/             # Build scripts (CV generators, OG images)
├── assets/
│   ├── css/              # Compiled CSS
│   ├── cv/               # Generated CV files (PDF and DOCX)
│   ├── img/              # Images (including generated WebP)
│   ├── js/               # JavaScript files
│   └── pdf/              # Other PDFs (papers, etc.)
├── _config.yml           # Main Jekyll configuration
├── generate-cv.sh        # CV generation pipeline script
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
