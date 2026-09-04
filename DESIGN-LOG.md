# Selection Log — MMi Electrical Services Inc. (`mmi-electrical`)

St. Albert, Alberta. One-page cold-outreach demo. Process run per
`section-style-repo.md`: Step 0 inventory, then layout → visual style →
animation per section with an element-inventory pass and a motion budget,
then both finishing passes.

---

## Step 0 — Page inventory

**Visual ambition:** mixed, technical and precise. Industrial-utilitarian
dominant, minimal-clean secondary (art-direction row 6).

**The organising idea.** The page is built as a technical document. A running
section index (`01`–`08`) sits on a hairline rule at the top of every section;
column guides are left visible as page furniture rather than hidden behind the
content; every label, meta line, index number and instrument readout is set in
the mono utility face while Fraunces carries the display voice. That is the
assigned aesthetic risk — *expose the grid* — and it is the thing that stops a
copper-on-cream trade site from collapsing into the generic warm-cream-plus-
serif default that `front-end-design.md` names.

**Rhythm** (alternating slate/charcoal bands against light, per the row):

| # | Section | Ground |
|---|---------|--------|
| — | Header | frosted ink glass over the hero |
| 1 | Hero | ink black, photo ground, exposed grid |
| 2 | Google Reviews | warm ivory, with one ink aggregate band |
| 3 | Trust Badges | slate steel + brushed-steel texture |
| 4 | Why Us | warm ivory |
| 5 | Services | sunk ivory (a half-tone down, so two light bands never read as one) |
| 6 | Coverage | photo divider → ink black |
| 7 | Our Story | warm ivory |
| 8 | Final CTA | deep copper block — the page's one loud colour moment |
| 9 | FAQ | warm ivory |
| — | Footer | ink black |

**Imagery available per section** (from `_kit/IMAGE-CATALOG.md`, 11 photos
shipped):

- Hero — `panel-upgrade-hero` as a treated ground, not a subject.
- Why Us — `load-calc`, bleeding past the shell's right edge.
- Services — one photo per service: `panel-new`, `ev-car-charging`,
  `troubleshooting-hero`, `exterior-lighting`, `voltage-tester`, `office-ti`.
- Coverage — `street-dusk` as a full-width section divider.
- Story — `about-crew`, pinned.
- Trust badges — `tex-steel` as an overlay texture only, never as a "photo".

**Signature moment:** the photo-diagnosis widget as a **diagnostic intake
terminal** — mono field labels, a three-step indicator, a measured file
readout, a scan beat over the local preview, and a status line that reads like
instrumentation. It is the only filled, shadowed, near-black object in the
hero, and the only place on the page where depth and detail are spent.

**Motion budget for the page:** `WordReveal` once (hero H1 only).
`useCursorGlow` zero times — the page's dark surfaces are structural bands, not
feature panels, and the effect would have read as decoration. `useScrub` once
(story spine). Ambient drift zero times. Everything else is entrance +
resting-state hover.

---

## Section 1 — Hero

- **Layout — Hero with Embedded Quote/Booking Form.** *Best for:* businesses
  where the goal is immediate lead capture; trades. The whole page exists to
  get a photo and a phone number, and the mandatory fold list (H1, subhead,
  four badges, two CTAs, widget) only fits if the form is a structural column
  rather than an afterthought. Split-Screen Hero loses because a 50/50 photo
  split gives an image weight the fold cannot spare; Full-Bleed Image Hero
  loses on its own *Avoid when* — the subheadline is a full sentence of
  context, which full-bleed treatments do not tolerate.
- **Visual style — Raw Industrial Grid Overlay** (+ **Layered Depth
  Composition** from the richness file). Four layers: treated photo ground →
  directional ink scrim → column rules drawn *over* the photo → the solid
  terminal panel. Gradient Scrim alone would have produced exactly the
  "headline over a dimmed photo" default the build brief bans.
- **Animation — Staggered Load-In**, trigger `load` (the section is above the
  fold, so a scroll trigger would never be seen), plus **Weighted Word
  Reveal** on the H1 and **CTA Micro-Interaction** on both buttons.
