# Lumivox Sitewide Neon Redesign — Codex Implementation Brief

## Objective
Redesign the entire Lumivox website using the uploaded `lumivox_neon_homepage_v2.html` page as the visual direction and design-system seed.

The goal is not to paste the sample page into every route. The goal is to convert its style into a reusable, maintainable sitewide design system that can be applied consistently across the homepage, article pages, comparison pages, guide pages, redirect pages, compliance pages, contact pages, and future landing pages.

## Source Design Direction
Use the provided sample page as the primary reference for:

- Dark neon gradient background
- Glassmorphism cards
- Soft blurred glow elements
- Sora headings and Inter body copy
- Blue, cyan, violet, and pink accent palette
- Gradient headings and CTA buttons
- Rounded card layout
- Compact modern spacing
- Smart-home / sleep-tech / wearable positioning

## Important Production Notes
The sample page is a visual prototype. Refactor it before production use.

Do not keep the site as a single inline HTML/CSS block. Convert the styling into global reusable CSS variables, layout utilities, and components.

Avoid unsupported or fragile patterns:

- Replace inline glow styles with reusable utility classes.
- Replace `<button>` elements used for navigation with accessible `<a>` links.
- Do not use fake testimonials or brand logos unless approved.
- Do not show color swatches on production pages.
- Ensure links have `href` attributes.
- Ensure icons are either loaded through an existing icon dependency or replaced with inline SVG / text-safe fallbacks.
- Preserve affiliate disclosure, privacy, terms, and disclaimer visibility.
- Maintain region-safe product link behavior through `/go/` redirect pages.

## Design Tokens
Create or update a global stylesheet, for example:

- `assets/css/styles.css`
- `src/styles.css`
- or the repo's existing primary CSS file

Add the following design tokens:

```css
:root {
  --lv-bg-900: #0A0E1A;
  --lv-bg-800: #121838;
  --lv-bg-700: #1A1640;
  --lv-bg-600: #2A1438;

  --lv-text: #F5F7FF;
  --lv-text-soft: #C9CEFF;
  --lv-muted: #B3B9E6;
  --lv-muted-2: #9AA3C7;

  --lv-blue: #2D6BFF;
  --lv-cyan: #5CD0FF;
  --lv-violet: #7B5CFF;
  --lv-pink: #FF5C8A;

  --lv-surface: rgba(255,255,255,0.05);
  --lv-surface-strong: rgba(255,255,255,0.08);
  --lv-border: rgba(123,92,255,0.25);
  --lv-border-strong: rgba(255,92,138,0.30);

  --lv-radius-sm: 10px;
  --lv-radius-md: 14px;
  --lv-radius-lg: 16px;
  --lv-radius-xl: 24px;

  --lv-shadow-card: 0 0 24px rgba(123,92,255,0.08);
  --lv-shadow-cta: 0 0 30px rgba(123,92,255,0.40);

  --lv-gradient-bg: linear-gradient(160deg,#0A0E1A 0%,#121838 45%,#1A1640 75%,#2A1438 100%);
  --lv-gradient-brand: linear-gradient(90deg,#2D6BFF,#7B5CFF,#5CD0FF,#FF5C8A);
  --lv-gradient-cta: linear-gradient(90deg,#2D6BFF,#7B5CFF,#FF5C8A);
  --lv-gradient-heading: linear-gradient(90deg,#7B5CFF 0%,#2D6BFF 35%,#5CD0FF 60%,#FF5C8A 100%);
}
```

## Typography
Use:

- Headings: Sora
- Body: Inter

Implementation options:

1. If the project already loads fonts globally, update the global font imports there.
2. If using plain HTML, add font links in the shared `<head>` partial/template.
3. If performance is a concern, use `font-display: swap` or local fallback stacks.

Recommended CSS:

```css
body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--lv-gradient-bg);
  color: var(--lv-text);
}

h1, h2, h3, h4, .lv-heading-font {
  font-family: 'Sora', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

## Global Layout Rules
Apply the redesign to the entire site, not only the homepage.

Use a shared shell:

```html
<body class="lv-site">
  <header class="lv-header">...</header>
  <main class="lv-main">...</main>
  <footer class="lv-footer">...</footer>
