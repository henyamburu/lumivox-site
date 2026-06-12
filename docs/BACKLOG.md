# Lumivox Backlog

_Last updated: 2026-05-30_

## Backlog Rules

- Keep tasks small enough for Codex to complete safely.
- Each task should identify scope and files where possible.
- Do not mix content, CSS, analytics, and deployment changes unless the task explicitly requires a coordinated release.
- Move completed tasks to the completed section with a date.

## Priority Labels

| Priority | Meaning |
|---|---|
| P0 | Critical: broken site, broken tracking, broken links, or deployment issue. |
| P1 | Important: needed for next milestone. |
| P2 | Useful: improves quality or readiness. |
| P3 | Later: optional, depends on traffic or strategy. |

## Status Labels

| Status | Meaning |
|---|---|
| Open | Not started. |
| In Progress | Being worked. |
| Blocked | Needs input, account access, asset, or decision. |
| Review | Ready for human review. |
| Done | Completed and documented. |

## P0 — Critical / Stabilization

| ID | Task | Status | Notes |
|---|---|---:|---|
| LUM-P0-001 | Audit repository structure and confirm actual hosting/deployment setup. | Open | Check static files, config, package files, and deployment docs. |
| LUM-P0-002 | Verify Cloudflare Web Analytics beacon is present and not duplicated. | Open | Do not remove unless instructed. |
| LUM-P0-003 | Test all main navigation links. | Open | Desktop and mobile. |
| LUM-P0-004 | Test all product CTA links and `/go/` routes. | Open | Confirm no 403/404/timeouts. |
| LUM-P0-005 | Confirm mobile menu behavior. | Open | Must work on phones. |
| LUM-P0-006 | Identify and document any timeout issue affecting certain devices. | Open | Prior concern: site works on some devices but times out on others. |
| LUM-P0-007 | Lock down non-public and proprietary files/folders from GitHub/public site access. | Open | Identify proprietary, private, or sensitive information first. Files committed to a public GitHub repo can usually be cloned or downloaded, so decide what must be removed from the repo, moved to a private repo/storage location, ignored, or excluded from the public build. |

## P1 — Foundation Tasks

| ID | Task | Status | Notes |
|---|---|---:|---|
| LUM-P1-001 | Update root README to explain local editing, deployment, tracking, and content workflow. | Open | Coordinate with these docs. |
| LUM-P1-002 | Create or confirm `/go/` redirect documentation. | Open | Align with `AFFILIATE_TRACKING.md`. |
| LUM-P1-003 | Create article page template. | Review | Added reusable `_layouts/article.html` and `_templates/article-page.html`. Verify after deployment with the first published article. |
| LUM-P1-004 | Add article index or content hub. | Review | Added `/guides/` hub with Sleep System link and planned-content cards. Verify after GitHub Pages deployment. |
| LUM-P1-005 | Standardize product card structure. | Open | Category, product, why it fits, CTA, disclosure. |
| LUM-P1-006 | Add consistent footer links and disclosure references. | Open | Avoid duplicated mistakes across pages. |
| LUM-P1-007 | Add SEO metadata pattern. | Open | Title, description, OG basics. |
| LUM-P1-008 | Add image/media folder conventions. | Open | Prevent unorganized assets. |
| LUM-P1-009 | Add branded error page handling, starting with a custom `404.html`. | Review | Branded page and localhost handling added. Verify an unknown route returns the branded page after GitHub Pages deployment. |

## P1 — Content Cluster Tasks