- **Element inventory / motion budget: 6 groups**, whole sequence started by
  840ms and settled by ~1.4s — a hero that is still arriving at two seconds
  reads as slow, not expensive.
  1. eyebrow + its copper rule — `fade`, 40ms.
  2. H1 — Weighted Word Reveal, 130ms base, 64ms/word (6 words, inside the
     8–10 word ceiling; used once on the page).
  3. terminal panel — **Depth Settle**, 200ms, 800ms duration. Deliberately
     *early*, in parallel with the headline, because it is the signature.
  4. subheadline — `rise-sm`, 440ms.
  5. four value badges — `rise-sm`, 540ms base, 62ms apart. One group with an
     internal step, not four top-level groups.
  6. CTA pair — `rise-sm`, 780ms, moving together as one unit.
  Reassurance line trails at 700ms with the panel group; the hero footer rail
  closes the sequence at 840ms.
  Reduced motion: every variant collapses to final state via `base.css`;
  the widget's LED pulse and scan line are disabled explicitly.
- **Mandatory hero rules.** The eyebrow's rule and the terminal panel's copper
  top border sit on the same horizontal line (both are the first child of
  their grid column, `align-items: start`). H1 capped at `22ch` so it wraps to
  2–3 lines instead of near-single words. Everything through the widget clears
  the fold at 390×844 and 1440×900 — verified by screenshot, not by estimate.

## Section 2 — Google Reviews

- **Layout — Testimonial Card Grid.** *Best for:* 3–6 testimonials scanned at
  once; the five quotes are one to two sentences each, which is exactly the
  shape a grid wants. Testimonial Carousel loses because five short quotes do
  not need to be hidden behind an interaction, and a carousel would have put
  the page's second interactive control right under its first.
  Grid mechanics: a full-width aggregate instrument row, then 5 cards on a
  6-column grid (2+2+2, then 3+3) so the fifth card is never an orphan.
- **Visual style — Star Rating Bold Color Accent** (+ **Large Numeral
  Statistic Display** on the aggregate panel, and **Textured or Patterned
  Background, No Photo** — the exposed column rules — since no genuine
  customer photography exists and inventing it is out of the question).
- **Animation — Star Rating Fill Animation on Scroll** + **Count-Up Stat
  Numbers on Scroll**.
- **Element inventory: 3 groups.** (a) section rule + H2; (b) aggregate panel
  as one `settle` unit, with the star sweep and both counters firing inside
  it; (c) five cards, `rise`, 110ms apart in reading order. Magnetic Lift on
  card hover (5px + shadow) so the section is not inert under the cursor.
  Threshold 0.18 / rootMargin −12% throughout (motion.jsx defaults).
  *Implementation note:* the star sweep is driven off the enclosing
  `<Reveal>`'s own `is-in` class rather than nested `<Reveal>`s — a Reveal
  inside a `<Stagger>` subtree consumes the parent's stagger slots and would
  have stretched the card cascade to several seconds.
- **Placeholder labelling:** the aggregate note ships verbatim inside the ink
  panel, in the mono utility face at micro size. Present and unmissable on
  inspection, not a garish banner.

## Section 3 — Trust Badges Banner

- **Layout — Insurance, Bonding, and Licensing Detail Block.** *Best for:*
  regulated trades where licensing is a genuine trust signal. Certification
  Badge Wall was the alternative; it loses because a "wall" wants logo marks,
  and these are four stated credentials with supporting detail lines, which is
  what the detail block is shaped for.
- **Visual style — Badge or Seal Bold Treatment**, on the slate band with
  `tex-steel` overlaid at 14% as texture only.
- **Animation — Badge Fade and Scale-In on Scroll.**
- **Element inventory: 2 groups.** (a) index + H2 + rule; (b) four seals,
  `scale`, 110ms apart. Per-item hover darkens the cell.
- **System discipline:** all four seals are the same 46px square, the same
  1.6 stroke weight, the same 22px icon, the same optical centre — award,
  hard-hat, trophy, shield-check. No two share an icon, none is a generic dot.
  All four claims come from the business's own stated facts; the support lines
  are unquantified restatements, never invented specifics.

## Section 4 — Why Us