</body>
```

Recommended structure:

- Full-page dark gradient background.
- Main content constrained with `max-width: 1120px` or `1200px`.
- Page sections with vertical rhythm: 56–80px desktop, 40–56px mobile.
- Cards use translucent glass backgrounds, neon borders, and subtle shadows.
- All CTAs should use the same `.lv-btn`, `.lv-btn-primary`, `.lv-btn-ghost` classes.
- Article pages should remain readable. Do not overuse gradient text inside long-form body content.

## Core Components to Create

### 1. Header / Navigation
Create a reusable header matching the neon style.

Requirements:

- Lumivox brand/logo text on left.
- Navigation links:
  - Home
  - Guides
  - Reviews
  - Comparisons
  - Sleep Tech
  - Wearables
  - Home Automation
  - About
- CTA on right: `Start with the checklist` or `Explore guides`.
- Mobile menu support.
- Sticky or semi-sticky header is acceptable, but avoid blocking content.
- Use glass background and border:

```css
.lv-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(10,14,26,0.78);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--lv-border);
}
```

### 2. Hero Component
Create a reusable hero block for homepage and page headers.

Variants:

- `lv-hero--home`
- `lv-hero--article`
- `lv-hero--category`
- `lv-hero--legal`

Hero should support:

- Badge label
- H1 gradient headline
- Intro paragraph
- Primary CTA
- Secondary CTA
- Optional trust/disclosure note
- Optional glow decorations

### 3. Badge / Pill
Reusable badge style:

```css
.lv-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(123,92,255,0.3);
  color: var(--lv-text-soft);
}
```

### 4. Buttons
Use anchors for navigation:

```html
<a class="lv-btn lv-btn-primary" href="/guides/">Explore guides</a>
<a class="lv-btn lv-btn-ghost" href="/best-starter-sleep-automation-setup-under-250/">Start under $250</a>
```

Rules:

- Do not use empty buttons.
- Ensure focus states are visible.
- Use meaningful labels.

### 5. Cards
Create reusable card classes:

- `.lv-card`
- `.lv-card-feature`
- `.lv-card-article`
- `.lv-card-product`
- `.lv-card-warning`
- `.lv-card-disclosure`

Every card should support:

- Optional icon area
- H3 heading
- Summary text
- CTA link
- Optional badge/category

### 6. Grid System
Use responsive CSS grid:

```css
.lv-grid {
  display: grid;
  gap: 1rem;
}

.lv-grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 800px) {
  .lv-grid-3 {
    grid-template-columns: 1fr;
  }
}
```

### 7. Glow Utilities
Replace inline glow styles with reusable utilities:

```css
.lv-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.45;
  pointer-events: none;
}

.lv-glow-blue { background: var(--lv-blue); }
.lv-glow-cyan { background: var(--lv-cyan); }
.lv-glow-violet { background: var(--lv-violet); }
.lv-glow-pink { background: var(--lv-pink); }
```

Use glows sparingly. They should improve atmosphere, not reduce readability.

## Homepage Redesign
Rebuild the homepage using the sample page as the visual foundation.

Recommended homepage sections:

1. Hero
   - Badge: `Smart living, sleep tech, and home automation`
   - H1: `Build a calmer, smarter evening routine`
   - Subcopy: explain Lumivox as a practical guide site for sleep tech, wearables, smart lighting, and beginner automation.
   - CTA 1: `Explore starter guides`
   - CTA 2: `View setup checklist`

2. Three Pillars
   - Sleep technology
   - Wearables
   - Home automation

3. Starter Path
   - Step 1: Pick a sleep tracker
   - Step 2: Add smart lighting
   - Step 3: Automate wind-down routines
   - Step 4: Review data carefully

4. Featured Guides
   - Best starter sleep automation setup under $250
   - Beginner smart home sleep system checklist
   - What wearable sleep data can and cannot tell you
   - Kasa smart plug setup for sleep routines

5. Comparison Hub
   - Fitbit Inspire 3 vs Xiaomi Smart Band
   - Govee Smart Bulbs vs Wyze Bulb Color

6. Disclosure Strip
   - Include clear affiliate disclosure language.
   - Example: `Lumivox may earn a commission when readers use qualifying links. Our recommendations are educational and should not replace medical advice.`

7. Footer
   - Guides
   - Comparisons
   - Disclosure
   - Privacy
   - Terms
   - Contact

## Article Page Redesign
Apply the same design language, but preserve readability.

Article pages should include:

- Neon page hero with article title, category, updated date, and short summary.
- Affiliate / medical disclaimer box near top where appropriate.
- Table of contents card for long articles.
- Article body with readable max-width: 720–780px.
- Product cards styled as glass cards.
- CTA cards between major sections.
- Related articles section at bottom.
- Previous / next navigation if available.

Recommended article content styles:

```css
.lv-article {
  max-width: 780px;
  margin: 0 auto;
  line-height: 1.8;
  color: var(--lv-muted);
}