| ID | Article / Content Piece | Status | Notes |
|---|---|---:|---|
| LUM-CONT-001 | Best Starter Sleep Automation Setup Under $250 | Open | Strong first article; supports product stack. |
| LUM-CONT-002 | Fitbit Inspire 3 vs Xiaomi Smart Band for Sleep Tracking | Open | Product comparison; must be updated with current facts before publishing. |
| LUM-CONT-003 | Govee Smart Bulbs vs Wyze Bulb Color for Evening Routines | Open | Product comparison; verify current product specs/prices. |
| LUM-CONT-004 | Kasa Smart Plug Setup for Sleep Routines | Open | Practical setup guide. |
| LUM-CONT-005 | How to Build a Bedroom Wind-Down Automation | Open | Step-by-step routine article. |
| LUM-CONT-006 | What Wearable Sleep Data Can and Cannot Tell You | Open | Trust-building; avoids overclaims. |
| LUM-CONT-007 | Beginner Smart Home Sleep System Checklist | Open | Useful entry and internal-link hub. |
| LUM-CONT-008 | Who Lumivox Is For — And Who It Is Not For | Open | Trust and audience-fit page/article. |

## P2 — Tracking and Metrics Tasks

| ID | Task | Status | Notes |
|---|---|---:|---|
| LUM-MET-001 | Create weekly metrics log template in repo or docs. | Open | Track visits, product clicks, top pages, sources. |
| LUM-MET-002 | Verify every CTA has consistent tracking data. | Open | Match `AFFILIATE_TRACKING.md`. |
| LUM-MET-003 | Document product-click naming convention. | Open | Product/category/page should be clear. |
| LUM-MET-005 | Prepare affiliate outreach summary template. | Open | Use after traffic data exists. |

## P2 — Visual / Media Tasks

| ID | Task | Status | Notes |
|---|---|---:|---|
| LUM-MED-001 | Audit all images and media assets. | Open | Names, file sizes, alt text, usage. |
| LUM-MED-002 | Add or improve YouTube video section layout. | Open | Use existing YouTube links. |
| LUM-MED-003 | Add simple Lumivox Loop diagram. | Open | Input → System → Output. |
| LUM-MED-004 | Improve product card visuals. | Open | Mobile-first. |
| LUM-MED-005 | Add article hero image guidelines. | Open | Avoid generic clutter. |

## P2 — SEO / Trust Tasks

| ID | Task | Status | Notes |
|---|---|---:|---|
| LUM-SEO-001 | Add FAQ sections where useful. | Open | Especially setup and product pages. |
| LUM-SEO-002 | Add clear non-medical disclaimer language. | Open | Sleep content must avoid diagnosis/treatment claims. |
| LUM-SEO-003 | Improve internal links across articles. | Open | Build topic cluster. |
| LUM-SEO-004 | Add schema only if appropriate. | Open | FAQ/article schema later; do not overcomplicate. |

## P2 - Trust and Policy Pages

| ID | Task | Status | Notes |
|---|---|---:|---|
| LUM-TRUST-001 | Add Contact page. | Open | Provide a clear way to reach Lumivox and add the link to the footer. |
| LUM-TRUST-002 | Review and expand the existing About page. | Open | Clarify audience fit, practical approach, limitations, and non-medical positioning. |
| LUM-TRUST-003 | Add Terms / Disclaimer page. | Open | Cover site-use terms, informational-only content, non-medical guidance, and product-information limitations. |
| LUM-TRUST-004 | Add Privacy Policy page. | Open | Document Cloudflare Web Analytics, future analytics considerations, and any future contact-form or email-capture data handling. |
| LUM-MET-004 | Add Affiliate Disclosure page or reusable section. | Open | Explain affiliate relationships clearly and add a footer reference before active affiliate links are introduced. |

## P3 — Later Enhancements

| ID | Task | Status | Notes |
|---|---|---:|---|
| LUM-LATER-001 | Add email capture. | Open | Only after traffic signal. |
| LUM-LATER-002 | Create downloadable checklist PDF. | Open | Useful once content is stable. |
| LUM-LATER-003 | Build comparison calculator or selector. | Open | Could help conversion later. |
| LUM-LATER-004 | Add richer analytics such as Plausible. | Open | Consider only when Cloudflare is insufficient. |
| LUM-LATER-005 | Create sponsored-placement/media kit. | Open | Later affiliate or partner phase. |

## Completed Tasks

| ID | Task | Completed Date | Notes |
|---|---|---:|---|
| LUM-DOC-001 | Create Codex documentation baseline. | 2026-05-30 | Add this docs folder to the repository. |
