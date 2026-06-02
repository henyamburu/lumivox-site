# Lumivox Decisions Log

_Last updated: 2026-05-30_

This file records decisions that should guide future Codex work. Do not reopen these decisions unless the user explicitly asks to reconsider them or the codebase proves they are outdated.

## Decision 001 — Content-Led Affiliate Readiness

**Decision:** Lumivox should build trust and traffic through useful content before aggressively monetizing with affiliate links.

**Reasoning:** Affiliate programs and vendors are easier to approach when the site can show relevant traffic, product-click intent, and a clear audience.

**Implication for Codex:** Do not turn pages into thin product-promotion pages. Product links should be supported by helpful guidance, practical context, comparisons, and clear limitations.

## Decision 002 — Starter Setup Under $250

**Decision:** The site currently uses a beginner smart sleep stack framed around "Everything you need — under $250."

**Current Stack:**

- Fitbit Inspire 3 or Xiaomi Smart Band.
- Govee Smart Bulbs or Wyze Bulbs.
- Kasa Smart Plug or TP-Link EP25.

**Implication for Codex:** Keep product recommendations practical and budget-aware. Do not add expensive devices without a clear reason.

## Decision 003 — Cloudflare Web Analytics for First Phase

**Decision:** Cloudflare Web Analytics is the first analytics layer because it is low-cost and enough to confirm traffic signals.

**Implication for Codex:** Preserve the Cloudflare analytics beacon unless the task explicitly asks to change analytics. Do not add paid analytics tools without instruction.

## Decision 004 — Use `/go/` Redirect Pages for Product Click Tracking

**Decision:** Product links should route through `/go/` redirect pages where practical, so product-click intent can be measured before or alongside affiliate links.

**Implication for Codex:** Do not bypass `/go/` routes casually. Verify redirects and update tracking documentation when routes change.

## Decision 005 — Maintain Two Tracking Layers

**Decision:** Until event-capable analytics is enabled, each meaningful outbound product or retailer choice should pass through its own internal `/go/.../` route so Cloudflare Web Analytics page views can be counted manually. Unique tracking IDs must remain on CTAs for later event-level analytics.

**Implication for Codex:** Do not link new product-option CTAs directly to external vendors when a measurable internal route is practical. Preserve both the internal route and the CTA tracking attributes.

## Decision 005 — Keep Work Lanes Separated

**Decision:** Lumivox work should be split by lane so contributors do not interfere with each other.

**Known Lanes:**

| Lane | Scope |
|---|---|
| Lane 1 | Product research. |
| Lane 2 | Article/content creation. |
| Lane 3 | Copy polish. |
| Lane 4 | CSS/layout polish. |
| Lane 5 | Affiliate and tracking integration. |

**Implication for Codex:** Stay within the requested lane. If a task discovers cross-lane issues, document them in `BACKLOG.md` instead of making broad unrelated changes.

## Decision 006 — Medical Claim Caution

**Decision:** Lumivox should avoid claiming that smart-home routines or wearables treat, cure, diagnose, or guarantee improvement for sleep disorders.

**Implication for Codex:** Use careful wording such as:

- "may help support a better evening routine"
- "can make routines easier to follow"
- "helps you observe patterns"
- "not a medical diagnosis tool"

Avoid wording such as:

- "cures insomnia"
- "fixes sleep"
- "guarantees better recovery"
- "treats sleep disorders"

## Decision 007 — Use YouTube Links for Video Media

**Decision:** Existing videos are posted on YouTube and should be used through YouTube links or embeds rather than self-hosted heavy video files unless the user decides otherwise.

**Implication for Codex:** Prefer lightweight YouTube embeds/links. Keep pages performant.

## Decision 008 — Documentation Must Carry Project Memory

**Decision:** The repository documentation should function as project memory for Codex, so the user does not have to repeat context in every chat.

**Implication for Codex:** Update docs after meaningful changes. Do not rely only on chat summaries.

## Decision 009 — Static Site Simplicity First

**Decision:** Keep the site simple unless a real need justifies extra tooling.

**Implication for Codex:** Do not introduce frameworks, build steps, dependencies, CMS tools, or complex analytics unless the user specifically requests it or the repo already uses them.

## Decision 010 — Reader Trust Comes Before Conversion

**Decision:** Lumivox should guide readers honestly, including who a product or system is not for.

**Implication for Codex:** Add limitations, practical tradeoffs, and alternatives where appropriate. Avoid hype-heavy affiliate copy.

## Decision 011 - Canonical First Article Cluster

**Decision:** Use this article list and publishing order unless the user explicitly changes it:

1. Best Starter Sleep Automation Setup Under $250.
2. Fitbit Inspire 3 vs Xiaomi Smart Band for Sleep Tracking.
3. Govee Smart Bulbs vs Wyze Bulb Color for Evening Routines.
4. Kasa Smart Plug Setup for Sleep Routines.
5. How to Build a Bedroom Wind-Down Automation.
6. What Wearable Sleep Data Can and Cannot Tell You.
7. Beginner Smart Home Sleep System Checklist.
8. Who Lumivox Is For â€” And Who It Is Not For.

**Implication for Codex:** Keep titles and order consistent across the backlog, roadmap, content workflow, guide hub, and future article pages.