.lv-article h2,
.lv-article h3 {
  color: var(--lv-text);
  margin-top: 2.4rem;
}

.lv-article p,
.lv-article li {
  font-size: 1rem;
}

.lv-article a {
  color: var(--lv-cyan);
}
```

Avoid applying gradient text to every H2 inside articles. Use gradient only for hero and major section headers.

## Comparison Page Redesign
For comparison articles, create reusable comparison components:

- Summary verdict card
- Side-by-side comparison table
- Best for / not best for cards
- Product link buttons
- Region-safe link warning if needed
- Affiliate disclosure near product buttons

Comparison table style:

- Dark translucent background
- High-contrast borders
- Mobile scroll wrapper
- Clear labels
- Avoid tiny text on mobile

## Guide / Checklist Page Redesign
For checklist pages, use:

- Large hero
- Step cards
- Checklist blocks
- Estimated cost cards
- Beginner warning callouts
- `Do this first` / `Avoid this mistake` blocks

## Redirect / `/go/` Pages
Keep `/go/` pages functional and lightweight.

Requirements:

- Maintain tracking behavior.
- Use a small branded redirect screen if users briefly land there.
- Add fallback links if vendor blocks access by region.
- Include a short note when appropriate:
  - `Some vendor pages may vary by region. If this link does not open, search for the product name in your local retailer.`

## Compliance / Legal Pages
Apply the new visual shell, but keep legal pages sober and readable.

Rules:

- Do not use aggressive marketing copy on legal pages.
- Use clear headings, effective dates, contact links, and plain language.
- Keep content max-width around 800px.
- Add a subtle legal-page hero, not a loud sales hero.

Pages likely affected:

- Privacy Policy
- Terms of Use
- Affiliate Disclosure
- Disclaimer
- Contact

## Footer Redesign
Create a sitewide footer using the neon style.

Footer columns:

1. Brand
   - Lumivox
   - Smart living, sleep tech, and practical home automation guides.

2. Explore
   - Buyer guides
   - Reviews
   - Comparisons
   - Checklists

3. Categories
   - Sleep technology
   - Wearables
   - Smart lighting
   - Home automation

4. Company / Legal
   - About
   - Contact
   - Privacy
   - Terms
   - Affiliate disclosure
   - Disclaimer

Include a short affiliate disclosure in the footer.

## Accessibility Requirements
Codex must verify:

- Text contrast is acceptable against the dark gradient background.
- Links and buttons have visible focus states.
- Navigation is keyboard-accessible.
- Mobile menu can be opened and closed by keyboard.
- Icons are decorative unless meaningful.
- Decorative icons use `aria-hidden="true"`.
- Images have meaningful `alt` text.
- No text is represented only as an image.
- Body text remains readable on mobile.

## SEO Requirements
Do not break the existing SEO structure.

Preserve or improve:

- Page titles
- Meta descriptions
- Canonical tags
- Open Graph tags
- Existing internal links
- JSON-LD schema where applicable
- Sitemap and robots rules
- Existing article slugs
- Existing `/go/` redirect slugs

Add or verify:

- Consistent internal linking from homepage to core guides.
- Article cards include descriptive anchor text.
- Footer includes important evergreen pages.
- No orphaned articles after redesign.

## Performance Requirements
The design uses effects that can become heavy. Implement carefully.

Rules:

- Limit blur/glow elements per page.
- Avoid excessive `backdrop-filter` on deeply nested elements.
- Do not animate large blurred elements unless intentionally approved.
- Use compressed images.
- Lazy-load non-critical images.
- Keep CSS centralized and avoid duplicate inline styles.
- Use `prefers-reduced-motion` if adding animations.

Example:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

## Affiliate / Medical Disclaimer Requirements
Because Lumivox discusses sleep, wearables, routines, and product recommendations, preserve careful language.

Sitewide rules:

- Do not imply Lumivox diagnoses, treats, cures, or prevents sleep disorders.
- Do not overstate wearable accuracy.
- Do not present affiliate products as guaranteed outcomes.
- Keep affiliate disclosure visible near buying links.
- Keep medical disclaimer visible on sleep-related pages.

Recommended reusable disclaimer card:

```html
<aside class="lv-card lv-card-disclosure">
  <strong>Disclosure:</strong> Lumivox may earn from qualifying links. Our guides are educational and do not replace medical advice. Sleep and wearable data should be interpreted carefully.
