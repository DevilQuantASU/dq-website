---
version: 1
slug: "src-pages-home-jsx"
primary_target: "src/pages/Home.jsx"
related_targets: ["src/components/Hero.jsx","src/components/Navbar.jsx","src/components/Footer.jsx","src/pages/About.jsx","src/pages/Projects.jsx","src/pages/Resources.jsx","src/pages/NotFound.jsx"]
---

# Surface brief: homepage + site chrome (whole-site restyle)

Scope: homepage (`src/pages/Home.jsx`, `src/components/Hero.jsx`), navbar + mobile menu, footer; About, Projects, Resources and NotFound restyled into the same world with content and behavior unchanged.
Mode: Persuade (homepage); other pages keep their own job (Read for Resources) inside the same world.
Audience/job: ASU students, mostly on phones from a shared link, deciding in seconds whether to join.
Action: join via Discord (primary) or Sun Devil Central.
Proof: only "first quant finance club at ASU" and member placements (public/logos). Incumbent hero sentence may stay.
Avoid (user): crypto/trading-bro hype, too academic/dry, heavy/slow.

## Direction contract

THESIS: DevilQuant is the page friends work a problem on together: a dark graph-paper scratch pad, penciled, highlighted, corrected in red. It refuses the finance-club default of ticker charts, candlesticks, and a dark hero with a gradient CTA.

OWN-WORLD: Dark slate pad (#1d2329) ruled in faint graph squares (24px, major line every 5), chalk-white ink (#e8ebe7), pencil grey (#9aa6ad), highlighter yellow (#f3dd4a) as the only fill for actions, red correction pen (#e5533f) for the current place and margin notes. Lexend (constructed monoline, heavy for display) plus Kalam (handwriting) for annotations. Square corners, 1.5px pen lines, no shadows, no gradients, no cards-as-tiles. States are ink only: hover = highlighter swipe, current = red-pen mark.

STORY: The visitor sees the club's name as the page title, reads in one handwritten line that this is the first quant club at ASU, follows a pen-drawn tree from "you" to two highlighted ways in, sees where members landed, and closes on one move: join the Discord.

FIRST VIEWPORT: Full-height sheet. Top: a notebook header strip with the DQ monogram + wordmark left, page links right, current page circled in red pen, highlighter "Join" at the end. Left-aligned, "DevilQuant" at ~4 squares tall in Lexend 800, chalk. Under it, in Kalam pencil, "the first quantitative finance club at ASU", with a highlighter swipe behind it. Then the incumbent one-sentence description in Lexend body. Below, the signature: a hand-drawn tree whose trunk starts at a handwritten "you" and forks to two real links, "Join the Discord" (highlighter fill, primary) and "Sign up on Sun Devil Central" (pen-outlined). The primary action sits at the upper branch end, inside the first viewport on 390px phones.

FORM: The Working Notebook, position 6 of my 7-item resonance list (roll-assigned), seed key 53ea42c3. Signature interaction: on load the tree draws itself as one pen motion (trunk then bracket), then the highlighter swipes behind the primary link; reduced motion shows the final state. Motion grammar: pen-draw and highlighter-swipe only, once per page load, nowhere else. Raises: one continuous stroke (neon); whole-square grid (azulejo); strict ink states (one-bit); constructed wordmark from the monogram geometry (Breton, translated to the inline-SVG monogram set beside a Lexend wordmark matched to its stroke); one imperative per sheet (WPA).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Plan (frontend-design pass)

Physical scene: a student on a phone at night in a dorm or between classes, tapping a Discord link; dark is both the brand commitment and the scene.

Color (full palette, 5 roles): Pad #1d2329 · Rule #2c363e (minor) / #36434c (major) · Chalk #e8ebe7 · Pencil #9aa6ad · Highlighter #f3dd4a (text on it: Pad) · Red pen #e5533f.

Type: Lexend 800 display (tight tracking, -0.03em), Lexend 400/500 body at 16/24; Kalam 400/700 for annotations, margin notes, tree labels. No all-caps labels, no mono data labels, no arrows appended to link text, no middle-dot meta strings.

Layout: Left-aligned throughout. Container width 49 squares (1176px) centered with the grid background centered so container edges sit on grid lines; on phones, content starts one square in from the edge on a grid line. All spacing in whole squares (24px multiples).

```
[DQ DevilQuant]            Home About Resources Projects Contact [Join]
DevilQuant
~the first quantitative finance club at ASU~   (Kalam, highlighter swipe)
We are a community of students who...           (Lexend body, 2 lines)
 you ──┬── [ Join the Discord ]                 (highlighter fill)
       └── [ Sign up on Sun Devil Central ]     (pen outline)
------------------------------------------------ sheet 2
where members have landed (Kalam, red pen)
[amazon] [aws] [capitalone] [gd] [microsoft] [seagate] [servicenow] [wellsfargo]  chalk-ink logos in whole-square cells
Meet the members  (one imperative, link to About)
------------------------------------------------ sheet 3
Your move.  (Lexend 800)        [ Join the Discord ]
```

Principles: one bold place (the hero tree); everything else quiet and ruled. Ink, not chrome. Every section ends on one action. Phone-first.

Review against the brief: the first plan used a big stats row (members/events) under the hero; cut, because no counts are approved and it is the category default. The first nav idea used an all-caps tracked label strip; replaced with sentence-case links and red-pen marks. The About placements icon cloud (3D canvas) is replaced by the same chalk logo grid for consistency and phone weight.
