# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

DevilQuant (devilquant.com) — the first quantitative finance club at ASU. This is its public website, deployed to GitHub Pages.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build (also creates `dist/404.html` and `dist/about/index.html` for SPA routing on GitHub Pages)
- `npm run lint` — ESLint
- `npm run deploy` — build + push to `gh-pages` branch (auto-runs `predeploy`)

No test framework is configured.

## Architecture

**Stack:** React 19, Vite 7, Tailwind CSS v4 (PostCSS plugin), React Router DOM v7, deployed via `gh-pages` to GitHub Pages.

**Routing:** Uses `HashRouter` (not BrowserRouter) for GitHub Pages compatibility. Routes are defined in `src/App.jsx`. Anchor hash links (`href="#..."`) inside guide content must use programmatic `scrollIntoView` instead of native hash navigation to avoid conflicts with HashRouter.

**Redirects** (Discord, LinkedIn, SunDevilCentral) are handled in two layers:
1. React components in `src/pages/redirects/` — client-side JS redirects via `useEffect`
2. Static HTML files in `public/` subdirectories — `<meta http-equiv="refresh">` fallbacks for direct navigation/crawlers

**Resources/Guides system:** The `/resources` page renders guides from `src/data/guides/`. Each guide is a JS file exporting `{ slug, title, description, sections[] }` where sections contain raw HTML in their `content` field. Guides are registered in `src/data/guides/index.js` under categorized arrays (`guideCategories`). Some guides are commented out (hidden but retained). Guide content is rendered via `dangerouslySetInnerHTML` and styled by `.guide-section-content` rules in `src/index.css`.

**Leadership data:** Driven by `src/data/leaders.json`. Headshot images go in `src/assets/Headshots/` and are loaded via `import.meta.glob`.

**Deployment notes:**
- `public/CNAME` must contain `devilquant.com` — do not remove it
- `vite.config.js` uses `base: './'` for relative asset paths (required for GitHub Pages)
- The `gh-pages` branch is auto-generated — never edit it directly

## Style

Dark theme: `gray-950` backgrounds, `gray-900` cards, white/gray text, `indigo` accents. Navbar is transparent on home (overlays hero video), dark on other pages.
