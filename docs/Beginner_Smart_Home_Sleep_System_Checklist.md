# Codex Implementation Brief

## Page: Beginner Smart Home Sleep System Checklist

### Objective

Create a polished Lumivox checklist article page from the reviewed document - "Beginner Smart Home Sleep System Checklist.docx":

**Title:** Beginner Smart Home Sleep System Checklist
**Subtitle:** Building a Lumivox sleep automation setup from scratch — step by step
**Page type:** Checklist / guide article
**Primary intent:** Help beginners assemble and test a simple bedroom sleep automation system using a tracker, smart bulbs, smart plug, and consistent wake time.

---

## Recommended Route

Use a normal content route, not a `/go/` redirect route.

Recommended:

```txt
/checklists/beginner-smart-home-sleep-system-checklist/
```

Alternative if the site currently groups guides together:

```txt
/guides/beginner-smart-home-sleep-system-checklist/
```

Do not use this as the canonical article route:

```txt
/go/beginner-sleep-system-checklist/
```

Reserve `/go/` only for affiliate or outbound redirect tracking.

---

## SEO Metadata

```txt
Title tag:
Beginner Smart Home Sleep System Checklist | Lumivox

Meta description:
A complete beginner checklist for setting up the Lumivox Sleep System — covering device selection, app setup, safety checks, scheduling, and first-week tracking guidance.

Suggested slug:
beginner-smart-home-sleep-system-checklist

Canonical:
https://lumivox.one/checklists/beginner-smart-home-sleep-system-checklist/
```

---

## Page Structure

Use the following heading structure:

```html
<h1>Beginner Smart Home Sleep System Checklist</h1>
<p class="page-subtitle">Building a Lumivox sleep automation setup from scratch — step by step</p>

<section class="disclosure-box">...</section>

<h2>How to Build Your Lumivox Sleep System from Scratch</h2>
<h2>Quick System Summary</h2>
<h2>Minimum vs Full Setup</h2>
<h2>Stage 1: Before You Buy Anything</h2>
<h2>Stage 2: Device Buying Checklist</h2>
<h3>Sleep Tracker</h3>
<h3>Smart Bulbs</h3>
<h3>Smart Plug</h3>
<h2>Stage 3: App Setup Checklist</h2>
<h3>Sleep Tracker</h3>
<h3>Smart Bulbs</h3>
<h3>Smart Plug</h3>
<h2>Stage 4: Safety Checklist Before Automating Devices</h2>
<h2>Stage 5: Build Your Evening Light Schedule</h2>
<h2>Stage 6: Build Your Smart Plug Schedule</h2>
<h2>Stage 7: Build Your Morning Light Schedule</h2>
<h2>Stage 8: First Week Tracking Checklist</h2>
<h2>Stage 9: Adjustment Checklist</h2>
<h2>Ongoing Maintenance Checklist</h2>
<h2>Full System Summary</h2>
<h2>Frequently Asked Questions</h2>
<h2>Where to Start</h2>
<h2>Key Takeaways</h2>
```

---

## Required Content Edits Before Rendering

### 1. Remove all editorial placeholders

Remove or replace every instance of:

```txt
[add link before Codex integration]
[Add all internal links before Codex integration]
```

No bracketed editorial notes should appear on the public page.

---

### 2. Keep disclosures near the top

Render both disclosure statements near the top of the page, before product links.

Use a visible disclosure box:

```html
<section class="disclosure-box">
  <p><strong>Affiliate disclosure:</strong> Some links on this page may be affiliate links. If you buy through them, Lumivox may earn a small commission at no extra cost to you. We only recommend products that fit the Lumivox starter sleep automation setup.</p>
  <p><strong>Not medical advice:</strong> This checklist is for general routine-building and environmental consistency only. It is not intended to diagnose, treat, or cure insomnia, sleep apnea, or any other sleep disorder. If you have ongoing sleep concerns, speak with a qualified healthcare professional.</p>
</section>
```

---

### 3. Treat the product correction note as internal/editorial content

Do not render this as a large public note near the top:

```txt
Product correction note: The previous version of this checklist listed...
```

Instead, fold the useful updates naturally into the article:

```txt
For Xiaomi, verify current availability in your region. Current models include Xiaomi Smart Band 9 and Smart Band 10. Older models such as Smart Band 8 may still appear in retailer listings.
```

For Fitbit language, use:

```txt
Google Health app, formerly Fitbit app; some product pages may still refer to Fitbit during the transition.
```

---

### 4. Move Product Correction Log out of public article body

The “Product Correction Log” is valuable for internal tracking, but should not appear as a normal reader-facing section unless Lumivox intentionally wants a visible changelog.

Recommended handling:

```txt
Move to internal implementation comment, markdown comment, CMS notes, or page source comment.
```

Optional HTML comment:

```html
<!--
Editorial correction log:
- Xiaomi Smart Band 8 replaced with Smart Band 9 / 10 language.
- Fitbit app language updated to Google Health app / formerly Fitbit app.
- Product claims should be verified against official manufacturer pages before publication.
-->
```

---

### 5. Manufacturer Sources section

Do not make the page feel like a technical audit document.

Preferred public wording near the bottom:

```txt
Product details were checked against manufacturer sources at the time of writing. Prices, availability, app names, and specifications may change. Verify current product details before purchasing.
```

Keep detailed source references internally if needed.

---

## Link Mapping

Replace placeholder paths with real internal article routes.

Recommended internal article links:

