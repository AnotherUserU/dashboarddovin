---
name: Nusajawa Clove
description: Grower-exporter of Java clove; a straight, spec-first B2B site coloured by the clove plant itself.
colors:
  leaf-950: "#0c1d13"
  leaf-900: "#10261a"
  leaf-800: "#173524"
  leaf-700: "#1f4a31"
  leaf-500: "#3d7a4f"
  bud-500: "#9bb05a"
  bud-200: "#dde6c0"
  blush-500: "#c43d5a"
  blush-600: "#a52f49"
  blush-200: "#f4ccd4"
  clove-900: "#2b140d"
  clove-700: "#4a2417"
  clove-500: "#8a4a2c"
  ground: "#f1f3ea"
  surface: "#fafbf6"
  ink: "#14231a"
  ink-2: "#46574b"
  on-leaf: "#eef2e6"
  on-leaf-muted: "#c9d4c2"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3.2vw, 4.4rem)"
    fontWeight: 780
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 82"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.6vw, 3.4rem)"
    fontWeight: 750
    lineHeight: 1.08
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 88"
  statement:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.5vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.28
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 92"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 88"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, .96rem + .2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: ".875rem"
    fontWeight: 400
    lineHeight: 1.6
  figure:
    fontFamily: "Azeret Mono, ui-monospace, Cascadia Mono, monospace"
    fontSize: "1.75rem"
    fontWeight: 500
    letterSpacing: "-0.02em"
    fontFeature: "'tnum'"
rounded:
  sm: "2px"
  base: "4px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  section-y: "clamp(4.5rem, 3rem + 6vw, 8.5rem)"
  max: "1320px"
  header-h: "68px"
components:
  button-primary:
    backgroundColor: "{colors.blush-500}"
    textColor: "#ffffff"
    rounded: "{rounded.base}"
    padding: ".75rem 1.4rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.blush-600}"
  button-ghost-on-leaf:
    backgroundColor: "transparent"
    textColor: "{colors.ground}"
    rounded: "{rounded.base}"
    padding: ".75rem 1.4rem"
    height: "48px"
  input:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: ".7rem .85rem"
    height: "48px"
  grade-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.base}"
    padding: "clamp(1.25rem, 2.4vw, 2rem)"
  enquiry-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "clamp(1.25rem, 3vw, 2.5rem)"
---

# Design System: Nusajawa Clove

## Overview

**Creative North Star: "The Ripening Bud"**

The category standard for a grower-exporter, played straight and coloured by one plant: glossy leaf, green bud, blushing bud, dried clove. Light, leaf-tinted paper carries the reading; deep leaf fields hold the hero and the enquiry close; dried-clove brown closes the page and colours the numbers. The system is dense with proof (specs, documents, ports, markets) and spare with decoration: hairline rules, a square-ish 4px corner, real photography, one action colour.

The world rejects the dark-luxury spice site (black, serif, gold). It is a supplier's document made legible, not a boutique.

**Key Characteristics:**
- Four-stage plant palette (leaf, bud, blush, clove) with blush reserved for action.
- Archivo on its width axis: condensed for headings, normal for reading; Azeret Mono only for figures.
- Hairline-ruled lists and spec grids instead of cards-in-cards.
- Flat at rest; shadow only on the primary action, hovered grade cards, and the enquiry panel.
- Full-bleed photography of the real crop; no illustration.
- Automatic dark scheme via `prefers-color-scheme`.

## Colors

A plant's life cycle as a palette: leaf greens for fields and structure, bud green as support, blush as the only call to action, clove brown for figures and the footer.

### Primary
- **Blush Bud** (blush-500): the action colour. Primary buttons, focus outline, caret, loading-port pins and keys, invalid-field stroke. Hover deepens to **Ripe Blush** (blush-600). In dark scheme the action lifts to `#e5728a` (hover `#ef8ea2`) with dark ink `#2a0b13` on it.
- **Petal Wash** (blush-200): text selection only.

### Secondary
- **Clove Leaf** (leaf-800): hero and contact fields, skip link. **Deep Leaf** (leaf-700) marks primary map regions, the first line of the commitment statement, and market-group underlines. **Leaf** (leaf-500) is the utility green: document and packaging icons, grade tags, input hover/focus stroke, nav underline default. leaf-900/950 sit behind hero media and on map labels.

### Tertiary
- **Green Bud** (bud-500): secondary map regions, contact-list icons, and the dark-scheme replacement for leaf-700 accents. **Bud Mist** (bud-200): form success status background.
- **Dried Clove** (clove-700): large spec figures and fact numerals (dark scheme: `#ecd3c4`). **Clove Husk** (clove-900): footer field. clove-500 is the fourth stage of the ripening bar and nav underline.

### Neutral
- **Leaf Paper** (ground): page ground and input fill. **Pale Leaf** (surface): grade cards, packaging table, enquiry panel.
- **Forest Ink** (ink) for text; **Moss Ink** (ink-2) for supporting copy, captions, `dt` labels.
- **On-leaf** / **On-leaf muted**: text and subcopy on leaf-800 fields.
- Rules are ink at 14% (`--rule`) for hairlines and 28% (`--rule-strong`) for input strokes and link underlines.

### Named Rules
**The One Blush Rule.** Blush is the action and only the action (buttons, focus, ports, errors). Never use it for decoration or headings.

**The Life-Cycle Order Rule.** When the four stages appear together (ripening bar, nav underlines) they run leaf, bud, blush, clove, in that order.

## Typography

**Display / Body Font:** Archivo (variable width 62-125, weight 300-800), with ui-sans-serif, system-ui
**Figure Font:** Azeret Mono (400, 500), with ui-monospace

