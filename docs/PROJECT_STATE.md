# Lumivox Project State

_Last updated: 2026-05-30_

## Project Summary

Lumivox is a smart sleep and smart living website. Its central idea is that wearable sleep data should not remain passive; it should help guide simple environmental routines such as evening lighting, device shutoff, bedroom automation, and better wind-down habits.

The current business direction is content-led affiliate readiness. The site should educate readers first, build trust, collect basic engagement metrics, and later support affiliate applications or direct affiliate links when the project has enough traffic and product-click evidence.

## Core Positioning

Lumivox is not positioned as a medical sleep treatment, clinical diagnosis tool, or expensive smart-home system. It is positioned as a practical beginner system for people who want:

- Better evening routines.
- Simple smart-home improvements.
- Wearable sleep tracking explained in plain language.
- A starter setup that can stay under roughly $250.
- Practical guidance without overpromising health outcomes.

## Known Site Structure

Known or planned pages include:

| Page / Path | Purpose | Current Expectation |
|---|---|---|
| `/` or `index.html` | Homepage | Introduce Lumivox, problem, loop, starter direction, CTA paths. |
| `/sleep-system/` or `sleep-system.html` | Sleep system guide | Explain the beginner setup, product stack, demo/media, and CTA links. |
| `/about/` or `about.html` | About page | Clarify who Lumivox is for, credibility, approach, and limitations. |
| `/guides/` | Guide and article hub | Organize practical beginner content and link readers into the Sleep System. |
| `/start-here/` | Beginner entry point | Planned or recommended page for first-time readers. |
| `/products/` | Product stack / recommendations | Planned or recommended product hub. |
| `/go/...` | Redirect tracking pages | Used for product-link routing and click measurement before or alongside affiliate links. |

Codex must inspect the actual repository before assuming the exact file names, folder structure, or framework. Prior work has involved static HTML/CSS/JS and Cloudflare/GitHub-style hosting, but the repository state must be verified before edits.

## Current Product Stack

The current beginner product stack is organized around the site section "Everything you need — under $250."

| Category | Product Options | Role in System |
|---|---|---|
| Sleep tracker | Fitbit Inspire 3 or Xiaomi Smart Band | Capture sleep and routine signals. |
| Smart bulbs | Govee Smart Bulbs or Wyze Bulbs | Support warm/cool evening lighting automation. |
| Smart plug | Kasa Smart Plug or TP-Link EP25 | Automate lamps, chargers, fans, or simple bedside devices. |

Product recommendations must stay practical, beginner-friendly, and cost-conscious. The site should avoid implying that a product treats insomnia, cures health issues, or guarantees better sleep.

## Tracking / Analytics State

Known tracking direction:

- Cloudflare Web Analytics is used for the low-cost first phase.
- Product CTAs should be tagged consistently.
- Redirect pages under `/go/` are used or planned to capture outbound product intent.
- Existing tracking attributes may include fields such as:
  - `data-track`
  - `tracking_id`
  - `category`
  - `label`
  - `destination`
  - `page`
  - `link_text`

Codex must not remove existing analytics scripts, tracking attributes, redirect pages, or link tagging unless explicitly instructed.

## Known Redirect / Product Paths

Known or planned redirect paths include:

- `/go/sleep-tracker/`
- `/go/sleep-tracker-google-store/`
- `/go/sleep-tracker-amazon/`
- `/go/sleep-tracker-retailers/`
- `/go/smart-bulbs/`
- `/go/smart-plug/`
- `/go/fitbit-inspire-3/`
- `/go/xiaomi-smart-band/`
- `/go/govee-bulbs/`
- `/go/wyze-bulbs/`
- `/go/kasa-plug/`
- `/go/tp-link-ep25/`

Codex should verify which of these already exist before creating, renaming, or changing them.

## Current Content Direction

The content strategy is moving toward a cluster of practical articles and guides that support the Lumivox sleep-system concept.

Important article topics already identified:

1. Best Starter Sleep Automation Setup Under $250.
2. Fitbit Inspire 3 vs Xiaomi Smart Band for Sleep Tracking.
3. Govee Smart Bulbs vs Wyze Bulb Color for Evening Routines.
4. Kasa Smart Plug Setup for Sleep Routines.
5. How to Build a Bedroom Wind-Down Automation.
6. What Wearable Sleep Data Can and Cannot Tell You.
7. Beginner Smart Home Sleep System Checklist.
8. Who Lumivox Is For — And Who It Is Not For.

Each article should strengthen the site’s authority, link naturally to the sleep-system page, and support affiliate readiness without sounding like shallow product promotion.

## Known Work Lanes

Prior work has been separated into lanes so different people can work without breaking each other’s responsibilities.

| Lane | Area | Key Boundary |
|---|---|---|
| Lane 1 | Product research | Prepare research and comparison tables. Do not edit website code. |
| Lane 2 | Article/content creation | Draft and structure articles using the content workflow. |
| Lane 3 | Copy polish | Improve wording, clarity, CTA strength, and trust. Avoid changing tracking/deployment. |
| Lane 4 | CSS/layout polish | Improve mobile spacing, product cards, video sections, typography, and contrast. Avoid changing copy, tracking, links, or deployment. |
| Lane 5 | Affiliate + tracking integration | Maintain `/go/` links, tracking IDs, affiliate placeholders, analytics verification, and metrics documentation. |

## Current Concerns / Risks

| Risk | Why It Matters | Action |
|---|---|---|
| Tracking gaps | Affiliate outreach depends on evidence of traffic and clicks. | Verify all CTAs and product buttons have tracking IDs or `/go/` routes. |
| Broken `/go/` links | Product buttons may return 403/404 or fail redirect tests. | Test every redirect path manually and document result. |
| Overclaiming sleep outcomes | Sleep content can drift into medical claims. | Use careful language and disclaimers. |
| Thin affiliate content | Product pages can look like low-value affiliate pages. | Add practical setup context, comparisons, use cases, and limitations. |
| Inconsistent page structure | Multipage static sites can drift if nav/footer are duplicated. | Prefer shared includes/components if the repo supports them; otherwise update all duplicate nav/footer copies consistently. |
| Mobile layout issues | Readers may arrive from phones. | Test mobile spacing, buttons, navigation, and product cards. |
| Unclear deployment source | Hosting/deployment may be Cloudflare Pages, GitHub Pages, or another static setup. | Inspect repo config before deployment-related changes. |

## Next Recommended Milestone

The next milestone should be **Site Foundation + Content Engine Stabilization**.

The goal is to make the website ready for consistent article publishing, tracking, and affiliate-readiness work without breaking the existing site.

Priority outcomes:

1. Confirm current site structure and deployment assumptions.
2. Confirm analytics beacon and tracking script are intact.
3. Verify all current CTAs and product links.
4. Build or confirm `/go/` redirect pages.
5. Add a consistent article template.
6. Add the first content cluster pages.
7. Create a weekly metrics routine.
8. Keep the docs updated after every Codex task.
