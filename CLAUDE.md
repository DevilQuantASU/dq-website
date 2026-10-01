# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Current goals, task status, and constraints live in PROMPT.md — read it before starting work:

@PROMPT.md

## What This Is

DevilQuant (devilquant.com) — the first quantitative finance club at ASU. This is its public website: a fully static React SPA deployed to GitHub Pages. There is no backend, API, or database; all content is bundled at build time from `src/data/`.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build, then `scripts/create-spa-fallbacks.mjs` writes `dist/404.html` (a redirect from plain paths to hash URLs)
- `npm run lint` — ESLint (must pass with 0 errors; CI enforces it)
- `npm run check-links` — offline internal link check (`scripts/check-links.mjs`): plain `<a href="/...">` to app routes, `?guide=` slugs that are missing/hidden, in-guide `#anchors`, `public/` redirect pages vs `src/data/links.js`, headshot filenames
- `npm run deploy` — manual fallback: build + push `dist/` to `gh-pages`

No test framework is configured. Node version: `.nvmrc` (22).

**CI/CD:** `.github/workflows/ci.yml` runs lint, check-links, and build on every PR and push to `main` (no concurrency cancelling). `.github/workflows/deploy.yml` runs after CI passes on a push to `main` and publishes `dist/` to `gh-pages` (same `gh-pages` tool); it can also be run manually. `.github/workflows/links.yml` checks external URLs weekly with lychee (not on PRs, since third-party outages shouldn't block merges). Actions are pinned to Node 24 majors (`checkout@v6`, `setup-node@v6`).

## Architecture

**Stack:** React 19, Vite 7, Tailwind CSS v4 (PostCSS plugin), React Router DOM v7. Fonts self-hosted via `@fontsource-variable/lexend` and `@fontsource/kalam` (imported in `src/main.jsx`, not from CSS). State is local `useState` only.

**Entry:** `index.html` → `src/main.jsx` → `src/App.jsx` (all routes are defined here).

**Routing:** `HashRouter` — real URLs look like `devilquant.com/#/about`.
- Internal links must use `<Link to="/path">` (renders `#/path`). Never use `<a href="/path">` for app pages; on GitHub Pages it hits `404.html`.
- `dist/404.html` rewrites any unknown plain path (`/about`, `/resources?guide=x`) to its hash URL, so old/shared links still work. If the URL already carries a `#/` route (e.g. `/resources?guide=old#/resources?guide=new`), that route wins.
- Anchor links (`href="#..."`) inside guide content are intercepted in `Resources.jsx` and use `scrollIntoView`, because native hash navigation would conflict with HashRouter.
- Do not reintroduce per-route copies of `index.html` (e.g. `dist/about/index.html`): with `base: './'` their assets resolve to `/about/assets/...` and the page renders blank.

Unknown routes render `src/pages/NotFound.jsx` (catch-all `*` route).

**External club links** (Discord invite, LinkedIn, Sun Devil Central) are defined once in `src/data/links.js`; import from there rather than hardcoding URLs. The redirect routes (`/discord`, `/linkedin`, `/sundevilcentral`) exist in two places:
1. Static HTML in `public/<name>/index.html` — what actually serves `devilquant.com/discord` in production. It can't import `links.js`, so update it by hand; `check-links` fails if it drifts.
2. React components in `src/pages/redirects/` — handle `#/discord` routes

**Resources/Guides:** `/resources?guide=<slug>` renders guides from `src/data/guides/`. Each guide exports `{ slug, title, description, sections[] }` with raw HTML in `section.content`, rendered via `dangerouslySetInnerHTML` and styled by `.guide-section-content` rules in `src/index.css`. A guide is only reachable if it is listed in `guideCategories` in `src/data/guides/index.js`. To hide a guide, comment out both its import and its list entry (keeps lint clean); any link to a hidden slug silently falls back to the first guide.

**Data files:**
- `src/data/leaders.json` / `members.json` — keyed by year; About page defaults to the current calendar year. `image` is an exact filename in `src/assets/Headshots/`, a URL, or `null` for a placeholder. Do not use LinkedIn CDN image URLs — they are signed and expire. Keep headshots ≈100 KB (JPEG, ≤640px wide). Omit a `socialLinks` key rather than linking somewhere unverified.
- The About "Founders" box is derived from `leaders.json`: anyone whose `role` contains "Founder" in any year.
- `src/data/projects.js` — shown on `/projects` when `visible: true`. Images live in `src/assets/projects/` (no hotlinking).
- Hero text and footer links are hardcoded in JSX.
- Navigate-and-scroll uses router state: `navigate('/about', { state: { scrollTo: 'contact' } })`; About scrolls to that id after render. Don't use `setTimeout`.
- Lint (react-hooks v7) forbids setState directly in effects and impure calls (`Math.random`, `Date.now`) during render. For "close on navigation" UI, store the key/slug it was opened for instead of resetting in an effect (see `Navbar.jsx`, `Resources.jsx`).

**Deployment notes:**
- `public/CNAME` must contain `devilquant.com` — do not remove it
- `vite.config.js` uses `base: './'` for relative asset paths
- The `gh-pages` branch is auto-generated — never edit it directly
- Follow CONTRIBUTING.md for branch names (`fix/...`, `feature/...`) and commit prefixes (`fix:`, `feat:`)

## Style

"The Working Notebook": a dark graph-paper pad (see PRODUCT.md for product truth, DESIGN.md for the full system, and `.impeccable/surfaces/` for the homepage direction contract).
- Tokens live in `@theme` in `src/index.css` and are used as Tailwind classes: `pad`, `pad-deep`, `rule`, `rule-major`, `chalk` (ink), `pencil` (secondary text), `highlighter` (the only action fill), `redpen` (current page, margin notes); `font-sans` = Lexend, `font-hand` = Kalam.
- The page ground is graph paper on `body`; content sits in `.sheet` (49 squares wide, centered) so its edges land on grid lines. Spacing is in whole 24px squares.
- Components: `.btn-highlight` (primary), `.btn-pen` (secondary), `.ink-link` (highlighter-swipe hover). States are ink only: hover = highlighter, current = red-pen mark. Square corners, no shadows or gradients.
- Motion: only the hero's one-time pen-draw/highlighter sequence; respect `prefers-reduced-motion`.
- Shared pieces: `Monogram` (inline DQ mark), `PlacementLogos` (data in `src/data/placements.js`), `SocialLinks`.
- No eyebrow labels above headings, no all-caps labels, no monospace outside code.