- **Layout — Icon + Blurb Grid**, four reasons on one ruled row. *Best for:*
  3–4 equal-weight points, icon + short heading + a sentence. The four reasons
  are genuinely equal in weight, which rules out Single Statement + Supporting
  Points (that format implies a hierarchy the content does not have) and rules
  out Numbered Reasons List outright — these are not a sequence.
- **Visual style — Filled Icon Badges** (+ **Overlapping or Bleeding Image**
  from the richness file: the `load-calc` photo breaks the shell's right edge
  so the section is not four blurbs on flat colour).
- **Animation — Sequential Reveal on Scroll.**
- **Element inventory: 3 groups.** (a) rule + H2 + lead, 110ms internal;
  (b) photo, `settle`; (c) four reasons, `rise`, 120ms apart — badge, heading
  and body move together per reason, never split into three beats.
- **Log check:** this is the second `settle` on a photograph (after the hero).
  Kept: it is the technique the richness file pairs with physical arrival, and
  the two uses are five sections apart on different grounds.

## Section 5 — Services

- **Layout — Tabbed or Accordion Service Panel.** *Best for:* six or more
  services where showing everything at once overwhelms and visitors
  self-select. Six services with 25–50 words each is exactly that shape.
  Service Card Grid loses because it would have made the fourth card grid on
  the page; Zig-Zag loses on scroll length at six items.
  The index reads as a technical contents page: hairline rows, an icon per
  line, a right-hand chevron that rotates on the active row, and a measured
  copper marker in the left margin.
  **Deliberate omission:** the index carries *no* numbers. A contents page
  invites them, but a service list is not a sequence, and the build brief's
  guardrail wins over the flourish. Numbering is spent on the FAQ, where it is
  earned.
- **Visual style — Bordered Card with Icon Header**, applied to the open panel
  (photo + meta stamp + body + inline call link).
- **Animation — Active Tab Underline Slide** (the copper marker's travel is
  *measured* from the active button, not assumed from a fixed row height —
  labels wrap at narrow desktop widths and a hard-coded step would drift),
  **Accordion Smooth Expand and Collapse** (`grid-template-rows: 0fr → 1fr`,
  420ms ease-out-quart) under 1000px, and a 460ms cross-fade panel swap above
  it.
- **Element inventory: 2 groups.** (a) split section head; (b) six index rows,
  `rise-sm`, 80ms apart. The panel body is a swap, not a stagger — the
  animation entry is explicit that panel content swaps rather than staggers.
- **Deviation logged:** disclosure semantics (`button` + `aria-expanded` +
  `aria-controls` + `role="region"`) rather than ARIA tabs. One DOM tree has to
  be a two-column tab set at ≥1000px and a single-open accordion below it, and
  a `role="tablist"` cannot contain its own panels. Disclosure is correct in
  both presentations; ARIA tabs would be correct in only one.

## Section 6 — Service Area / Coverage

- **Layout — Service Area List or Coverage Zone Grid.** *Best for:* businesses
  covering multiple towns rather than one address. Neighborhood or Landmark
  Mention Block was the alternative and loses on tone: the copy is a 21-name
  index, which wants a grid, and the landmark framing is warmer than this
  page's register.
- **Visual style — Industrial Grid Coverage Map**, hand-built. **No embed, no
  tiles, no drawn geography.** The coverage is expressed as ruled cells — 12
  neighbourhoods, 9 towns — which is honest about what is actually known (the
  names) and asserts nothing about where anything sits. Opens with **Image as
  Section Divider** (`street-dusk`, fading into the ink band) so the transition
  from the light Services band is a photograph rather than a colour cut.
- **Animation — Coverage Zone Highlight on Hover** (cell fills copper) +
  two staggered cell groups.
- **Element inventory: 4 groups.** (a) rule + H2 + intro + home-base stamp +
  CTA, 110ms apart, sticky on desktop; (b) 12 neighbourhood cells, `scale`,
  34ms apart; (c) 9 town cells, same, offset 140ms. Fast steps deliberately:
  21 cells at 110ms would take 2.3 seconds, which reads as a wait.

## Section 7 — Our Story

