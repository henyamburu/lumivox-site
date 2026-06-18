# Lumivox Roadmap

_Last updated: 2026-05-30_

## Roadmap Philosophy

Lumivox should grow in controlled phases. The site should not rush into affiliate monetization before it has clear pages, trustworthy content, reliable tracking, and enough engagement data to support affiliate applications or partnership conversations.

## Phase 0 — Repository and Documentation Baseline

**Goal:** Make the repository easy for Codex and human contributors to understand.

| Task | Status | Notes |
|---|---:|---|
| Add Codex docs folder | Ready to add | This folder is the baseline. |
| Audit current page structure | Pending | Codex should inspect actual files. |
| Audit analytics/tracking scripts | Pending | Confirm Cloudflare beacon and local analytics JS. |
| Audit `/go/` redirects | Pending | Verify paths and redirect behavior. |
| Identify deployment target | Pending | Confirm Cloudflare Pages, GitHub Pages, or other. |
| Update README | Pending | README should match current repo reality. |

**Completion criteria:** Codex can summarize the repo accurately without relying on chat history.

## Phase 1 — Foundation Stabilization

**Goal:** Make the existing site stable, trackable, and ready for traffic.

| Task | Priority | Notes |
|---|---:|---|
| Verify homepage layout | High | Hero, problem section, Lumivox Loop, CTAs. |
| Verify Sleep System page | High | Product stack, affiliate disclosure, video/demo, CTAs. |
| Verify About page | Medium | Clarify audience, trust, and limitations. |
| Confirm mobile navigation | High | Must work on phone. |
| Confirm Cloudflare analytics loads | High | Do not remove existing beacon. |
| Confirm CTA tracking attributes | High | Every important CTA should be trackable. |
| Confirm `/go/` product routes | High | No 403/404 on product buttons. |
| Fix obvious broken links | High | Prioritize main nav, footer, CTA, product links. |

**Completion criteria:** Main pages and product links are testable, mobile-friendly, and analytics-ready.

## Phase 2 — Content Engine Setup

**Goal:** Build a repeatable article publishing system.

| Task | Priority | Notes |
|---|---:|---|
| Create article template | High | Consistent header, intro, sections, CTAs, disclosure. |
| Create article index/hub | Medium | Helps readers navigate content cluster. |
| Add first article draft/page | High | Start with under-$250 starter setup or checklist. |
| Add internal-link pattern | High | Link articles to Sleep System, About, product pages. |
| Add SEO metadata pattern | Medium | Title, description, canonical if applicable, Open Graph. |
| Add media asset naming convention | Medium | Prevent messy image/video storage. |

**Completion criteria:** A new article can be added without reinventing structure each time.

## Phase 3 — First Content Cluster

**Goal:** Publish the first practical Lumivox content cluster.

Recommended order:

1. `Best Starter Sleep Automation Setup Under $250`
2. `Fitbit Inspire 3 vs Xiaomi Smart Band for Sleep Tracking`
3. `Govee Smart Bulbs vs Wyze Bulb Color for Evening Routines`
4. `Kasa Smart Plug Setup for Sleep Routines`
5. `How to Build a Bedroom Wind-Down Automation`
6. `What Wearable Sleep Data Can and Cannot Tell You`
7. `Beginner Smart Home Sleep System Checklist`
8. `Who Lumivox Is For — And Who It Is Not For`

**Completion criteria:** The site has enough helpful content to support traffic building and early affiliate outreach.

## Phase 4 — Affiliate Readiness

**Goal:** Prepare evidence and presentation material for affiliate program applications.

| Task | Priority | Notes |
|---|---:|---|
| Build weekly metrics log | High | Traffic, product clicks, top pages, source notes. |
| Confirm product CTA click paths | High | Track product category and product-specific clicks. |
| Add/update affiliate disclosure | High | Must be clear before monetization. |
| Prepare affiliate outreach one-pager | Medium | Summarize audience, traffic, content plan, product fit. |
| Replace placeholders with real affiliate links | Later | Only after affiliate program approval or clear user instruction. |

Suggested metric thresholds for outreach readiness:

| Readiness Level | Monthly Visits | Sleep System Views | Product Clicks | Action |
|---|---:|---:|---:|---|
| Early signal | 100+ | 30+ | 5+ | Continue content and tracking. |
| Stronger outreach | 500+ | 150+ | 25+ | Begin affiliate applications/outreach. |
| Strong proof | 1,000+ | 300+ | 50+ | Improve conversion paths and negotiate better partnerships. |

These are practical working thresholds, not fixed rules.

## Phase 5 — Media and Trust Expansion

**Goal:** Add videos, images, diagrams, and practical demonstrations that make Lumivox feel real and useful.

| Task | Priority | Notes |
|---|---:|---|
| Add YouTube embeds or links | Medium | Use existing YouTube-hosted videos. |
| Add setup diagrams | Medium | Show tracker → routine → smart home action. |
| Add product photos or neutral visuals | Medium | Avoid clutter and avoid misleading product ownership claims. |
| Add screenshots or checklist downloads | Low | Useful once traffic exists. |

Trust-page backlog:

1. Contact page.
2. About-page review and expansion.
3. Terms / Disclaimer page.
4. Privacy Policy page.
5. Affiliate Disclosure page or reusable disclosure section.

## Phase 6 — Conversion Optimization

**Goal:** Improve reader movement from articles to setup pages to product links.

| Task | Priority | Notes |
|---|---:|---|
| Review CTA hierarchy | Medium | Avoid too many competing calls to action. |
| Add comparison tables | Medium | Help readers choose without over-selling. |
| Improve product card UX | Medium | Mobile-first. |
| Add FAQ sections | Medium | Useful for SEO and trust. |
| Add email capture only if justified | Later | Avoid premature complexity. |

## Current Recommended Next Sprint

**Sprint Name:** Foundation + Content Engine Sprint

**Duration:** 1 to 2 weeks of part-time work.

**Sprint Goals:**

1. Audit current repo state.
2. Verify tracking and `/go/` redirects.
3. Stabilize homepage, Sleep System, and About pages.
4. Add article template.
5. Prepare the first content cluster backlog.
6. Add or polish one article page.
7. Update documentation after each change.

## Milestone Tracking Table

| Milestone | Owner | Status | Target | Notes |
|---|---|---:|---|---|
| Docs baseline added | Henya / Codex | Ready | Immediate | Upload this folder into repo. |
| Repo audit completed | Codex | Pending | Sprint 1 | No code edits except docs. |
| Tracking verified | Codex | Pending | Sprint 1 | Includes Cloudflare and `/go/`. |
| Mobile layout checked | Codex | Pending | Sprint 1 | Focus on nav, buttons, product cards. |
| Article template added | Codex | Pending | Sprint 1 | Use content workflow. |
| First article page added | Codex | Pending | Sprint 1 or 2 | Prefer under-$250 starter setup. |
| Metrics weekly process started | Henya / Codex | Pending | Sprint 2 | Use tracking results. |
