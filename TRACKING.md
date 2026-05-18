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
- `tab_click` — tab interactions on the standalone ACAH page
- `form_submit_click` — form submit button clicks on the standalone ACAH page
- `phone_click` — telephone link clicks

## JavaScript behavior

`/assets/js/analytics.js` listens for clicks on `[data-track]`, logs the event to the browser console, and forwards the same payload to Cloudflare Zaraz or GA4 later if either is added.

Cloudflare Web Analytics is included in `_layouts/default.html` and also in the standalone `acah.html` page.

## Test step

Open the browser console and click a tracked button. You should see:

```text
[Lumivox Tracking] cta_click { ... }
```

Cloudflare Web Analytics will capture page-level analytics. Custom button events are prepared in code and will be ready for Zaraz, GA4, or Plausible if added later.