- **Layout — Split Story with Sticky Photo. DEVIATION.** The assigned layout
  was Chronological Timeline Narrative, and the project's timeline rule is
  explicit: use it only if the copy contains actual dates or ordered
  milestones. It does not — "twenty years", "the 2000s", "three years running"
  are durations, not dates — and inventing a founding year to fill an axis is
  forbidden. The assignment's own named fallback is Split Story with Sticky
  Photo, so that is what shipped.
- **Visual style — Minimal Line Timeline**, kept from the assignment but
  repurposed: a thin rule with three dot markers running beside the three
  paragraphs as an undated narrative spine. No year is asserted anywhere. This
  keeps the section inside the assigned minimal-clean family instead of
  drifting to Editorial Pull-Quote, which would have been a second deviation.
- **Animation — Story Section Sticky Scroll Progress** + **Progressive Reveal
  Scrub** on the spine (`useScrub`, flat under 900px), so the copper fill
  tracks the read rather than finishing before the reader does.
- **Element inventory: 3 groups.** (a) pinned photo, `settle`, entering once
  and then holding; (b) rule + H2; (c) three paragraphs, `rise`, 40ms apart —
  a near-simultaneous group, because prose that arrives line by line reads as
  a gimmick at this length.
- Story copy ships verbatim as continuous prose. No paragraph is split,
  summarised or relabelled.

## Section 8 — Final CTA

- **Layout — Urgent or Emergency CTA Banner.** *Best for:* services framed
  around 24/7 availability. The urgency is real and confirmed, not
  manufactured, so the entry's *Avoid when* does not bite.
- **Visual style — Bold Color-Blocked Banner.** The page's one full copper
  block, and the payoff for holding copper to rules, icons and small marks
  everywhere else. Deepened from Live Copper `#B5652D` to `#A0562A` so ivory
  type on it measures 4.9:1 instead of 3.9:1 — the exact mid-copper-on-warm
  failure the build brief warns about, caught and fixed in the token rather
  than shipped.
- **Animation — grouped entrance** (rule → headline → supporting line →
  action pair) + **Bordered Frame Draw** (`frame-x`) on the emergency panel's
  top rule as the closing beat, 420ms after the copy.
  Pulse-or-Glow on the primary button was considered and rejected on its own
  *Avoid when*: there are two CTAs of similar weight here, so pulsing one is
  arbitrary. Banner Background Slow Pan rejected — flat colour, no image.
- **Element inventory: 5 groups**, 120ms apart, plus the frame draw.

## Section 9 — FAQ

- **Layout — Classic Accordion List.** Six questions with multi-sentence
  answers: the entry's stated shape. Grid of Question Cards loses because the
  answers are too long for cards; Two-Column Category Split loses because six
  questions do not sort into categories without forcing it.
- **Visual style — Numbered Question Treatment.** Numerals are earned here —
  an FAQ genuinely is a reference index. Premium note applied: the numeral is
  a different face (mono), a different weight, and a much *smaller* optical
  scale than the question, so the contrast reads as art direction rather than
  a big number stuck on an accordion.
- **Animation — Accordion Expand and Collapse with Height Transition** +
  **Icon Rotate on Expand** (plus rotates 45° into a cross and fills copper) +
  **Staggered Fade-In on Scroll**.
- **Element inventory: 2 groups.** (a) section head; (b) six rows, `rise-sm`,
  90ms apart, question text and icon moving together per row.
- First question opens by default so the section never reads as a closed wall.

## Footer

- **Layout — Mega Footer**, four columns as specified.
- **Visual style — Dark Contrast Footer Band**, with a copper top rule tying
  it to every other section head on the page.
- **Animation — Link Column Staggered Fade-In on Scroll**, one group per
  column (heading + its links together), 120ms apart, plus **Underline Sweep**
  on every link.
- Social icons point at the business's own site: no verifiable Facebook,
  Instagram or Google profile URL was published, and inventing a handle is out.
  Stated in the footer itself and in the README.

## Navigation

- **Layout — Mega Menu Dropdown Nav.** 15 services and 10 service areas is
  genuinely multi-column content; a standard dropdown would have been a
  15-item scrolling list.
- **Visual style — Glass Frosted Nav Bar**, solidifying on scroll. Premium
  note applied: the blur softens what passes *under* the bar while the bar's
  own type stays crisp.
