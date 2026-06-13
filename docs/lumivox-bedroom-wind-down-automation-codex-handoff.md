# Codex Handoff: Bedroom Wind-Down Automation Page

## Page Status

**Approved for implementation with minor publish-time checks.**

The reviewed document is ready to move into the Lumivox project as a how-to support article. The article already includes the required medical disclaimer, affiliate disclosure, product safety warnings, baseline/testing guidance, troubleshooting, and key takeaways.

## Target Page

| Field | Value |
|---|---|
| Page title | How to Build a Bedroom Wind-Down Automation |
| Recommended route | `/how-to-build-bedroom-wind-down-automation/` |
| Recommended file name | `how-to-build-bedroom-wind-down-automation.html` or `how-to-build-bedroom-wind-down-automation.md` depending on current repo structure |
| Content type | How-to guide |
| Primary intent | Teach the reader how to configure a repeatable bedroom wind-down automation |
| Affiliate role | Support article that routes readers toward starter setup, tracker, bulb, and smart plug comparison pages |
| Publish status | Ready after implementation QA |

## SEO Metadata

```html
<title>How to Build a Bedroom Wind-Down Automation | Lumivox</title>
<meta name="description" content="A step-by-step guide to building a bedroom wind-down automation using smart bulbs, a sleep tracker, and a smart plug.">
<link rel="canonical" href="https://lumivox.one/how-to-build-bedroom-wind-down-automation/">
```

Suggested Open Graph:

```html
<meta property="og:title" content="How to Build a Bedroom Wind-Down Automation">
<meta property="og:description" content="A step-by-step guide to building a bedroom wind-down automation using smart bulbs, a sleep tracker, and a smart plug.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://lumivox.one/how-to-build-bedroom-wind-down-automation/">
```

## Implementation Requirements

1. Add this as a normal article/how-to page using the current Lumivox page shell.
2. Preserve the disclaimer and affiliate disclosure near the top of the page.
3. Keep the tone practical and non-medical.
4. Do not introduce sleep-treatment claims.
5. Do not say the automation will improve sleep, cure insomnia, treat sleep apnea, or diagnose sleep issues.
6. Keep product references factual and manufacturer-based.
7. Confirm product availability and pricing at publish time.
8. Convert tables into responsive HTML tables or mobile-friendly card blocks.
9. Convert the final CTA area into a clean card grid, not a long inline sentence.
10. Keep all external product links routed through the existing Lumivox `/go/` redirect pattern where applicable.

## Recommended Internal Links

Use existing slugs if already present. If exact slugs differ, map to current repo routes.

| Link Label | Intended Destination |
|---|---|
| Build the Full Lumivox Starter Setup | Starter sleep automation setup article |
| Compare Fitbit vs Xiaomi for Sleep Tracking | Sleep tracker comparison article |
| Compare Govee vs Wyze Smart Bulbs | Smart bulb comparison article |
| Set Up a Kasa Smart Plug | Kasa smart plug setup article |
| Download the Bedroom Wind-Down Checklist | Checklist/download page or lead magnet placeholder |

## CTA Layout

Use a `next-steps-grid` or equivalent card layout:

```html
<section class="next-steps" aria-labelledby="next-steps-title">
  <h2 id="next-steps-title">Where to Go Next</h2>
  <div class="next-steps-grid">
    <a class="next-step-card" href="/best-starter-sleep-automation-setup-under-250/">Build the Full Lumivox Starter Setup</a>
    <a class="next-step-card" href="/fitbit-inspire-3-vs-xiaomi-smart-band-sleep-tracking/">Compare Fitbit vs Xiaomi for Sleep Tracking</a>
    <a class="next-step-card" href="/govee-smart-bulbs-vs-wyze-bulb-color-evening-routines/">Compare Govee vs Wyze Smart Bulbs</a>
    <a class="next-step-card" href="/kasa-smart-plug-setup-for-sleep-routines/">Set Up a Kasa Smart Plug</a>
    <a class="next-step-card" href="/bedroom-wind-down-checklist/">Download the Bedroom Wind-Down Checklist</a>
  </div>
</section>
```

## Safety / Compliance Guardrails

Codex must preserve or strengthen these boundaries:

- Smart home devices are not medical devices.
- Sleep trackers provide directional personal-reference data, not medical-grade measurement.
- The article must not diagnose, treat, cure, or prevent any sleep disorder.
- The smart plug section must keep strong unattended-use warnings.
- Do not recommend automating heaters, heated blankets, cooking appliances, irons, or any device not approved for unattended operation.
- Do not exceed the rated load of the user's specific smart plug model.
- Keep "results vary" language where the article discusses outcomes.

## Structured Data Recommendation

Add `Article` schema. FAQ schema is optional, but recommended if the site already supports FAQ JSON-LD.

Suggested FAQ candidates:

1. Do I need a sleep tracker for this automation?
2. Can I use any smart bulb?
3. Is it safe to use a smart plug overnight?
4. How long should I test the routine before adjusting it?
5. What if my smart-plug device does not turn back on automatically?

## Mobile / UX Requirements

- Tables should not overflow the viewport.
- On mobile, convert schedule tables to stacked cards if the current CSS table treatment is weak.
- Keep the checklist scannable.
- Use callout boxes for:
  - general routine-building disclaimer
  - affiliate disclosure
  - smart plug safety warning
  - publish-time product availability note
- Use consistent Lumivox article spacing and typography.
- Avoid loud color blocks; this is a practical sleep routine article and should feel calm, readable, and trustworthy.

## QA Checklist

Before merge:

- [ ] Page builds without console errors.
- [ ] Route works at `/how-to-build-bedroom-wind-down-automation/`.
- [ ] Metadata and canonical URL are correct.
- [ ] All internal links resolve or have TODO comments.
- [ ] Product links use the `/go/` redirect pattern where required.
- [ ] Disclosure appears before purchase-oriented links.
- [ ] Medical disclaimer appears before instructional content.
- [ ] Tables are readable on mobile.
- [ ] Safety warnings are preserved.
- [ ] No treatment or guaranteed-result claims were introduced.
- [ ] Product availability and prices are checked before publishing.
- [ ] Lighthouse/SEO basic checks pass.
- [ ] Article is added to sitemap/navigation/index if the project uses those.

## Source Document

Original reviewed file:

`How to Build a Bedroom Wind-Down Automation.docx`

## Article Content

The companion markdown file generated with this handoff contains the article body prepared for Codex import:

`how-to-build-bedroom-wind-down-automation.md`