</aside>
```

## Files to Review / Modify
Codex should inspect the repository and identify the real paths before editing. Likely targets may include:

- Homepage HTML/template
- Shared layout/header/footer
- Global CSS
- Article templates
- Comparison templates
- `/go/` redirect pages
- Privacy / Terms / Disclosure pages
- Sitemap / metadata config if links change

Do not assume framework. First inspect repo structure, then apply the redesign to the actual files.

## Implementation Sequence

### Phase 1 — Audit
1. Identify the site framework or static structure.
2. List all current pages/routes.
3. Identify shared header/footer/layout files.
4. Identify global CSS entry point.
5. Identify article templates or duplicated article HTML.
6. Identify redirect pages and compliance pages.

### Phase 2 — Create Design System
1. Add design tokens.
2. Add typography rules.
3. Add layout utilities.
4. Add button components.
5. Add card components.
6. Add grid utilities.
7. Add hero variants.
8. Add disclosure/callout components.
9. Add responsive rules.

### Phase 3 — Apply to Sitewide Layout
1. Replace old header with neon glass header.
2. Replace old footer with neon footer.
3. Apply dark gradient body shell.
4. Ensure all pages still load correctly.
5. Confirm no route breaks.

### Phase 4 — Redesign Homepage
1. Rebuild homepage using the new components.
2. Preserve core site messaging and internal links.
3. Replace placeholder proof/testimonial areas with approved content only.
4. Add featured guide cards.
5. Add disclosure strip.

### Phase 5 — Redesign Content Pages
1. Apply article hero layout.
2. Style body content and headings.
3. Style product/CTA/comparison cards.
4. Add related article sections where feasible.
5. Preserve article copy unless explicitly improving layout or compliance wording.

### Phase 6 — Redesign Legal / Contact Pages
1. Apply sober legal-page shell.
2. Keep legal content readable.
3. Ensure disclosure links are easy to find.

### Phase 7 — QA
1. Test desktop width.
2. Test tablet width.
3. Test mobile width.
4. Check all nav links.
5. Check all article links.
6. Check all `/go/` links.
7. Check Lighthouse accessibility basics.
8. Check console errors.
9. Check missing icon/font dependencies.
10. Verify no fake claims, fake logos, or fake testimonials are shown.

## Acceptance Criteria
The redesign is complete when:

- Every public page uses the new Lumivox neon design system.
- Header and footer are consistent across the site.
- Homepage reflects the new smart-living positioning.
- Article pages remain readable and professional.
- Affiliate and medical disclaimers remain visible and accurate.
- Product links and `/go/` redirects still work.
- Existing SEO metadata and slugs are preserved.
- Mobile layout is polished and usable.
- No broken links or console errors are introduced.
- CSS is reusable and not duplicated page-by-page.
- Placeholder logos/testimonials/color swatches from the sample are removed or replaced with approved content.

## Suggested Git Workflow
Before editing:

```bash
git status
git checkout -b redesign/lumivox-neon-sitewide
```

After changes:

```bash
git status
git diff --stat
npm run build
npm run test
```

If the project does not use npm, run the appropriate local build/static validation command available in the repo.

Commit message suggestion:

```bash
git add .
git commit -m "Redesign Lumivox site with neon design system"
```

## Final Note for Codex
Use the uploaded prototype as the visual reference, but implement the design as a clean reusable system. Prioritize maintainability, readability, compliance, and conversion clarity over purely decorative effects.
