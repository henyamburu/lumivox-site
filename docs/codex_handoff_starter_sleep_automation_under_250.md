# Codex Handoff — Starter Sleep Automation Setup Under $250

## Status

**Ready for Codex integration with minor implementation cautions.**

The article content has been tightened and is suitable for a Lumivox beginner guide. Keep the compliance and safety language intact.

## Recommended route

Use one of these, depending on the existing Lumivox routing pattern:

- Preferred: `/guides/starter-sleep-automation-under-250/`
- Acceptable: `/starter-sleep-automation-under-250/`

## Page metadata

```txt
Title: How to Build a Starter Sleep Automation Setup Under $250
Meta description: A beginner-friendly guide to building a smart bedroom sleep routine using three affordable device categories — sleep trackers, smart bulbs, and smart plugs — with manufacturer-verified specifications and a sample automation schedule.
Primary keyword: starter sleep automation setup under $250
Secondary keywords: smart bedroom sleep routine, sleep automation setup, smart bulbs for sleep, sleep tracker comparison, smart plug bedroom automation
```

## Files in this package

- `starter-sleep-automation-under-250.html` — article HTML partial/page body
- `codex_handoff_starter_sleep_automation_under_250.md` — this handoff document
- `starter_sleep_automation_link_map.json` — redirect and source link map

## Implementation rules

1. **Use only one `<h1>`** on the page.
2. **Keep disclosures visible above all product CTAs.**
3. **Do not convert the medical disclaimer into small footer text.**
4. **Use Lumivox `/go/` redirect links for product/affiliate CTAs.**
5. **Do not send product CTAs directly to Google Store, Xiaomi, Govee, Wyze, Amazon, or TP-Link from the article body.**
6. **Use manufacturer links only in the References section.**
7. **Product links should be trackable and marked as affiliate/sponsored where the current codebase supports it.**
8. **Keep the smart plug safety section intact.**
9. **Keep tables responsive on mobile.**
10. **Use existing Lumivox article layout classes if available; map the included classes rather than adding a completely separate CSS system.**

## Affiliate / redirect link map

| Product | Article CTA path | Notes |
|---|---|---|
| Fitbit Inspire 3 | `/go/fitbit-inspire-3/` | If existing route is `/go/sleep-tracker/`, create an alias or map internally. |
| Xiaomi Smart Band 9 | `/go/xiaomi-smart-band-9/` | Use geo-safe vendor or retailer fallback where direct vendor access is unreliable. |
| Govee H6008 | `/go/govee-h6008/` | Confirm exact SKU before final affiliate mapping. |
| Wyze Bulb Color | `/go/wyze-bulb-color/` | Confirm availability before final affiliate mapping. |
| Kasa EP10 | `/go/kasa-ep10/` | Budget smart plug CTA. |
| Kasa EP25 | `/go/kasa-ep25/` | Energy monitoring/HomeKit smart plug CTA. |

## Redirect page behavior

For `/go/` redirect routes:

- Track click event.
- Redirect to the selected affiliate/vendor URL.
- Use temporary redirect if destination may change.
- Prevent `/go/` pages from becoming thin indexed pages.
- Provide a fallback destination or message if vendor link returns regional errors.

## SEO / structured data

Include the FAQPage JSON-LD provided in the HTML package, or migrate it into the project’s existing SEO/head component.

Recommended additional schema if the site has a schema helper:

```json
{
  "@type": "Article",
  "headline": "How to Build a Starter Sleep Automation Setup Under $250",
  "description": "A beginner-friendly guide to building a smart bedroom sleep routine using three affordable device categories — sleep trackers, smart bulbs, and smart plugs — with manufacturer-verified specifications and a sample automation schedule.",
  "publisher": {
    "@type": "Organization",
    "name": "Lumivox"
  }
}
```

## QA checklist

Before merging:

- [ ] Page route resolves correctly.
- [ ] Only one H1 exists.
- [ ] Meta title and description are set.
- [ ] Disclosure block appears before first product CTA.
- [ ] Product CTAs use `/go/` links, not raw vendor URLs.
- [ ] References use external manufacturer URLs.
- [ ] Tables are scrollable or stacked on mobile.
- [ ] FAQ accordion/details works.
- [ ] `/go/` redirects are tracked.
- [ ] No medical claims imply treatment, diagnosis, cure, or guaranteed sleep improvement.
- [ ] Smart plug safety warning is preserved.
- [ ] All manufacturer specs are rechecked before publication.
