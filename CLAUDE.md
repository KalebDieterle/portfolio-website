# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no tests in this project.

## Tech Stack

- **Next.js 16** with App Router (`"use client"` directive used on the home page)
- **React 19** + **TypeScript**
- **Tailwind CSS 4** + **DaisyUI 5** — DaisyUI's `dark` theme is set via `data-theme="dark"` on `<html>` in [app/layout.tsx](app/layout.tsx)
- **Geist** fonts (Sans + Mono) loaded via `next/font/google`

## Architecture

This is a single-page portfolio with a scroll-based layout. All visible content lives in [app/page.tsx](app/page.tsx), which contains the Hero and About sections inline and lazy-loads the remaining sections via `next/dynamic`.

### Data flow

All portfolio content (projects, skills, education, nav links, contact info, stats) is centralized in [app/data/portfolio-data.ts](app/data/portfolio-data.ts). To add or update content (new project, skill, education entry), edit only this file.

### Section structure

- Hero + About: inlined in `page.tsx` — includes typewriter animation and animated counters
- `ProjectsSection`, `SkillsSection`, `EducationSection`, `Footer`: lazy-loaded via `next/dynamic` from [app/components/sections/](app/components/sections/)

### Components

- Sections in [app/components/sections/](app/components/sections/) consume data from `portfolio-data.ts` and compose the reusable cards
- Card/tag primitives: `ProjectCard`, `SkillCard`, `SkillCategory`, `EducationCard`, `StatCard`, `TechTag`, `ProjectPlaceholder`
- SVG icons are co-located in [app/components/icons/index.tsx](app/components/icons/index.tsx)
- [app/hooks/useTypewriter.ts](app/hooks/useTypewriter.ts) — character-by-character typewriter effect hook

### Styling conventions

- Dark-only design; no light mode
- Tailwind utility classes only — no CSS modules or separate stylesheets beyond [app/globals.css](app/globals.css)
- Color palette centers on `slate-900/950` backgrounds with `cyan`, `purple`, and `pink` accents
