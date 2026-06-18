# Lumivox Affiliate and Tracking Guide

_Last updated: 2026-05-30_

This file defines how Lumivox should handle product links, `/go/` redirects, tracking IDs, affiliate disclosures, and metrics readiness.

## Current Strategy

Lumivox is in an affiliate-readiness phase. The goal is to gather useful traffic and click evidence before aggressively applying to affiliate programs or replacing placeholders with affiliate links.

The current direction is:

1. Publish useful content.
2. Route product interest through measurable CTAs or `/go/` pages.
3. Use Cloudflare Web Analytics for initial traffic visibility.
4. Track product-click intent.
5. Use metrics later for affiliate applications or vendor outreach.

## Tracking Principles

Every important CTA should answer:

- What did the reader click?
- What page were they on?
- What category was the click about?
- What product or destination did the click represent?
- Was it a navigation click, video click, content CTA, or product CTA?

## Known Tracking Attributes

Existing work may include attributes such as:

```html
<a
  href="/go/sleep-tracker/"
  data-track="affiliate_click"
  data-track-id="sleep_product_wearable_card"
  data-category="affiliate"
  data-label="Sleep tracker product card"
>
  View Sleep Tracker Options
</a>
```

Codex must inspect the current tracking convention before adding new attributes. Preserve the existing pattern where possible.

## Recommended Tracking Naming Convention

Use readable, stable IDs.

```text
[page]_[section]_[destination-or-action]
```

Examples:

```text
home_hero_sleep-system
home_loop_start-here
sleep-system_product_fitbit-inspire-3
sleep-system_product_xiaomi-smart-band
article-under-250_product_kasa-plug
article-fitbit-vs-xiaomi_product_fitbit-inspire-3
article-govee-vs-wyze_product_govee-bulbs
footer_about
nav_sleep-system
video_home_intro-youtube
```

## CTA Categories

| Category | Use For |
|---|---|
| `navigation` | Main nav, mobile nav, footer nav. |
| `content_cta` | Buttons moving readers to article, checklist, or guide. |
| `product_click` | Product buttons or product cards. |
| `affiliate_click` | Outbound affiliate or affiliate-ready clicks. |
| `video_click` | YouTube/video links. |
| `download_click` | PDFs/checklists/downloads if added later. |

## `/go/` Redirect Strategy

Product-related CTAs should use `/go/` routes where practical.

Use two tracking layers:

1. **Current manual layer:** route outbound choices through distinct internal `/go/.../` paths. Cloudflare Web Analytics page views provide manual click counts without an event-analytics subscription.
2. **Later event layer:** keep unique `data-track-id` attributes on the original CTA elements. When an event-capable analytics service is enabled, use those IDs for direct click reporting and richer attribution.

For option pages, create a distinct measurable path for each outbound choice rather than linking directly to the vendor.

Known or planned routes:

| Route | Purpose |
|---|---|
| `/go/sleep-tracker/` | Category-level sleep tracker CTA. |
| `/go/sleep-tracker-google-store/` | Google Store selection from the sleep tracker options page. |
| `/go/sleep-tracker-amazon/` | Amazon selection from the sleep tracker options page. |
| `/go/sleep-tracker-retailers/` | Other-retailer selection from the sleep tracker options page. |
| `/go/smart-bulbs/` | Category-level smart bulb CTA. |
| `/go/smart-plug/` | Category-level smart plug CTA. |
| `/go/fitbit-inspire-3/` | Product-specific Fitbit CTA. |
| `/go/xiaomi-smart-band/` | Product-specific Xiaomi CTA. |
| `/go/govee-bulbs/` | Product-specific Govee CTA. |
| `/go/wyze-bulbs/` | Product-specific Wyze CTA. |
| `/go/kasa-plug/` | Product-specific Kasa CTA. |
| `/go/tp-link-ep25/` | Product-specific TP-Link CTA. |

Codex should verify which routes already exist before adding new ones.

## Affiliate Disclosure Guidance

If product links appear on a page, include a disclosure near the product section or in a visible page-level disclosure area.

Example language:

```text
Disclosure: Lumivox may earn a commission if you buy through certain product links. Recommendations are intended to help beginners build a practical sleep routine and should not be treated as medical advice.
```

Keep disclosure visible, plain, and not hidden only in the footer.

## Product Link Rules

- Do not replace placeholders with affiliate links unless the user gives those links or explicitly instructs Codex to do so.
- Do not invent affiliate IDs.
- Do not remove `/go/` routes unless instructed.
- Do not route a product CTA to the wrong category.
- Do not claim current pricing unless verified.
- Do not say a product is best for everyone.

## Metrics to Track Weekly

| Metric | Why It Matters |
|---|---|
| Total site visits | Shows whether traffic is building. |
| Top pages | Shows which content attracts attention. |
| Sleep System page views | Indicates interest in core offer. |
| Product CTA clicks | Indicates buyer/product intent. |
| `/go/` route hits | Confirms product-click behavior. |
| Traffic sources | Helps decide where promotion is working. |
| Bounce or engagement signal if available | Helps identify page quality issues. |

## Weekly Metrics Template

```md
# Lumivox Weekly Metrics — Week of YYYY-MM-DD

## Traffic Summary

- Total visits:
- Top traffic source:
- Top page:

## Page Performance

| Page | Views | Notes |
|---|---:|---|
| Home |  |  |
| Sleep System |  |  |
| About |  |  |
| Articles |  |  |

## Product Clicks

| Route / CTA | Clicks | Notes |
|---|---:|---|
| /go/sleep-tracker/ |  |  |
| /go/sleep-tracker-google-store/ |  |  |
| /go/sleep-tracker-amazon/ |  |  |
| /go/sleep-tracker-retailers/ |  |  |
| /go/smart-bulbs/ |  |  |
| /go/smart-plug/ |  |  |

## Observations

- What worked:
- What did not work:
- What to test next:

## Next Actions

- [ ]
- [ ]
- [ ]
```

## Affiliate Outreach Readiness

Working thresholds:

| Stage | Signal | Suggested Action |
|---|---|---|
| Initial | 100+ monthly visits and a few product clicks | Continue content and tracking. |
| Developing | 500+ monthly visits, 150+ Sleep System views, 25+ product clicks | Start affiliate applications/outreach. |
| Strong | 1,000+ monthly visits and consistent product clicks | Improve conversion and negotiate better partnerships. |

These are practical guideposts, not fixed requirements.

## Definition of Done for Tracking Work

- [ ] Product CTAs route correctly.
- [ ] `/go/` routes work.
- [ ] No 403/404 errors.
- [ ] Tracking attributes are consistent.
- [ ] Cloudflare analytics remains intact.
- [ ] Affiliate disclosure is visible where needed.
- [ ] `AFFILIATE_TRACKING.md` updated if routes or naming changed.
- [ ] `DEV_LOG.md` updated.
