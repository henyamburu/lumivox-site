# Codex Task: Add Article Page — “What Wearable Sleep Data Can and Cannot Tell You”

## Objective

Create a new Lumivox article page from the reviewed document:

**Title:** What Wearable Sleep Data Can and Cannot Tell You
**Site:** Lumivox
**Content type:** Educational article / sleep system guide
**Status:** Approved for implementation after minor wording cleanup
**Content reviewed:** June 2026

The article "What Wearable Sleep Data Can and Cannot Tell You.docx" should explain how wearable sleep data should be used inside the Lumivox Sleep System: as a trend feedback layer, not as a diagnostic tool or final judgment on health.

---

## Required Pre-Publish Text Fixes

Before converting to HTML, apply these wording corrections:

1. Replace:

> Wearable sleep trackers are consumer tools, not medical devices.

With:

> Most general sleep-tracking features are consumer wellness tools, not diagnostic medical tools.

2. Keep the existing medical limitation language, but ensure the page does not imply that all wearable features have the same regulatory status.

3. Standardize spelling to American English:

   * behaviour → behavior
   * stabilises → stabilizes
   * optimising → optimizing

4. Confirm internal article links before publishing.

   * Do not use `/go/` links for internal article navigation unless the project intentionally routes internal pages through `/go/`.
   * Reserve `/go/` links for outbound affiliate/vendor redirects if that is the existing Lumivox routing convention.

---

## Suggested Slug

Use one of the following:

Preferred:

```txt
/articles/wearable-sleep-data/
```

Alternative:

```txt
/guides/wearable-sleep-data/
```

Avoid using `/go/` for this article page.

---

## Page Metadata

```html
<title>What Wearable Sleep Data Can and Cannot Tell You | Lumivox</title>
<meta name="description" content="What wearable sleep trackers can and cannot tell you — an honest, medically cautious guide for Lumivox Sleep System users. Learn how to use sleep duration, sleep stages, HRV, resting heart rate, and weekly trends without overinterpreting the data.">
```

Suggested Open Graph:

```html
<meta property="og:title" content="What Wearable Sleep Data Can and Cannot Tell You">
<meta property="og:description" content="A practical Lumivox guide to using wearable sleep data as trend feedback — not diagnosis.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://lumivox.one/articles/wearable-sleep-data/">
```

---

## Page Structure

Use semantic HTML.

Recommended heading structure:

```txt
H1: What Wearable Sleep Data Can and Cannot Tell You

Intro disclaimer box
Intro paragraphs

H2: Important Note on Medical Limitations
H2: Quick Reference
H2: What Wearable Sleep Data May Tell You
  H3: 1. Your sleep patterns over time
  H3: 2. Your approximate sleep duration
  H3: 3. Broad sleep stage trends — not exact values
  H3: 4. Recovery-related signals as trend indicators
  H3: 5. Whether your routine changes may be moving in the right direction

H2: What Wearable Sleep Data Cannot Tell You
  H3: 1. It cannot diagnose sleep disorders
  H3: 2. It cannot precisely measure sleep stages
  H3: 3. It cannot explain why you slept poorly
  H3: 4. It cannot replace your subjective experience

H2: How to Use Sleep Data Effectively
  H3: Step 1: Establish a baseline first
  H3: Step 2: Make one change at a time
  H3: Step 3: Use weekly averages, not daily scores
  H3: Step 4: Connect data to behavior

H2: Weekly Review Framework
H2: The Role of Sleep Data in the Lumivox System
H2: An Important Reminder
H2: Frequently Asked Questions
H2: References
H2: Next Steps
```

---

## HTML Implementation Requirements

### 1. Medical disclaimer styling

Render the opening disclaimer and “Important Note on Medical Limitations” as visually distinct callout boxes.

Use a calm, trustworthy style. Avoid alarming red styling unless the existing design system uses it for medical warnings.

Suggested class names:

```html
<aside class="content-callout content-callout--medical">
```

or:

```html
<section class="article-note article-note--medical">
```

### 2. Quick Reference table

Convert the Quick Reference section into an accessible table:

