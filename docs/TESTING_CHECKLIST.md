# Lumivox Testing Checklist

_Last updated: 2026-05-30_

Use this checklist before accepting changes to the Lumivox website.

## 1. Basic Page Checks

For every changed page:

- [ ] Page loads without console errors.
- [ ] Page title is correct.
- [ ] Main heading is visible and clear.
- [ ] Navigation works.
- [ ] Footer links work.
- [ ] Primary CTA works.
- [ ] No obvious spelling or placeholder text remains.
- [ ] Page is readable on desktop.
- [ ] Page is readable on mobile.

## 2. Navigation Checks

- [ ] Logo/home link works.
- [ ] Home link works.
- [ ] Sleep System link works.
- [ ] About link works.
- [ ] Start Here link works if present.
- [ ] Products link works if present.
- [ ] Article/content hub link works if present.
- [ ] Mobile menu opens.
- [ ] Mobile menu closes.
- [ ] Mobile menu links navigate correctly.

## 3. CTA Checks

For each CTA button or major link:

- [ ] Link destination is correct.
- [ ] Button text matches destination intent.
- [ ] Tracking attributes are present if applicable.
- [ ] CTA works on desktop.
- [ ] CTA works on mobile.
- [ ] CTA is not hidden behind layout elements.
- [ ] CTA is not duplicated in a confusing way.

## 4. Product Link and `/go/` Redirect Checks

For every product-related link:

- [ ] Link routes through the intended `/go/` page if required.
- [ ] `/go/` page exists.
- [ ] Redirect destination is correct.
- [ ] No 403 error.
- [ ] No 404 error.
- [ ] No redirect loop.
- [ ] Link opens as intended.
- [ ] Affiliate disclosure is visible near product recommendations or on the relevant page.
- [ ] Product name matches the product being linked.

Known route groups to verify when present:

- [ ] `/go/sleep-tracker/`
- [ ] `/go/sleep-tracker-google-store/`
- [ ] `/go/sleep-tracker-amazon/`
- [ ] `/go/sleep-tracker-retailers/`
- [ ] `/go/smart-bulbs/`
- [ ] `/go/smart-plug/`
- [ ] `/go/fitbit-inspire-3/`
- [ ] `/go/xiaomi-smart-band/`
- [ ] `/go/govee-bulbs/`
- [ ] `/go/wyze-bulbs/`
- [ ] `/go/kasa-plug/`
- [ ] `/go/tp-link-ep25/`

## 5. Analytics / Tracking Checks

- [ ] Cloudflare Web Analytics beacon is present if it was present before.
- [ ] Analytics script is not duplicated.
- [ ] Local tracking JS file is still referenced if the repo uses one.
- [ ] Important CTAs have tracking attributes.
- [ ] Product CTAs include useful product/category/page labels.
- [ ] Navigation links are tracked if that is the existing convention.
- [ ] YouTube/video buttons are tracked if that is the existing convention.
- [ ] Footer links are tracked if that is the existing convention.

## 6. Content Quality Checks

- [ ] Content answers a clear reader intent.
- [ ] Article has a clear introduction.
- [ ] Article has practical steps or useful comparison points.
- [ ] Article links to relevant Lumivox pages.
- [ ] Article avoids medical overclaims.
- [ ] Article avoids shallow affiliate language.
- [ ] Article includes product limitations or tradeoffs where relevant.
- [ ] Affiliate disclosure appears when product links are included.
- [ ] No unsupported claims about product specs, price, compatibility, or availability.

## 7. SEO Checks

- [ ] Unique page title.
- [ ] Meta description present where the site supports it.
- [ ] One primary H1.
- [ ] H2/H3 structure is logical.
- [ ] Internal links use descriptive anchor text.
- [ ] Images have useful alt text.
- [ ] Page URL/slug is readable.
- [ ] No duplicate placeholder metadata.
- [ ] Open Graph metadata is present if the site uses it.

## 8. Media / Image Checks

- [ ] Image file names are descriptive.
- [ ] Image sizes are reasonable for web use.
- [ ] Alt text is present.
- [ ] Images are not misleading.
- [ ] Product images do not imply ownership or endorsement unless true.
- [ ] YouTube embeds are responsive.
- [ ] Media sections do not harm mobile layout.

## 9. Mobile Layout Checks

Test at common widths:

- [ ] 375px width.
- [ ] 390px width.
- [ ] 414px width.
- [ ] 768px width.
- [ ] Desktop width.

Check:

- [ ] No horizontal scrolling.
- [ ] Buttons are easy to tap.
- [ ] Product cards stack cleanly.
- [ ] Text line length is comfortable.
- [ ] Hero section does not consume too much vertical space.
- [ ] Video/media blocks do not overflow.
- [ ] Footer is readable.

## 10. Performance Checks

- [ ] No unnecessarily large images.
- [ ] No heavy self-hosted video unless intentionally added.
- [ ] CSS/JS changes are minimal and relevant.
- [ ] Page loads acceptably on mobile connection.
- [ ] No unused external scripts added.

## 11. Accessibility Checks

- [ ] Buttons and links have readable text.
- [ ] Color contrast is acceptable.
- [ ] Focus states are not removed.
- [ ] Images have alt text when meaningful.
- [ ] Decorative images use empty alt text if appropriate.
- [ ] Form fields have labels if forms exist.
- [ ] Links make sense out of context.

## 12. Release Readiness

Before deploying or merging:

- [ ] Changed files reviewed.
- [ ] No unrelated formatting churn.
- [ ] No accidental removal of analytics/tracking.
- [ ] No accidental affiliate URL changes.
- [ ] No broken main links.
- [ ] `DEV_LOG.md` updated.
- [ ] `BACKLOG.md` updated if tasks were completed or discovered.
- [ ] `PROJECT_STATE.md` updated if project structure changed.
