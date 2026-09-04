# MMi Electrical Services Inc. — demo site

A single-page redesign concept for **MMi Electrical Services Inc.**, a
residential and commercial electrical contractor in St. Albert, Alberta.

**This is an unsolicited demo.** It is not affiliated with, commissioned by, or
approved by the business. Every page carries
`<meta name="robots" content="noindex, nofollow">`, `public/robots.txt`
disallows all crawlers, and `vercel.json` adds an `X-Robots-Tag: noindex,
nofollow` header to every response.

## Stack

- Vite 6 + React 18, no router, no state library, no backend.
- `lucide-react` for every icon.
- Fonts from Google Fonts: **Fraunces** (display, variable `opsz` / `SOFT` /
  `WONK`), **Work Sans** (body), **IBM Plex Mono** (utility labels only).
- Photography is served from `public/images/` as WebP at 1600px with an 800px
  `srcSet` entry.

## Running it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the built output
```

## Structure

```
src/
  data/site.js          all page copy, nav, services, reviews, FAQ
  lib/motion.jsx        shared motion primitives (provided)
  styles/
    tokens.css          the whole token system — the only file with colours
    base.css            reset, a11y floor, motion variants (provided)
    app.css             page scaffolding and shared patterns
  components/           one .jsx + one .css per section
DESIGN-LOG.md           the layout / visual-style / animation selection log
```

`tokens.css` is the single source of colour. No component stylesheet contains
a colour literal.

## Things a reviewer should know

- **The Google reviews are placeholder content.** All five quotes, the 4.9
  aggregate and the 180+ count are fabricated stand-ins. They are labelled as
  such inside the aggregate panel and must be replaced with real Google
  Business Profile data before this could go live.
- **The photo-diagnosis widget has no backend.** File validation, the local
  preview (`URL.createObjectURL`, revoked on unmount and on replace), the
  progress beat and the confirmation state are all client-side. Nothing is
  uploaded or transmitted.
- **No street address is published anywhere.** The source site did not publish
  one, so the site says "St. Albert, Canada" and no more. Nothing was invented.
- **Social links point at the company's own site.** No verifiable Facebook,
  Instagram or Google profile URL exists for this business, so the three
  social icons link to `mmielectrical.com` rather than an invented handle. The
  footer says so in plain text. Swap in the real profiles before launch.
- **Credentials are real but unquantified.** Master electrician oversight, WCB
  coverage, insurance and a three-year local business award all come from the
  business's own published facts. No licence number, policy number, BBB rating
  or association membership has been fabricated.
- **No maps.** The coverage section is a hand-built ruled index of place
  names — no embed, no tiles, no API key, and no drawn geography that could
  misrepresent where anything actually is.

## Accessibility and quality floor

- One `<h1>`, one `<h2>` per section, `<h3>` for sub-items; no skipped levels.
- Every section is a `<section>` with `aria-labelledby` pointing at its H2.
- FAQ and Services are real `<button>` disclosures with `aria-expanded` /
  `aria-controls`; nav dropdowns open on focus, close on Escape and on focus
  leaving the group.
- The widget's status line is an `aria-live="polite"` region; every field has
  a real `<label>`.
- `prefers-reduced-motion` is respected by every entrance, hover and idle
  effect, including the widget's scan line and status LED.
- Contrast: body text ≥ 4.5:1 and display type ≥ 3:1 throughout. The brand
  copper fails on warm ivory at small sizes, so `tokens.css` derives darker
  and lighter copper tokens for text use and keeps the raw brand copper for
  large marks and fills.
- No horizontal scroll at 390, 768, 1024, 1440 or 1920.

## Not done here

No `git init`, no commits, no deployment. GitHub and Vercel are handled
separately.