- **Animation — Nav Background Fade-In on Scroll**, **Underline Grow on
  Hover**, **Mega Menu Column Stagger Reveal** (70ms per column).
- Mobile: **no hamburger.** A scrollable index strip sits under the bar with a
  mask-fade on both edges so the overflow is legibly an overflow, then
  retracts at 72px of scroll, leaving click-to-call as the only nav
  affordance — which is what the brief specifies.
- Keyboard: dropdowns open on focus, close on Escape (returning focus to their
  trigger), close on focus leaving the group, close on outside pointer-down.

---

## Pass 1 — Elevation sweep

Run after every section existed once.

1. **Hero — upgraded.** The first build had the photo as a right-column
   image. Replaced with a full-band treated ground plus a directional scrim
   and the column rules drawn *over* the photo (Layered Depth Composition), so
   the grid reads as page furniture rather than as decoration behind an image.
2. **Reviews — upgraded.** Aggregate was a small badge beside the cards;
   promoted to a full-width ink instrument row with an oversized display
   numeral against micro-scale labels (Large Numeral Statistic Display's
   premium note). The card grid was re-cut to 2+2+2 / 3+3 to kill the orphan.
3. **Trust badges — upgraded.** `tex-steel` added at 14% overlay so the slate
   band has material rather than being a flat fill.
4. **Why Us — upgraded.** Added the bleeding `load-calc` photo. Without it the
   section was four blurbs on flat colour, which is the exact outcome the
   richness file exists to prevent.
5. **Services — upgraded.** The marker moved from a fixed-height assumption to
   a measured one, and the panel gained a meta stamp burned into the photo
   corner. Considered Full-Photo Card Background and rejected: it belongs to
   the dark-moody family, which this page does not run in.
6. **Coverage — upgraded.** Added the `street-dusk` divider band. Left the
   cells otherwise alone; a hover fill is the right amount of interaction for
   21 place names.
7. **Story — left as is.** Already at the right ambition: a pinned photo, a
   scrub-linked spine and three paragraphs of prose. This is the page's
   deliberate quiet moment, and it sits between two of the busiest sections.
8. **Final CTA — upgraded.** Added the emergency panel with its drawn top rule
   so the block is a composition, not a headline plus two buttons.
9. **FAQ — left as is.** The numbered treatment plus the copper cross is
   already the section's ambition ceiling; a boxed-card variant would have put
   a fifth card pattern on the page.

## Pass 2 — Coherence sweep

1. **Two light bands in a row (Why Us → Services) were fighting.** Services
   moved to `--surface-sunk`, a half-tone below ivory, so the boundary reads
   as intentional rather than as one long band.
2. **Copper discipline.** Counted every use: section indices, icon fills, four
   seals, the FAQ cross, cell hovers, the story spine, and one full block at
   the CTA. Pulled copper *out* of the service index labels (they were copper
   on ivory at 14px — 3.9:1, a real contrast failure) and back to ink, with
   the accent kept for the icon and the marker.
3. **Motion load.** Removed a considered ambient drift on the CTA block: the
   section already carries an entrance and a frame draw, and stacking
   continuous background motion on top is precisely the overload this pass
   exists to catch. `useCursorGlow` was never adopted — the page has dark
   surfaces, but they are structural bands, not feature panels.
4. **Depth discipline.** Only two objects on the entire page carry a real
   shadow: the terminal panel and the review cards on hover. Everything else
   is hairlines, fills and rules. That is what keeps the widget reading as the
   one precision instrument.
5. **Contrast re-check after the palette work.** Live Copper on Warm Ivory
   measures 3.88:1, which fails body text. Three derived tokens fixed it
   rather than shipping the failure: `--accent-ink` `#8F4A1C` (4.6:1 on ivory,
   used for every small copper mark on light), `--accent-lift` `#D0813F`
   (6.0:1 on ink, used on every dark band), `--accent-block` `#A0562A`
   (4.9:1 carrying ivory, used for fills and the CTA block).

---

## Notes on fidelity

- Every headline, paragraph, review, service description, FAQ answer, footer
  line and badge label in `src/data/site.js` is marked `VERBATIM` and ships
  exactly as supplied. Typographic apostrophes are used in place of straight
  ones; no word, order or punctuation mark is otherwise changed.
