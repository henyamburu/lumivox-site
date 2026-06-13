# Codex Handoff — Govee H6006 vs. Wyze Bulb Color Article

## Page to Add

**Working title:** Govee A19 Smart LED Bulbs vs. Wyze Bulb Color for Evening Routines  
**Recommended slug:** `/govee-vs-wyze-bulb-color-evening-routines/`  
**Page type:** Affiliate comparison article / Lumivox Sleep System product guide  
**Status:** Ready for Codex integration after link and pricing verification  
**Source document:** `Govee A19 Smart LED Bulbs vs. Wyze Bulb.docx`

## Integration Goal

Create a clean Lumivox article page comparing the Govee H6006 A19 Smart LED Bulb with the Wyze Bulb Color for bedroom wind-down and wake routines. The page should support affiliate conversion without overstating sleep benefits or making medical claims.

## Files Included in This Package

1. `lumivox-govee-vs-wyze-evening-routines.html`  
   - Semantic HTML scaffold for the article.
   - Includes disclosure blocks, comparison tables, FAQ accordion markup using `<details>`, CTA cards, references, and JSON-LD Article + FAQ schema.

2. `codex-handoff-govee-vs-wyze-evening-routines.md`  
   - This integration brief.

## Required Codex Actions

### 1. Add the article route/page

Add this article as a new Lumivox content page using the recommended slug:

```txt
/govee-vs-wyze-bulb-color-evening-routines/
```

Use the provided HTML as the content scaffold. Adapt classes to the existing Lumivox layout system where needed.

### 2. Preserve compliance language

Keep these blocks near the top of the article:

- Affiliate disclosure
- Medical/non-treatment disclaimer
- Price/spec verification note

Do not remove or bury these disclosures below product buttons.

### 3. Product redirect links

Use internal redirect links instead of direct external product links:

```txt
/go/govee-smart-bulb/
/go/wyze-bulb-color/
```

Add or verify the redirect targets in the existing `/go/` redirect system.

For affiliate destinations, use:

```html
rel="sponsored nofollow"
```

### 4. Verify current affiliate URLs before publishing

Before publishing, confirm:

- Govee H6006 affiliate destination is live and region-safe.
- Wyze Bulb Color affiliate destination is live and region-safe.
- Redirect links do not return 403 from common non-US regions where possible.
- If a vendor link is region-sensitive, route through an internal comparison/availability page or a more region-resilient retailer page.

### 5. Verify current pricing before publishing

The source draft includes manufacturer pricing as of review. Prices change frequently, so do not hardcode pricing into schema. The visible article should use flexible wording unless prices are manually refreshed.

Recommended visible language:

```txt
Manufacturer pricing changes frequently by retailer, pack size, and active promotion. Before publishing or refreshing this page, verify pricing from the official product pages and current affiliate destination.
```

### 6. Add internal links

Add or verify these internal links:

```txt
/bedroom-lighting-options/
/best-starter-sleep-automation-setup-under-250/
/beginner-smart-home-sleep-system-checklist/
/build-the-full-lumivox-sleep-system/
```

If the exact pages do not exist yet, either update the hrefs to the real slugs or leave TODO comments until those pages are added.

### 7. SEO metadata

Use:

```html
<title>Govee A19 Smart LED Bulbs vs. Wyze Bulb Color for Evening Routines | Lumivox</title>
<meta name="description" content="Compare the Govee H6006 Smart LED Bulb and Wyze Bulb Color for bedroom evening routines. Manufacturer-verified specifications, Lumivox Sleep System framework analysis, and practical buying guidance without medical claims.">
<link rel="canonical" href="https://lumivox.one/govee-vs-wyze-bulb-color-evening-routines/">
```

### 8. Structured data

The HTML scaffold includes:

- Article schema
- FAQPage schema

Codex should verify that the FAQ schema exactly matches the visible FAQ content after integration.

### 9. Design/layout guidance

Keep the page product-oriented and calm. Avoid over-designed sections that make the comparison feel flashy or promotional.

Recommended layout pattern:

- Hero/title
- Disclosure + important note
- Quick verdict table
- Product CTA cards
- Specs table
- Lumivox framework table
- Suggested routine table
- Final recommendation
- FAQ accordion
- References

### 10. Content rules

Do not introduce claims such as:

- “improves sleep”
- “fixes insomnia”
- “treats sleep apnea”
- “guarantees better sleep”
- “clinically proven to improve sleep”

Use safer phrasing:

- “may help create a calmer wind-down environment”
- “supports routine consistency”
- “can help make the bedroom environment more predictable”
- “individual responses will vary”

## Acceptance Checklist

Before marking complete:

- [ ] Page renders correctly on desktop and mobile.
- [ ] Tables are horizontally scrollable on small screens or converted to responsive cards.
- [ ] Affiliate disclosure appears before product CTAs.
- [ ] Medical disclaimer appears near the top.
- [ ] Product buttons use `/go/` redirect paths.
- [ ] Affiliate links use `rel="sponsored nofollow"`.
- [ ] No unsupported medical or performance claims were added.
- [ ] Product prices/specs were verified before publishing.
- [ ] FAQ accordion works and schema matches visible FAQ.
- [ ] Internal links resolve correctly or are intentionally left as TODOs.
- [ ] Page is added to relevant article index/category navigation.
- [ ] Cloudflare analytics/redirect click tracking remains intact.

## Suggested Commit Message

```txt
Add Govee vs Wyze smart bulb comparison article
```

## Suggested PR Summary

```txt
Adds a Lumivox comparison article for Govee H6006 vs Wyze Bulb Color, including affiliate disclosure, medical disclaimer, manufacturer-sourced specs, Lumivox Sleep System evaluation, CTA links, FAQ accordion, and Article/FAQ structured data.
```
