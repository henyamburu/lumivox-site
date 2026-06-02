# Lumivox Development Log

This log should be updated whenever Codex or a contributor performs meaningful work.

## Entry Format

Use this format:

```md
## YYYY-MM-DD — Short Task Name

**Type:** Audit / Content / CSS / Tracking / Docs / Bugfix / Release

**Summary:**
- What changed.

**Files changed:**
- `path/file`

**Checks performed:**
- What was tested or reviewed.

**Risks / follow-ups:**
- Remaining concerns.
```

---

## 2026-05-30 — Codex Documentation Baseline

**Type:** Docs

**Summary:**
- Created baseline documentation for using Codex with the Lumivox website.
- Added project state, roadmap, backlog, decisions, development log, Codex instructions, testing checklist, content workflow, article template, media guidance, affiliate tracking guidance, SEO checklist, page expectations, and release checklist.

**Files changed:**
- `docs/README.md`
- `docs/PROJECT_STATE.md`
- `docs/ROADMAP.md`
- `docs/BACKLOG.md`
- `docs/DECISIONS.md`
- `docs/DEV_LOG.md`
- `docs/CODEX_INSTRUCTIONS.md`
- `docs/TESTING_CHECKLIST.md`
- `docs/CONTENT_WORKFLOW.md`
- `docs/ARTICLE_BRIEF_TEMPLATE.md`
- `docs/MEDIA_ASSET_GUIDELINES.md`
- `docs/AFFILIATE_TRACKING.md`
- `docs/SEO_CHECKLIST.md`
- `docs/PAGE_EXPECTATIONS.md`
- `docs/RELEASE_CHECKLIST.md`

**Checks performed:**
- Documentation created from known Lumivox planning context.
- No application code modified.

**Risks / follow-ups:**
- Codex still needs to audit the live repository to confirm current file structure, deployment setup, and tracking implementation.

## 2026-06-02 â€” Region-Safe Sleep Tracker Options

**Type:** Tracking / Bugfix

**Summary:**
- Replaced the automatic `/go/sleep-tracker/` Google Store redirect with a static options page.
- Added Google Store, Amazon availability, broader retailer-search, and Sleep System guide CTAs.
- Added distinct retailer-selection `/go/.../` routes for manual Cloudflare page-view counts.
- Retained unique click-tracking IDs for a later event-analytics layer.
- Updated redirect documentation and the regional-link issue record.

**Files changed:**
- `go/sleep-tracker/index.html`
- `go/sleep-tracker-google-store/index.html`
- `go/sleep-tracker-amazon/index.html`
- `go/sleep-tracker-retailers/index.html`
- `go/README.md`
- `README.md`
- `notes/AFFILIATE_LINKS.md`
- `notes/LANE5_ROADMAP.md`
- `docs/issues/REGION_SAFE_PRODUCT_LINKS.md`

**Checks performed:**
- Verified the local route renders without a timed redirect.
- Verified `noindex, nofollow`, analytics script loading, and unique tracking IDs.
- Verified each outbound retailer choice first routes through a distinct internal `/go/.../` path.
- Verified the Google Store and broader retailer-search URLs return `200`.

**Risks / follow-ups:**
- Amazon returned `503` to the automated HEAD request, consistent with bot filtering. Confirm that CTA manually in a browser before deployment.
- Verify the options page visually on mobile and desktop after deployment.

## 2026-06-02 â€” Branded 404 Page

**Type:** Bugfix / Docs

**Summary:**
- Added a branded Lumivox `404.html` page using the shared site layout.
- Added tracked recovery links to Home and the Sleep System guide.
- Updated the localhost preview server so unknown routes render the branded page with HTTP status `404`.

**Files changed:**
- `404.html`
- `assets/css/style.css`
- `tools/local-preview-server.js`
- `docs/BACKLOG.md`
- `docs/DEV_LOG.md`

**Checks performed:**
- Verified `http://127.0.0.1:4173/this-page-does-not-exist` returns HTTP `404`.
- Verified the rendered response contains the branded message, recovery links, tracking IDs, and Cloudflare beacon.

**Risks / follow-ups:**
- Verify an unknown URL returns the branded page after GitHub Pages deployment.

## 2026-06-02 â€” Article Publishing Foundation

**Type:** Content / Docs

**Summary:**
- Added a reusable nested article layout with a Guides recovery link and tracked Sleep System CTA.
- Added a public `/guides/` content hub with tracked navigation.
- Added a starter HTML article template for future guide pages.
- Extended localhost rendering to preview nested layouts and the Guides hub before deployment.

**Files changed:**
- `_layouts/article.html`
- `_templates/article-page.html`
- `guides/index.html`
- `_includes/nav.html`
- `_includes/footer.html`
- `assets/css/style.css`
- `tools/local-preview-server.js`
- `README.md`
- `docs/BACKLOG.md`
- `docs/PROJECT_STATE.md`
- `docs/DEV_LOG.md`

**Checks performed:**
- Verified `/guides/` and `/_preview/article-template/` return `200` locally.
- Verified Guides navigation, footer link, article CTAs, shared analytics, and nested layout rendering.
- Verified missing routes still return the branded `404` page.

**Risks / follow-ups:**
- Verify `/guides/` after GitHub Pages deployment.
- Publish the first full guide using the new template.
