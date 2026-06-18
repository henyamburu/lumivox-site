# Codex Handoff — Fitbit Inspire 3 vs Xiaomi Smart Band 10 Article

## Status
Approved for integration with minor implementation cautions. Use the attached HTML scaffold as the source article body.

Source document reviewed: `Fitbit Inspire 3 vs. Xiaomi Smart Band 10.docx`.

## Create / Update
- Create article page for route: `/fitbit-inspire-3-vs-xiaomi-smart-band-10/`
- Suggested file name for a static HTML site: `fitbit-inspire-3-vs-xiaomi-smart-band-10.html`
- SEO title: `Fitbit Inspire 3 vs Xiaomi Smart Band 10 for Sleep Tracking | Lumivox`
- Meta description: `A manufacturer-verified comparison of the Fitbit Inspire 3 and Xiaomi Smart Band 10 for beginner sleep tracking — covering battery life, sleep features, app experience, and how each device fits into a Lumivox Sleep System setup.`
- Visible last-reviewed line: `Last reviewed: June 2026 — re-check all prices before publishing`

## Integration Rules
1. Preserve the revised article copy and compliance positioning. Do not add claims, review scores, testimonials, medical claims, or unverified user-rating language.
2. Keep one H1 only. Use H2 for major sections and H3 for device-specific subsections.
3. Keep the affiliate disclosure near the top before any product CTA links.
4. Keep the medical disclaimer near the top and again near the final recommendation area.
5. Use internal redirect links for product CTAs:
   - Fitbit Inspire 3: `/go/fitbit-inspire-3/`
   - Xiaomi Smart Band 10: `/go/xiaomi-smart-band-10/`
6. Product redirect links must include `rel="sponsored nofollow"`. If opened in a new tab, also add `noopener`.
7. Do not use `/go/` links for normal internal article navigation. Internal article links should use clean internal routes.
8. Do not hard-code current prices beyond the date-stamped price range language already in the article. Prices must remain caveated.
9. Do not present either tracker as medical-grade or as treating/diagnosing insomnia, sleep apnea, fatigue, or any sleep disorder.
10. Convert wide tables into the existing responsive table/card pattern used by Lumivox. On mobile, avoid horizontal overflow that hides important comparison details.

## Link Map
Use these as initial targets, then verify against the repository’s existing slug map before committing.

| Link Text | Target |
|---|---|
| Fitbit Inspire 3 price check | `/go/fitbit-inspire-3/` |
| Xiaomi Smart Band 10 price check | `/go/xiaomi-smart-band-10/` |
| How to Build a Starter Sleep Automation Setup Under $250 | `/best-starter-sleep-automation-setup-under-250/` |
| Bedroom Wind-Down Automation Guide | `/bedroom-wind-down-automation-guide/` |
| Beginner Sleep Automation Checklist | `/beginner-sleep-automation-checklist/` |
| Compare Current Sleep Tracker Prices | `/sleep-tracker-prices/` |

## Required Page Components
- Standard Lumivox header/nav/footer.
- Article hero with title, subtitle, last reviewed line, and meta description context.
- Affiliate disclosure callout.
- Medical / wellness disclaimer callout.
- Product CTA cards after the introductory comparison section.
- Responsive comparison tables.
- FAQ section with FAQPage JSON-LD.
- Article JSON-LD with `dateModified: 2026-06-12`.
- References section retained at the bottom.

## CSS / Layout Guidance
Use the cleaner Lumivox editorial direction:
- Calm premium editorial style.
- Avoid neon-heavy backgrounds, excessive glow, or overly bold color blocks.
- Use restrained accent color for CTA buttons, table headers, and callout borders.
- Prioritize readability, scannability, and product comparison clarity.
- Tables should have readable row spacing, clear contrast, and mobile fallback cards if the existing CSS supports that.

Suggested classes already included in the HTML scaffold:
- `.article-page--comparison`
- `.article-page--sleep-tracker`
- `.callout--affiliate`
- `.callout--medical`
- `.callout--info`
- `.product-cta-grid`
- `.product-cta-card`
- `.table-scroll`
- `.comparison-table`

Map these to existing Lumivox classes if the repository already has preferred naming conventions.

## Source Verification Notes
The content is based on manufacturer sources only:
- Google Store Fitbit Inspire 3 specs/product overview.
- Google Health Help Center for app rebrand and sleep tracking.
- Xiaomi Global product/spec/FAQ pages for Smart Band 10.

Before publishing, re-check:
- Retail prices and affiliate availability.
- Google Health / Google Health Premium naming and app feature tiers.
- Xiaomi region availability and current Smart Band 10 model naming.
- Whether `/go/fitbit-inspire-3/` and `/go/xiaomi-smart-band-10/` route to region-safe retailers.

## Acceptance Checklist
- [ ] Page loads at `/fitbit-inspire-3-vs-xiaomi-smart-band-10/`.
- [ ] Only one H1 exists.
- [ ] Product CTA links use internal `/go/` redirects and `rel="sponsored nofollow"`.
- [ ] No direct affiliate links are exposed in the article body.
- [ ] Medical disclaimer appears before product CTAs.
- [ ] Tables are usable on mobile.
- [ ] FAQ schema validates.
- [ ] Article schema validates.
- [ ] Internal links resolve to existing Lumivox routes.
- [ ] No fake review scores, unsupported claims, or medical promises were added.
- [ ] Prices are caveated and not over-specific.

## Files Included in This Handoff
- `fitbit-inspire-3-vs-xiaomi-smart-band-10.html` — HTML page scaffold for Codex integration.
- `codex-handoff-fitbit-inspire-3-vs-xiaomi-smart-band-10.md` — this integration brief.