```txt
Starter Sleep Setup:
/guides/best-starter-sleep-automation-setup-under-250/

Fitbit vs Xiaomi:
/comparisons/fitbit-inspire-3-vs-xiaomi-smart-band-sleep-tracking/

Govee vs Wyze:
/comparisons/govee-smart-bulbs-vs-wyze-bulb-color-evening-routines/

Kasa Smart Plug:
/guides/kasa-smart-plug-setup-for-sleep-routines/

Bedroom Wind-Down Automation:
/guides/how-to-build-a-bedroom-wind-down-automation/

Wearable Sleep Data:
/guides/what-wearable-sleep-data-can-and-cannot-tell-you/
```

Recommended download route if a PDF is added:

```txt
/downloads/beginner-smart-home-sleep-system-checklist.pdf
```

Do not route article navigation through `/go/`.

---

## Affiliate Redirect Rule

Use `/go/` only for outbound affiliate or retailer redirect links.

Examples:

```txt
/go/fitbit-inspire-3/
/go/xiaomi-smart-band-10/
/go/govee-h6008/
/go/wyze-bulb-color/
/go/kasa-ep10/
/go/kasa-ep25/
```

All `/go/` routes should include:

```txt
- affiliate disclosure coverage
- redirect tracking
- fallback handling for regional availability
- noindex where appropriate
```

---

## HTML Components to Use

### 1. Disclosure Box

Class suggestion:

```txt
disclosure-box
```

Purpose:

```txt
Affiliate and medical disclaimer visibility.
```

---

### 2. Stage Cards

Each setup stage should render as a card or separated content block.

Class suggestion:

```txt
checklist-stage
```

Example:

```html
<section class="checklist-stage">
  <h2>Stage 1: Before You Buy Anything</h2>
  ...
</section>
```

---

### 3. Checklist Rows

Convert checkbox items into styled checklist rows.

Example:

```html
<ul class="checklist">
  <li>Choose your consistent wake-up time — this is your daily anchor</li>
  <li>Choose a realistic target sleep time based on your schedule</li>
  <li>List the bedroom devices you want to automate</li>
</ul>
```

Use CSS icons or pseudo-elements for checkboxes if the site has a checklist component.

---

### 4. Responsive Tables

All tables must be mobile-safe.

Tables to convert carefully:

```txt
- Minimum vs Full Setup
- Evening Light Schedule
- Smart Plug Schedule
- Morning Light Schedule
- What to Observe
- Adjustment Checklist
- Full System Summary
- FAQ
```

On mobile, use stacked cards if existing table styling is weak.

---

### 5. Safety Warning Box

Before the smart plug schedule, add a strong warning box:

```html
<section class="warning-box">
  <h3>Do not automate high-risk devices</h3>
  <p>Do not use smart plugs with space heaters, heated blankets, irons, cooking appliances, medical equipment, or any device that could create heat, fire, water, or safety risk if it turns on or off unexpectedly. Use smart plugs only with devices that are safe to run unattended and that resume safely after power interruptions.</p>
</section>
```

---

### 6. Bottom CTA Card Grid

At the bottom, render “Where to Start” as CTA cards, not only bullets.

Suggested cards:

```txt
Build Your Starter Sleep Setup
Compare Fitbit Inspire 3 vs Xiaomi Smart Band
Compare Govee vs Wyze Bulbs
Set Up Kasa Smart Plug
Build Wind-Down Automation
Download Printable Checklist
```

Each card should include:

```txt
- short title
- one-sentence description
- internal article link or download link
```

---

## FAQ Schema

Add FAQ structured data if the project already supports JSON-LD.

Include these questions:

```txt
Do I need all three devices?
Can I start with just smart bulbs?
Do smart plugs require 2.4GHz Wi-Fi?
Can I use one smart plug for multiple devices?
How long should I test the system before making changes?
What does the Xiaomi Band 8 listing mean — is that still current?
```

Keep answers aligned with the article.

---

## Article Schema

Add Article or BlogPosting schema if the site supports it.

Recommended fields:

```txt
headline:
Beginner Smart Home Sleep System Checklist

description:
A complete beginner checklist for setting up the Lumivox Sleep System — covering device selection, app setup, safety checks, scheduling, and first-week tracking guidance.

author:
Lumivox

publisher:
Lumivox

datePublished:
Use actual publication date

dateModified:
Use current deployment date

mainEntityOfPage:
Canonical URL
```

---

## Accessibility Requirements

Ensure:

```txt
- Tables have clear headers
- CTA cards have descriptive link text
- Warning boxes do not rely on color alone
- Link text is meaningful, not only “click here”
- Mobile layout preserves reading order
- The FAQ is keyboard accessible if rendered as accordion
```

---

## Acceptance Criteria

The page is ready when:

```txt
- No bracketed editor notes remain visible
- `/go/` is not used for normal internal article navigation
- Affiliate and medical disclaimers appear near the top
- Safety warning is visually prominent
- Tables are readable on mobile
- Checklist items render cleanly
- Product correction log is not displayed as normal article content
- Manufacturer source notes are either internal or compactly reader-facing
- Bottom CTA section links to the correct Lumivox content pages
- FAQ schema is added if supported
- Page has title, meta description, canonical URL, and article metadata
```

---

## Recommended Commit Message

```txt
Add beginner smart home sleep system checklist page
```

## Recommended PR Summary

```txt
Adds the Beginner Smart Home Sleep System Checklist page with staged setup guidance, product-selection checklist, safety warnings, first-week tracking guidance, adjustment rules, FAQ content, and bottom CTA navigation. Cleans editorial placeholders, separates internal article links from affiliate /go/ redirects, and prepares the page for responsive checklist/table rendering.
```