```html
<table>
  <thead>
    <tr>
      <th scope="col">Area</th>
      <th scope="col">What Wearables May Do Reasonably Well</th>
      <th scope="col">What They Do Poorly</th>
    </tr>
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

For mobile:

* Use horizontal scroll, or
* Convert table rows into stacked cards if the existing article system already supports responsive tables.

### 3. Weekly Review Framework table

Convert the Weekly Review Framework into an accessible table using the same table pattern.

### 4. FAQ formatting

Render FAQ as an accordion if the Lumivox article template supports accordions.

Each FAQ item should use:

* Button-style question heading
* Expandable answer region
* Keyboard-accessible controls
* Proper `aria-expanded` behavior if custom JavaScript is used

If no accordion pattern exists, render FAQ as plain H3 + paragraph blocks.

### 5. References section

Include the AASM reference from the document.

Format the reference cleanly. Avoid placing long raw URLs in the visible body if the design supports anchor links.

Recommended visible label:

```txt
American Academy of Sleep Medicine: Consumer Sleep Technology Position Statement
```

The linked source should point to the AASM/JCSM article reference already included in the document.

### 6. Next Steps section

Replace placeholder link text before publishing.

Suggested internal links:

```txt
Compare sleep tracker options
Build the starter sleep setup
Set up a bedroom wind-down automation
Compare Govee vs Wyze smart bulbs
Download the sleep data checklist
```

Use real internal article URLs, not placeholder `/go/` paths, unless `/go/` is intentionally used for internal routing.

---

## Suggested Related Internal Links

Add these as internal article cards or simple text links:

```txt
/articles/fitbit-inspire-3-vs-xiaomi-smart-band/
/articles/starter-sleep-automation-setup-under-250/
/articles/bedroom-wind-down-automation/
/articles/govee-smart-bulbs-vs-wyze-bulb-color/
/articles/beginner-smart-home-sleep-system-checklist/
```

Adjust paths to match the project’s existing routing convention.

---

## Suggested CTA Block

Place one CTA near the end of the article, before “Next Steps.”

Suggested copy:

```html
<section class="article-cta">
  <h2>Build a sleep routine you can actually observe</h2>
  <p>Wearable sleep data is most useful when it is paired with a consistent environment. Start with lighting, bedtime cues, and a simple weekly review instead of chasing a perfect sleep score.</p>
  <a href="/articles/starter-sleep-automation-setup-under-250/" class="button">See the starter sleep setup</a>
</section>
```

---

## Schema Markup

Add Article schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Wearable Sleep Data Can and Cannot Tell You",
  "description": "What wearable sleep trackers can and cannot tell you — an honest, medically cautious guide for Lumivox Sleep System users.",
  "author": {
    "@type": "Organization",
    "name": "Lumivox"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Lumivox",
    "url": "https://lumivox.one"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lumivox.one/articles/wearable-sleep-data/"
  },
  "dateReviewed": "2026-06"
}
</script>
```

Add FAQ schema only after final FAQ copy is confirmed and visible on the page.

---

## Design Notes

The page should feel:

* Calm
* Clinical enough to be trustworthy
* Practical and beginner-friendly
* Not sales-heavy
* Not overly technical

Avoid:

* Aggressive affiliate CTAs
* Medical claims
* Promising improved sleep outcomes
* Suggesting sleep scores are precise
* Suggesting Lumivox diagnoses or treats sleep problems

---

## Compliance Notes

Do not claim:

* Wearables diagnose sleep apnea
* Sleep stage data is clinically precise
* HRV or resting heart rate identifies a specific condition
* Lumivox improves, treats, prevents, or cures sleep disorders
* A sleep score is a health diagnosis

Safe positioning:

* Trend feedback
* Routine awareness
* Environmental consistency
* Weekly review
* General wellness education
* Clinician conversation support when symptoms persist

---

## Acceptance Criteria

The task is complete when:

1. The article page is created at the approved route.
2. The revised medical wording is applied.
3. American English spelling is standardized.
4. Quick Reference and Weekly Review sections are rendered as accessible tables.
5. FAQ is formatted cleanly, preferably as an accordion.
6. Placeholder links are replaced with real internal article links.
7. `/go/` is not used for internal article navigation unless intentionally required by the project.
8. Article schema is added.
9. FAQ schema is added only if final FAQ content is visible on the page.
10. Page is responsive on mobile.
11. No medical or diagnostic claims are introduced during HTML conversion.
12. The final page visually matches the Lumivox article design system.
