# Lumivox Tracking Implementation

This build adds structured click-tracking attributes to major site actions.

## Attribute pattern

```html
<a
  href="..."
  data-track="cta_click"
  data-track-id="home_hero_start_first_system"
  data-category="cta"
  data-label="Home hero - Start Your First System">
  Start Your First System →
</a>
```

## Current event groups

- `nav_click` — main, mobile, and footer navigation links
- `cta_click` — primary internal calls to action
- `video_click` — YouTube watch buttons
- `affiliate_click` — outbound product/affiliate links
- `menu_click` — mobile menu toggles
- `phone_click` — telephone link clicks

## JavaScript behavior

`/assets/js/analytics.js` listens for clicks on `[data-track]`, logs the event to the browser console, and forwards the same payload to Cloudflare Zaraz or GA4 later if either is added.

Cloudflare Web Analytics is included in `_layouts/default.html`.

## Two tracking layers

### Phase 1: Cloudflare-visible internal paths

Cloudflare Web Analytics can count page views but does not currently report the custom click events emitted by `analytics.js`. Product and retailer choices therefore route through stable internal `/go/.../` paths before leaving Lumivox.

Example:

```text
/go/sleep-tracker/
  -> /go/sleep-tracker-google-store/
  -> Google Store
```

Cloudflare page views for `/go/sleep-tracker-google-store/` provide a manual count of Google Store selections. The same approach applies to Amazon and other-retailer choices.

### Phase 2: Event-level analytics

Keep the existing `data-track`, `data-track-id`, `data-category`, and `data-label` attributes in place. When Zaraz, GA4, Plausible, or another event-capable analytics service is enabled, those attributes can report exact button events without relying only on redirect-path counts.

## Test step

Open the browser console and click a tracked button. You should see:

```text
[Lumivox Tracking] cta_click { ... }
```

Cloudflare Web Analytics will capture page-level analytics, including measurable `/go/.../` path visits. Custom button events are prepared in code and will be ready for Zaraz, GA4, or Plausible if added later.
