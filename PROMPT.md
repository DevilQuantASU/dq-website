# PROMPT.md — Working Brief

Loaded into every Claude Code session via `@PROMPT.md` in CLAUDE.md. Update the task status here as work progresses.

## Goals

1. **Primary: fix dead links** on devilquant.com.
2. **Next: improve UI/UX.** The site currently looks too simple.
   - It must grab attention quickly and be more engaging.
   - Anyone visiting should immediately know what DevilQuant does.

## Constraints

- Don't write code until the task is clear; explain the plan for anything non-trivial.
- Keep changes focused (one concern per branch/PR, per CONTRIBUTING.md).
- **No tagline yet.** DevilQuant has no official tagline. Don't write or suggest one, and leave the footer's current line ("Advanced quantitative analysis for modern markets.") as it is until the maintainer provides one.
- **Leave as is (maintainer's decision):** the hardcoded footer © year (correct); the hidden guides in `guides/index.js`; the 2024 leadership year vs "Est. January 2025"; "Peter" without a surname in `members.json`.
- **Do not change the footer GitHub link** (`github.com/DevilQuant` in `Footer.jsx`), even though it points to an unrelated account. The maintainer has deliberately left it as is.

## Dead-link audit (2026-10-01)

| # | Issue | Status |
|---|---|---|
| 1 | Footer Resources links used plain `/resources?guide=...` hrefs, so they landed on Home. "Internships" pointed to a hidden guide; "Campus Resources" pointed to a guide that doesn't exist. | Fixed: `<Link>` hash URLs; Internships → `landing-a-quant-internship`; Campus Resources removed |
| 2 | `devilquant.com/about/` rendered blank (the `dist/about/index.html` copy loaded assets from `/about/assets/`) | Fixed: `404.html` now redirects plain paths to hash URLs; per-route copy removed |
| 3 | Footer GitHub link → wrong account | Won't fix (see Constraints) |
| 4 | `discord.gg/devilquant` in `landing-a-quant-internship.js` was an invalid invite | Fixed: now `discord.com/invite/WJbhDmumXp` |
| 5 | Expired LinkedIn CDN headshots (Vaibhav Urs, Thomas Tse) | Images set to `null` (the signed URLs expired 2026-02-19 and can't be restored). Both remain 2025 officers (not 2026). **Waiting on photo files** to add to `src/assets/Headshots/`. Thomas's LinkedIn icon removed (no verified URL). |
| 6 | `quantstart.com/articles/` returned 502 | Fixed: QuantStart callout removed from `getting-started-with-quant.js` |

Not dead, just blocking bots: LinkedIn profiles (999), Handshake, Glassdoor, Investopedia (403/402). Verify those manually in a browser.

## UI/UX redesign

- Done 2026-10-01 (branch `feature/homepage-redesign`, via the impeccable + frontend-design skills): whole-site redesign as "The Working Notebook", a dark graph-paper pad with chalk ink, highlighter actions and red-pen marks. Product truth is in PRODUCT.md, the design system in DESIGN.md, and the homepage direction contract in `.impeccable/surfaces/src-pages-home-jsx.md`. The finish review shipped all 8 material fixes.
- Open design raises (not defects): red-pen correction marks; section rules that read separately from the grid; an imperative at the end of Projects; annotations on About/Projects headings.
- Candidate "what we do" content (from `../devil quant rols.png`), quant career tracks:
  - **Quant Trading:** price assets and manage risk in live markets, using probability, mental math, and game theory.
  - **Quant Developer:** write the software that runs trading and research: data pipelines, simulators, and order execution.
  - **Quant Research:** use statistics and machine learning on data to build models and strategies.

## Cleanup backlog (audited 2026-10-01)

Done 2026-10-01 (branch `fix/dead-links`):
- [x] Headshots compressed to 28–88 KB (were up to 1.4 MB); converted to `.jpg`.
- [x] Hero video removed; both video files deleted.
- [x] Catch-all `NotFound` route.
- [x] Navbar Contact scroll uses router state instead of a 100 ms `setTimeout`.
- [x] `pulse-grid.jsx` is pure (deterministic pattern).
- [x] External club links centralized in `src/data/links.js`.
- [x] Lint: 0 errors (unused imports, setState-in-effect, impure render).
- [x] Dead files removed: `react.svg`, `src/assets/DQ.png`, `public/vite.svg`, `interactive-grid-pattern.jsx`, `tailwind.config.js`; dead code removed: `gridFade`, `aspect-w-*`, Navbar's unused scroll listener.
- [x] Founders box derived from `leaders.json`; exact headshot filename lookup; stable list keys.
- [x] `leaders.json`: typo, capitalization, `""` → `null`.
- [x] Project images stored locally in `src/assets/projects/`.
- [x] Meta description and Open Graph tags in `index.html`.
- [x] CI on every PR, plus auto-deploy on merge to `main` (`.github/workflows/ci.yml`); weekly external link check (`links.yml`); `npm run check-links`.
- [x] Node pinned: `.nvmrc` 22, `engines` ≥20.19.

- [x] Unused `bradley.jpg` headshot removed.

Open: none. The remaining audit items are deliberately left as is (see Constraints).