**Character:** One grotesque stretched to two voices: headings condense to 82-92% width at heavy weights for a stamped, industrial feel; body sits at 100% width for reading. Mono appears only where a number is the proof.

### Hierarchy
- **Display** (780, 82% width, clamp 2.5-4.4rem, 1.02): hero headline only, max 18ch.
- **Headline** (750, 88% width, clamp 2-3.4rem, 1.08): section h2, `text-wrap: balance`.
- **Statement** (500, 92% width, clamp 1.5-2.25rem, 1.28): the pull statement; first line in deep leaf.
- **Title** (700, 1.35rem; featured grade up to 2.2rem): h3 and product names. Sub-list titles and market headings use 700 at 1rem, 95% width.
- **Body** (400, ~1-1.06rem, 1.6): lead paragraphs at 1.0625-1.125rem in ink-2, 34-62ch.
- **Label** (400-600, .8125-.9375rem): `dt`, captions, hints, form labels (600).
- **Figure** (Azeret Mono 500, tabular): 1.75rem facts, 1.35rem featured specs, 1.05rem standard specs; units at .55em in ink-2.

### Named Rules
**The Mono Means Measured Rule.** Azeret Mono is reserved for measured values (capacity, eugenol, moisture, MOQ). Never for labels, prose, or decoration.

## Layout

Centered 1320px container with a fluid gutter; sections pad by `section-y` and are separated by a single hairline top border, not background changes. Full-width leaf fields bookend the page (hero, contact) and clove brown closes it. Composition is asymmetric two-column: hero 1:1 split (copy left, full-height photo right), commitment 7:4, quality 6:5, contact 5:7; products run on a 12-column grid, featured grade 7 / standard 5. Header is sticky at 68px (60px under 900px).

Breakpoints: 1100px (grade grid to two columns), 900px (single column, hamburger menu, hero photo above copy at 4:3), 640px (grades and form fields stack).

## Elevation & Depth

Flat and hairline-ruled by default; depth is tonal (paper, pale-leaf surfaces, deep leaf fields). Shadows appear in three places only, all soft and tinted.

### Shadow Vocabulary
- **Action lift** (`0 1px 0 rgb(0 0 0/.08), 0 6px 18px -8px rgb(164 40 70/.55)`; hover `0 10px 24px -10px ... /.7`): primary button only, blush-tinted.
- **Grade hover** (`0 18px 40px -24px rgb(23 53 36/.45)` with translateY(-3px)): product cards on hover.
- **Panel float** (`0 30px 60px -30px rgb(0 0 0/.55)`): the enquiry form lifted off the leaf field.
- **Header glass**: sticky header at 90% ground with `saturate(140%) blur(10px)`.

### Named Rules
**The Flat-At-Rest Rule.** Surfaces carry a 1px rule, not a shadow. Shadow signals the action, a hover, or the one floating form.

## Shapes

Square-ish: a single 4px radius on buttons, inputs, cards, panels, images, and status notes; 2px on focus outlines and flag chips; 3px swatches in the map key (ports are circles). Borders are 1px hairlines; the only 2px strokes are market-group underlines and the nav stage underline; the ripening bar is 3px.

## Components

### Buttons
- **Shape:** gently squared (4px), min-height 48px (40px small), Archivo 600 at 95% width.
- **Primary:** blush fill, white text, action-lift shadow. Hover to blush-600; active presses `translateY(1px) scale(.985)`.
- **Ghost on leaf:** transparent with 42% on-leaf border; hover solid border and 8% wash. Used only on leaf fields.
- **Text link:** 650 weight, rule-strong underline via border, trailing arrow; hover turns the underline blush and widens the gap.

### Cards / Containers
- **Grade card:** pale-leaf surface, 1px rule, 4px, photo on top, body padded fluidly; hover lifts 3px with grade-hover shadow. Specs sit in a hairline-divided grid of mono figures.
- **Ruled tables:** facts, documents, packaging, contact, markets are rows split by 1px rules, never boxed individually.

### Inputs / Fields
- **Style:** 48px min-height, ground fill, rule-strong stroke, 4px. Select uses a drawn CSS chevron.
- **Hover / Focus:** stroke to leaf-500; focus adds a 3px leaf ring at 25%.
- **Error:** blush stroke with 18% blush ring; message `#a42844` (dark `#f08aa0`) at .875rem 550.

### Navigation
- Ink-2 links at 550; hover and active (`aria-current`) go to ink and draw a 2px underline in the section's life-cycle stage colour. Under 900px: 44px bordered menu toggle, full-width dropdown list with row rules.

### Ripening Bar (signature)
A 3px bar under the header split into four equal stages (leaf, bud, blush, clove) that scales from 0 to 1 with page scroll (CSS scroll timeline, IntersectionObserver fallback). It is the site's one ornament and is not repeated elsewhere.

### Origin Map
Inline SVG of Java: primary regions deep leaf, secondary green bud, others neutral; ground-coloured 1.5px region strokes, blush port pins, HTML labels positioned by `--x`/`--y`.

## Do's and Don'ts

### Do:
- **Do** keep blush for actions, focus, ports, and errors only.
- **Do** set every measured value in Azeret Mono, tabular, with the unit smaller in ink-2.
- **Do** separate content with 1px rules at 14% ink before reaching for a card.
- **Do** condense Archivo for headings (82-92% width) and keep body at 100%.
- **Do** use real crop photography, cropped full-bleed or at 4:3 / 4:5 / 21:8.
- **Do** give every colour role a dark-scheme value when adding one.

### Don't:
- **Don't** move toward dark luxury: no black grounds, gold, or serif display.
- **Don't** use a radius above 4px on interface elements.
- **Don't** add shadows to resting surfaces.
- **Don't** reorder or recolour the four life-cycle stages.
