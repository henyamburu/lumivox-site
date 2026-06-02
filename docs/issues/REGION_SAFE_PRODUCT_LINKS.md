# Issue: Region-Safe Product Links for Lumivox `/go/` Routes

## Status

Implemented locally / Verify after deployment

## Summary

Some Lumivox outbound product links may fail for visitors outside supported vendor regions. The immediate example is:

```text
https://lumivox.one/go/sleep-tracker/
```

This route currently points users toward the Google Store Fitbit Inspire 3 product page:

```text
https://store.google.com/product/fitbit_inspire_3?hl=en-US
```

The Google Store product page may return a **403 error**, unavailable page, or region-blocked experience for visitors outside supported Google Store regions, such as Kenya.

## Problem

Lumivox is intended to serve a broader audience than only U.S. visitors. A direct vendor link that works in the U.S. may fail in unsupported regions.

This creates several problems:

* Poor user experience for international visitors.
* Lost product-click opportunities.
* Weak affiliate-readiness because users may hit blocked vendor pages.
* Inaccurate performance assumptions if Cloudflare shows route clicks but users fail after leaving Lumivox.
* Risk of repeating the same issue across future product links.

## Known Example

### Affected Route

```text
/go/sleep-tracker/
```

### Current Intended Destination

```text
https://store.google.com/product/fitbit_inspire_3?hl=en-US
```

### Product

```text
Fitbit Inspire 3
```

### Region Issue

Google Store availability varies by country. Kenya may not be supported for the Fitbit Inspire 3 Google Store destination.

## Desired Fix

Convert `/go/sleep-tracker/` from a simple outbound redirect into a **region-safe product option page**.

Instead of immediately sending all users to Google Store, the page should present multiple buying/decision options.

## Recommended Page Behavior

The `/go/sleep-tracker/` page should:

1. Keep the visitor on Lumivox first.
2. Explain that availability varies by country.
3. Offer the Google Store link as one option.
4. Offer fallback retailer/search options.
5. Link back to the related comparison or buying guide.
6. Preserve tracking attributes for analytics.
7. Use affiliate-safe disclosure wording.
8. Use `noindex` so the page does not become thin indexed content.

## Recommended User-Facing Copy

```text
Fitbit Inspire 3 availability varies by country. If Google Store does not open in your region, use one of the alternative retailer options below or read the comparison guide before buying.
```

## Proposed CTA Structure

### Primary Page Heading

```text
Sleep Tracker Options
```

### CTA 1: Google Store

```text
Continue to Google Store
```

Purpose:

```text
For visitors in supported Google Store countries.
```

Tracking attribute:

```html
data-track-id="sleep_tracker_google_store"
```

### CTA 2: Amazon / Retailer Fallback

```text
Check Amazon Availability
```

Purpose:

```text
For users whose region does not support Google Store access.
```

Tracking attribute:

```html
data-track-id="sleep_tracker_amazon_search"
```

### CTA 3: Internal Comparison Guide

```text
Read the Comparison Guide
```

Purpose:

```text
For visitors who want to compare Fitbit Inspire 3 against another starter tracker before buying.
```

Tracking attribute:

```html
data-track-id="sleep_tracker_return_to_guide"
```

## Suggested Technical Implementation

Update or replace:

```text
/go/sleep-tracker/index.html
```

with a static product option page.

Do not implement complex geo-detection in this phase unless already available.

Recommended approach for this sprint:

```text
Simple static fallback page > automatic geo-routing
```

Reason:

```text
A static fallback page is faster, cheaper, easier to maintain, and safer for early-stage affiliate validation.
```

## SEO Requirement

Add:

```html
<meta name="robots" content="noindex, nofollow">
```

Reason:

```text
This is a utility/redirect-helper page, not a content article. It should support tracking and user routing without being indexed as thin content.
```

## Affiliate Disclosure Requirement

Add a short disclosure near the bottom of the page:

```text
Lumivox may earn a commission from qualifying purchases when approved affiliate links are used. Product availability, price, and shipping options can vary by country and retailer.
```

## Acceptance Criteria

This issue is complete when:

* `/go/sleep-tracker/` no longer auto-sends all users directly to Google Store.
* The page clearly explains that product availability varies by country.
* The page includes at least one fallback option for users outside supported Google Store regions.
* The page includes a link to the related comparison or buying guide.
* CTA elements include tracking attributes.
* The page includes an affiliate disclosure.
* The page uses `noindex, nofollow`.
* The design visually matches the current Lumivox brand style.
* The route works on mobile and desktop.
* The page does not introduce broken links.
* Cloudflare analytics can still capture visits to `/go/sleep-tracker/`.

## Future Enhancement

Vendor-specific click routes implemented:

```text
/go/sleep-tracker/
    Product option page

/go/sleep-tracker-google-store/
    Google Store outbound route

/go/sleep-tracker-amazon/
    Amazon outbound route

/go/sleep-tracker-retailers/
    Xiaomi or alternative tracker route
```

This makes Cloudflare analytics cleaner by separating:

* Product interest
* Google Store clicks
* Amazon clicks
* Alternative tracker clicks

## Notes for Codex

Implemented as a static product-options page without geo-detection. The page routes Google Store, Amazon, and broader retailer-search choices through distinct internal `/go/.../` paths before leaving Lumivox. This preserves manual Cloudflare page-view counts today while retaining CTA click tracking through `/assets/js/analytics.js` for a later event-analytics layer.

Verify the route on mobile and desktop after deployment.
