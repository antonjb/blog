# antonball.dev

Personal blog about frontend development, CSS, and web technologies.

## Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **MDX** - Markdown with JSX components
- **TypeScript** - Type-safe development

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/        # Images, logos, icons
├── components/    # Reusable Astro components
├── layouts/       # Page layouts (main, blog post)
├── pages/         # Route pages
├── posts/         # Blog posts (MD/MDX)
├── styles/        # CSS custom properties
├── talks/         # Conference talk data
└── types/         # TypeScript definitions
```

## Writing Blog Posts

Add a new `.md` or `.mdx` file to `src/posts/` with frontmatter:

```yaml
---
title: "Your Post Title"
date: 2026-01-31
description: "A brief description for previews and SEO"
heroImage: "./images/hero.jpg"  # Optional
tags: ["css", "javascript"]
---
```

MDX files can import and use components from `src/components/`.

## Adding Talks

Edit `src/talks/talks.json`:

```json
{
  "title": "Talk Title",
  "date": "2026-01-31",
  "conference": "Conference Name",
  "location": "City, Country",
  "videoUrl": "https://..."  // Optional
}
```

## Deployment

TBD
