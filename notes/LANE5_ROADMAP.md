# Lane 5 Roadmap — Affiliate + Tracking Integration

## Lane 5 purpose

Lane 5 turns the polished Lumivox website into a measurable affiliate-ready website. The goal is not advanced analytics yet. The goal is to make sure product interest can be measured without paying for another analytics tool too early.

## Current status after this update

| Workstream | Status | Notes |
|---|---:|---|
| Product placeholder links | Done | Sleep System product buttons now point to `/go/.../` paths instead of broken placeholders |
| `/go/` product paths | Done / verify after deploy | Added a region-safe sleep tracker options page, distinct retailer-selection paths, plus smart bulbs and smart plug redirect pages |
| Cloudflare page-level tracking | Done / verify after deploy | Cloudflare beacon exists on main layout and redirect pages |
| Custom button-event analytics | Deferred | Current setup logs events in console and prepares for Zaraz/GA4/Plausible later |
| Real affiliate links | Pending account approval | Current redirect destinations are live-safe non-affiliate product/vendor pages |
| Metrics plan | Done | See `AFFILIATE_LINKS.md` and `TRACKING.md` |

## Immediate post-deployment QA

1. Visit `/sleep-system/`.
2. Click each product button:
   - View Product → Sleep Tracker
   - View Product → Smart Bulbs
   - View Product → Smart Plug
   - Bottom CTA buttons for the same three categories
3. Confirm each opens the correct `/go/.../` page.
   - For sleep trackers, confirm each retailer choice visits its own measurable `/go/.../` path before redirecting.
4. Confirm each redirects to the destination vendor/product page.
5. Open DevTools → Network and confirm `beacon.min.js` loads.
6. Review Cloudflare Web Analytics after traffic lands and look for:
   - `/sleep-system/`
   - `/go/sleep-tracker/`
   - `/go/sleep-tracker-google-store/`
   - `/go/sleep-tracker-amazon/`
   - `/go/sleep-tracker-retailers/`
   - `/go/smart-bulbs/`
   - `/go/smart-plug/`

## What to do next

### Step 1 — Deploy this update

Commit and push the updated files:

```bash
git status
git add .
git commit -m "Add affiliate redirect tracking pages"
git push origin main
```

### Step 2 — Verify live behavior

Use the live domain, not only local preview:

```text
https://lumivox.one/sleep-system/
https://lumivox.one/go/sleep-tracker/
https://lumivox.one/go/sleep-tracker-google-store/
https://lumivox.one/go/sleep-tracker-amazon/
https://lumivox.one/go/sleep-tracker-retailers/
https://lumivox.one/go/smart-bulbs/
https://lumivox.one/go/smart-plug/
```

### Step 3 — Collect 2–4 weeks of baseline data

Use the weekly review format in `AFFILIATE_LINKS.md`.

### Step 4 — Apply to affiliate programs

Start with broad programs that are easier to operationalize:

1. Amazon Associates
2. Best Buy Creator/Affiliate
3. Walmart Affiliate or Walmart Creator

Then apply to/directly approach better-fit product brands:

1. Govee
2. Wyze
3. Philips Hue
4. TP-Link/Kasa or network-based alternatives

### Step 5 — Replace redirect destinations after approval

Do not change the public Sleep System links. Update only the destination inside the matching `/go/.../index.html` file.

## Definition of Lane 5 complete

Lane 5 can be considered complete when:

- No product CTA points to a broken placeholder.
- `/go/.../` pages are live.
- Cloudflare can show product-path page views.
- The affiliate disclosure remains visible on the Sleep System page.
- A weekly metrics routine is in place.
- Approved affiliate URLs can be swapped into redirect pages without redesigning the site.