- Connective microcopy written for this build: section eyebrows and H2s, form
  labels and validation strings, button labels, image `alt` text, the four
  trust-badge support lines, the reassurance line beside the widget, and the
  emergency panel's note. All are drawn from stated facts and follow the
  voice brief — no puns, no superlatives, no forced folksiness.
- A third face, **IBM Plex Mono**, is used strictly as a utility face for
  labels, indices and instrument readouts. The art-direction row for this site
  specifies monospace field labels; Fraunces and Work Sans remain the display
  and body faces exactly as briefed.

---

## Post-screenshot corrections

Everything below was found by reading the captured PNGs back and fixing what
they showed, not by re-reading the code.

1. **Every aspect-ratio image was rendering at its intrinsic pixel height.**
   The `width`/`height` attributes that reserve an image's box also map to
   presentational hints (`height: 1200px`), which silently beat
   `aspect-ratio` on any image sized by width alone. The services panel photo
   came out 353×1200. Fixed with a zero-specificity guard in `app.css`
   (`:where(img[width][height]) { height: auto }`) plus explicit `height: auto`
   on the three affected rules.
2. **The frosted nav bar was milky grey at rest.** The header is sticky and in
   flow, so at scroll 0 there is nothing behind it to frost except the ivory
   body. Now solid ink at rest — visually continuous with the hero — and the
   blur switches on once real content starts passing underneath, which is the
   only moment the technique is actually doing work.
3. **The hero's step-1 button read "Describe It Instead".** The biggest copper
   control in the widget was inviting people to skip the photo. Now always
   "Continue To Details", with the skip path demoted to a mono hint line.
4. **The hero photograph was invisible.** Brightness raised from 0.55 to 0.78,
   grayscale eased, and the horizontal scrim opened up on the right so the
   panel photo reads as ground under the terminal instead of as noise.
5. **The desktop hero had ~200px of dead space below the CTAs.** Added the
   hero footer rail — a mono service-area index pinned to the hero's bottom
   hairline — and gave the rail a zero rootMargin because it sits exactly on
   the fold line, where the project's standard "fire late enough to be seen"
   trigger would have held it invisible.
6. **The mobile index strip clipped "CONTACT" mid-word,** which the build
   brief specifically calls out as looking broken rather than scrollable.
   Retuned to 10.4px/0.02em with a 10px gap so all seven items fit at 390px,
   and widened the edge mask to 52px for narrower devices.
7. **The services marker never moved off row one.** `offsetTop` was resolving
   against the wrong ancestor — the index rows sit inside `<Reveal>` wrappers
   carrying `will-change: transform`. Now measured from bounding rects
   relative to `.sv__panel`, with a re-measure after the rows finish their
   entrance.
8. **The FAQ's open icon rotated its own box into a diamond.** Rotation moved
   onto the glyph so the square stays a square.
9. **Review cards floated their attribution mid-card.** Card rows changed to
   `auto 1fr auto` so every footer pins to the bottom edge regardless of
   quote length.
10. **The widget's name and phone inputs fell out of alignment** the moment
    one of them showed a validation note. Fields now pack to the top.
11. **The story section's heading moved into the pinned left column** with the
    photograph; the text column had been carrying the heading, the spine and
    all three paragraphs while the photo column sat two-thirds empty.
12. **Colour literals swept out of component stylesheets.** Ten translucent
    scrim and cell fills were still living in section CSS; all are now derived
    tokens. `tokens.css` is the only file in `src/` containing a colour value.
13. **Contrast fix caught in the sweep.** `--n-slate-soft` was `#5D6D77`,
    which measures 3.5:1 on Ink Black — under AA for the mono micro copy it
    was carrying (the reviews placeholder label, the footer legal lines, the
    widget hint). Raised to `#7C8C95`, 5.3:1.

**Verified from the final captures:** at 390×844 with zero scrolling the hero
shows the H1 (two lines), the subheadline (three lines), all four value
badges, the primary click-to-call, the secondary CTA, and the entire
photo-diagnosis terminal down to its status line. No horizontal overflow at
360, 390, 480, 640, 768, 900, 1024, 1200, 1440 or 1920. No console errors on
any capture.
