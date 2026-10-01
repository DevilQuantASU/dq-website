---
name: DevilQuant
description: The first quantitative finance club at ASU, set on a dark graph-paper working notebook.
colors:
  pad: "#1d2329"
  pad-deep: "#171c21"
  rule: "#2a333a"
  rule-major: "#36424b"
  chalk: "#e8ebe7"
  pencil: "#9aa6ad"
  highlighter: "#f3dd4a"
  highlighter-bright: "#fbe96c"
  redpen: "#f0624f"
typography:
  display:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "clamp(48px, 13vw, 96px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "clamp(40px, 8vw, 72px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: "48px"
    letterSpacing: "-0.03em"
  title-sm:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "24px"
    letterSpacing: "-0.02em"
  body-lead:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "28px"
  body:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
  label:
    fontFamily: "Lexend Variable, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: "24px"
  annotation:
    fontFamily: "Kalam, Segoe Print, cursive"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "24px"
  annotation-lg:
    fontFamily: "Kalam, Segoe Print, cursive"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1.3
rounded:
  none: "0px"
spacing:
  half: "12px"
  sq: "24px"
  sq-2: "48px"
  sq-3: "72px"
  sq-4: "96px"
  sq-6: "144px"
components:
  button-highlight:
    backgroundColor: "{colors.highlighter}"
    textColor: "{colors.pad}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-highlight-hover:
    backgroundColor: "{colors.highlighter-bright}"
    textColor: "{colors.pad}"
  button-pen:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  nav-link:
    textColor: "{colors.pencil}"
    typography: "{typography.label}"
  nav-link-current:
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
  tag:
    backgroundColor: "{colors.pad}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "24px"
  select:
    backgroundColor: "{colors.pad}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "0 40px 0 16px"
    height: "48px"
---

# Design System: DevilQuant

## Overview

**Creative North Star: "The Working Notebook"**

The site is the page friends work a problem on together: a dark slate scratch pad ruled in graph squares, written on in chalk-white ink, marked with a yellow highlighter, and corrected in red pen. Every surface is the same sheet of paper; nothing floats above it. Hierarchy comes from the weight of the ink (heavy constructed Lexend for what the page is, quiet pencil grey for what it says, handwritten Kalam for what someone noted in the margin), not from boxes, fills or depth.

Density is low and left-aligned. Content sits in a sheet 49 squares wide whose edges land on grid lines, and every layout distance is counted in whole 24px squares, so the grid behind the page and the type on it agree. The page has one bold place, the hero's pen-drawn tree from a handwritten "you" to two ways in; everything else is ruled and calm, and each sheet ends on one action.

The world was chosen against the finance-club default: no ticker charts, candlesticks, or dark hero with a gradient CTA. It stays dark (a brand commitment), and it does not borrow ASU maroon and gold.

**Key Characteristics:**
- Graph-paper ground: 24px minor squares, a major line every 5 squares, centered with the sheet on wide screens.
- Ink-only states: hover is a highlighter swipe, the current place is a red-pen loop.
- Highlighter yellow is the only fill an action may carry.
- Square corners and 1.5px pen lines; the only curves are hand-drawn ink marks.
- Two typefaces with strict jobs: Lexend for the printed page, Kalam for handwriting.
- Motion happens once, in the hero, as pen and highlighter strokes; reduced motion shows the final drawing.

## Colors

A near-monochrome slate pad with exactly two inks of color, each with one job: yellow means "act here", red means "someone marked this".

### Primary
- **Highlighter Yellow** (`highlighter`): the only fill for actions (primary buttons, the mobile guide-menu button), the marker stroke under the hero claim, the hover swipe behind links, text selection, the focus ring and the caret. Text on it is always Pad.
- **Fresh Highlighter** (`highlighter-bright`): hover state of a highlighter fill only.

### Secondary
- **Red Correction Pen** (`redpen`): the current-page loop, margin notes (the desktop "where members have landed" note), handwritten annotations under names and titles (leader roles, project types, "Est. January 2025"), the hand-drawn ticks in lists, and the border of a "bad" callout. Shipped at #f0624f rather than the contract's #e5533f so small Kalam annotations clear contrast on Pad.

### Neutral
- **Slate Pad** (`pad`): the page ground and the fill behind any outlined panel, tag or select, so ruled lines never show through content blocks.
- **Deep Pad** (`pad-deep`): the footer, code blocks, empty headshot frames, scrollbar track. One step under the page, never above it.
- **Minor Rule** (`rule`): the 24px graph squares, table row dividers, the footer's copyright rule.
- **Major Rule** (`rule-major`): the every-5-squares grid line, section top rules, header and footer borders, table and code outlines, tag outlines.
- **Chalk Ink** (`chalk`): headings, primary text, pen-outlined buttons and panels, the tree strokes, and the chalk-inked placement wordmarks.
- **Pencil Grey** (`pencil`): body copy, secondary text, inactive nav links, list markers, icons at rest.

### Named Rules
**The One Fill Rule.** Highlighter yellow is the only solid fill an interactive element may wear. Secondary actions are pen outlines, never a second fill color.

**The Two Inks Rule.** Yellow says act, red says annotated or current. Red is never a button, and yellow is never an annotation.

**The Chalk Logos Rule.** Third-party marks are inked as one color in chalk (`brightness(0) invert(0.93)`), never shown in brand color.

## Typography

**Display Font:** Lexend Variable (with system-ui, sans-serif)
**Body Font:** Lexend Variable (with system-ui, sans-serif)
**Annotation Font:** Kalam 400/700 (with Segoe Print, cursive)

**Character:** Lexend is the printed, constructed monoline voice of the page, set heavy and tight for display. Kalam is a person's handwriting on that page: it only ever annotates, labels a drawing, or notes something in the margin.

### Hierarchy
- **Display** (800, clamp(48px, 13vw, 96px), 1, -0.04em): the page name at the top of each sheet: "DevilQuant" on the hero, "About" and "Projects" (clamp(48px, 10vw, 96px)).
- **Headline** (800, clamp(40px, 8vw, 72px), 1, -0.04em): the closing imperative of a sheet ("Your move.") and the 404 title.
- **Title** (700, 32px/48px, -0.03em): section headings on About and Projects (28px on phones for project titles), and the mobile-menu links.
- **Title Small** (700, 20px/24px, -0.02em): person names and the DevilQuant wordmark beside the monogram.
- **Body Lead** (400, 17px/28px): intro paragraphs in Pencil, max 52-64ch.
- **Body** (400, 16px/26px): section prose in Pencil, max 60ch; guide prose 16px at 1.75.
- **Label** (500, 15px): nav links, footer links, selects, member names. Sentence case.
- **Annotation** (Kalam 400, 18px/24px): roles and types in Red Pen directly under a name or title; 20px Chalk for footer column heads.
- **Annotation Large** (Kalam 400, 26-32px): the hero claim (30px, with the highlighter marker under it), the margin note, and the tree's "you".

### Named Rules
**The Handwriting Has A Reason Rule.** Kalam appears only where a person would have written on the page: a claim being marked, a margin note, a role under a name, a label on a drawing. Never for body copy, buttons or nav.

**The Sentence Case Rule.** No all-caps tracked labels anywhere; Lexend links and headings stay sentence case. Monospace is for code blocks only.

## Layout

The page is one graph-paper sheet. `body` carries the grid (minor 24px squares in Rule, major 120px squares in Major Rule); from 1224px wide the grid is centered so the 49-square content sheet (1176px) starts and ends on grid lines. Below that, the sheet sits one square (24px) in from each edge.

Spacing is counted in squares: 24px between related elements, 48px between groups and grid gaps, 72px between page sections and as page top padding, 96px around homepage sections (144px for the closing sheet on desktop). Half a square (12px) is allowed inside a component (heading to its list, tag gaps, icon gaps).

Sections are separated by a Major Rule top border with whole-square padding, not by panels. Grids snap to squares: placement logos sit in 2 columns of 6 squares (144px) on phones and 4 columns of 11 squares (264px) from 1024px; leader cards run 1/2/3 columns with 24px x 48px gaps.

Breakpoints: 640px (2-column cards), 768px (side-by-side sections, footer columns), 1024px (full nav, desktop margin note, 4-column logos), 1224px (fixed sheet width). The header is 72px (three squares) and sticky; the hero fills the remaining viewport on load with the primary action inside the first viewport at 390px.

## Elevation & Depth

Flat. Everything is ink on one sheet of paper, so nothing casts a shadow and nothing lifts on hover. Depth is limited to two tonal steps: Deep Pad sits beneath the page (footer, code, empty frames) and the sticky header is opaque Pad over the grid with a Major Rule bottom border. The `box-shadow` property appears in the build only as an inset 1-1.5px line, the technique for drawing pen outlines without affecting layout; it is a line, not elevation.

### Named Rules
**The Same Sheet Rule.** No drop shadows, offset shadows, blur or glass. An element that needs separation gets a pen line or a rule, never a lift.

## Shapes

Corners are square (0px) on every constructed element: buttons, panels, images, tags, selects, tables, code. Outlines are pen lines: 1.5px Chalk for interactive outlines and featured panels, 1.5px Major Rule for structural boxes and tables, 1px Major Rule for tags, with Chalk at 70% as a 1.5px inner outline on photographs.

Curves belong only to hand-drawn ink: the red-pen loop around the current page, the hero tree's slightly wavering strokes (2.75px, round caps), the ragged-ended highlighter marker, the underline under the margin note, and the red ticks in lists. These are inline SVG paths, drawn slightly imperfect on purpose, and they never cross a glyph.

### Named Rules
**The Drawn Curve Rule.** If it is constructed, it is square. If it curves, it was drawn by hand in pen or highlighter.

## Components

### Buttons
Blocks of ink you can press, never chrome.
- **Shape:** square corners (0px), min height two squares (48px), 24px side padding; the nav and menu toggle use a 40px compact size, the hero primary 56px.
- **Primary (highlighter):** Highlighter fill, Pad text, Lexend 600. Used once per sheet for the main move (Join the Discord, the contact email, Back to Home).
- **Hover / Active:** fill brightens to Fresh Highlighter over 150ms ease-out; active nudges down 1px.
- **Secondary (pen):** transparent with a 1.5px inset Chalk outline, Chalk text, Lexend 500; hover lays an 8% Chalk wash.
- **Focus:** 2px Highlighter outline, 3px offset, globally.

### Ink Links
- **Style:** text inherits color, no underline at rest in nav and footer.
- **Hover / Focus:** a 45% Highlighter swipe grows from the left behind the lower half of the words, skewed -8deg, over 220ms cubic-bezier(0.16, 1, 0.3, 1). Standalone in-flow links ("Meet the members") also carry a 1.5px Chalk-60% underline at 6px offset. Guide prose links use a yellow underline that fills to a 15% yellow wash on hover.

### Chips (Tags)
- **Style:** Pad fill, 1px inset Major Rule outline, Chalk 13px text, 24px tall, 12px side padding, square.
- **State:** static labels only; no selected state.

### Cards / Containers
- **Corner Style:** square (0px).
- **Background:** Pad, so the grid stops behind content.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** featured panels (Founders, the Projects closing note) use a 1.5px inset Chalk line; scroll boxes (Members) a 1.5px Major Rule line.
- **Internal Padding:** one square (24px) on phones, two (48px) from 768px.
- Leader entries are not boxed: an outlined 240px photo, then a Title Small name, a Red Pen annotation role, Pencil bio and social icons.

### Inputs / Fields
- **Style:** the year select is a pen-outlined box: Pad fill, 1.5px inset Chalk line, 48px tall, Label type, a hand-stroked chevron in Chalk.
- **Focus:** the global Highlighter focus ring.

### Navigation
- **Style:** sticky 72px Pad strip with a Major Rule bottom border; monogram plus Lexend wordmark left, sentence-case links right at 15px/500 in Pencil, Highlighter "Join the Discord" at the end.
- **Hover:** Chalk text plus the ink-link highlighter swipe.
- **Current:** Chalk text circled by the red-pen loop (2px, clears the text by 14px each side); the current link has no hover swipe.
- **Mobile:** below 1024px a pen-outlined "Menu"/"Close" button opens a full-height Pad sheet with 32px bold links, the same red-pen loop on the current page, and the Highlighter join button pinned to the bottom.

### Hero Join Tree (signature)
A handwritten "you" (Kalam 32px) on a chalk pen trunk that forks in a bracket to two rows four squares tall: the Highlighter primary on the upper branch and the pen-outlined secondary below. On load the trunk draws, then the bracket (520ms and 760ms, cubic-bezier(0.65, 0, 0.35, 1)), while a ragged highlighter marker swipes under the Kalam claim (450ms, cubic-bezier(0.16, 1, 0.3, 1)). These are the only entrance motions on the site, once per load; with reduced motion the drawing is shown complete.

### Placement Logos
Official wordmarks inked in Chalk, each centered in a whole-square cell 72px tall, heights balanced by visual weight. On desktop the hero also carries a red-pen margin note, rotated -2deg, listing the placements in Kalam.

### Callouts (guides)
Margin notes outlined in a 1.5px pen line and tinted 6-8% by meaning: Pencil (info), Highlighter (warning), Chalk (good), Red Pen (bad).

## Do's and Don'ts

### Do:
- **Do** count every layout distance in 24px squares (12px half-squares only inside a component), and keep the sheet's edges on grid lines.
- **Do** give each sheet one Highlighter action and end each section on one move.
- **Do** mark the current place with the red-pen loop and annotate in Kalam Red Pen directly under the thing it describes.
- **Do** draw outlines as 1.5px pen lines (inset box-shadow or outline) on a Pad fill.
- **Do** ink third-party logos and icons in a single Chalk or Pencil color.
- **Do** keep motion to pen-draw and highlighter-swipe strokes, honor `prefers-reduced-motion`, and keep state transitions at 150-220ms.

### Don't:
- **Don't** fill any action with a color other than Highlighter, and don't use Red Pen for buttons.
- **Don't** use drop, offset or blurred shadows, or lift elements on hover.
- **Don't** use gradient fills; the graph-paper ground's hard-stop 1px lines are the only gradient in the system.
- **Don't** round constructed corners; curves are reserved for hand-drawn ink marks.
- **Don't** put all-caps tracked labels or small labels above headings, and don't use monospace outside code.
- **Don't** set body copy, buttons or nav in Kalam.
- **Don't** use ticker charts, candlesticks, ASU maroon/gold, or a dark hero with a gradient CTA.
- **Don't** tile content into a grid of boxed cards; separate with rules and whitespace.
