# Lumivox Affiliate Links and Metrics Plan

## Phase 1 decision

Use a hybrid affiliate approach:

1. Keep Amazon Associates as a broad fallback once approved.
2. Prioritize direct brand programs where they fit the Lumivox system better.
3. Route every product button through `/go/.../` so product interest is measurable before deeper analytics is added.

## Current live-safe product paths

| Category | Public website link | Current destination | Preferred affiliate path later |
|---|---|---|---|
| Sleep tracker | `/go/sleep-tracker/` | Region-safe Fitbit Inspire 3 options page | Amazon Associates or retailer/network link |
| Smart bulbs | `/go/smart-bulbs/` | Govee Smart A19 LED Bulbs product page | Govee affiliate link first, Amazon fallback |
| Smart plug | `/go/smart-plug/` | Kasa Smart EP25 product page | Amazon Associates, Best Buy/Walmart, or Kasa/TP-Link network link |

## Vendor/application targets

| Vendor/program | Why it matters | Notes to collect before applying |
|---|---|---|
| Amazon Associates | Broad catalog, fast buyer trust | Site URL, public pages, disclosure, traffic source plan |
| Govee Affiliate | Strong fit for smart lighting | Smart-bulb page traffic, smart-bulb `/go/` clicks, sleep-system positioning |
| Wyze Insiders Affiliate | Budget smart-home option | Smart-home audience fit, visitor counts, click-through rate |
| Philips Hue Affiliate | Premium lighting option | Premium buyer angle, lighting-focused content, audience quality |
| Best Buy Creator/Affiliate | Trusted electronics retailer | Tech-focused content, US traffic, product recommendation quality |
| Walmart Affiliate/Creator | Broad retail fallback | General buyer traffic and product category fit |

## Metrics to collect before vendor outreach

Track these weekly from Cloudflare Web Analytics:

| Metric | Why it matters | How to calculate/use it |
|---|---|---|
| Total visits | Shows basic traction | Cloudflare dashboard total visits |
| Unique visitors | Shows audience size | Cloudflare visitors/users metric |
| Top referrers | Shows where traffic comes from | Cloudflare referrers list |
| Sleep System page views | Shows product-page interest | Page views for `/sleep-system/` |
| Product path views | Shows buying intent | Page views for `/go/sleep-tracker/`, `/go/smart-bulbs/`, `/go/smart-plug/` |
| Sleep tracker retailer path views | Shows which retailer option readers choose | Page views for `/go/sleep-tracker-google-store/`, `/go/sleep-tracker-amazon/`, `/go/sleep-tracker-retailers/` |
| Product CTR | Shows recommendation strength | `/go/.../` views divided by `/sleep-system/` views |
| Video engagement proxy | Shows educational interest | Views/clicks around YouTube watch paths if visible in tracking console or later analytics |
| Geographic audience | Helps with US-only programs | Cloudflare country data, especially US share |

## Practical thresholds

There is no universal traffic threshold for affiliate approval. Some programs approve new but credible websites. Others care more about audience quality than raw volume.

A practical Lumivox target before serious vendor outreach:

```text
Minimum useful signal:
- 100+ monthly site visits
- 30+ monthly Sleep System page views
- 5+ product path clicks across /go/ pages

Stronger outreach position:
- 500+ monthly site visits
- 150+ monthly Sleep System page views
- 25+ product path clicks
- Clear referrers or audience source
```

Do not wait for perfect numbers before applying to broad programs such as Amazon, Walmart, or Best Buy. For direct brand negotiations, bring at least a few weeks of traffic and product-click data.

## Weekly review format

```text
Week of: YYYY-MM-DD
Total visits:
Unique visitors:
Top referrers:
/sleep-system/ views:
/go/sleep-tracker/ views:
/go/sleep-tracker-google-store/ views:
/go/sleep-tracker-amazon/ views:
/go/sleep-tracker-retailers/ views:
/go/smart-bulbs/ views:
/go/smart-plug/ views:
Best product CTR:
Notes / content changes:
```

## Important editing rule

Do not place long affiliate URLs directly in the Sleep System page. Keep the website links stable:

```text
/go/sleep-tracker/
/go/smart-bulbs/
/go/smart-plug/
```

Only update the destination inside each redirect page when a vendor approves Lumivox.
