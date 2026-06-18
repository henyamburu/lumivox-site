# Codex Task — Build Lumivox “Who Lumivox Is For” Article Page

## Objective

Create a production-ready Lumivox article page from the reviewed document:

**Who Lumivox Is For — And Who It Is Not For**

The page should function as a reader-fit and trust-building page. Its purpose is to help visitors understand whether Lumivox is relevant to their situation before they move into product comparisons, starter setup guides, or automation tutorials.

This is not a product review page and not a medical advice page.

---

## Source Document

Use the reviewed article copy from:

`Who Lumivox Is For — And Who It Is Not For.docx`

Use the document copy as the source of truth, but apply the editorial cleanup rules below before publishing.

---

## Target Route / File

Create the page at:

```text
/who-lumivox-is-for/
```

If the site uses static HTML files, create:

```text
who-lumivox-is-for.html
```

Preferred canonical URL:

```text
https://lumivox.one/who-lumivox-is-for/
```

---

## Page Metadata

Use:

```html
<title>Who Lumivox Is For — And Who It Is Not For</title>
<meta name="description" content="A clear, honest guide to who the Lumivox Sleep System is designed for, what kind of problem it addresses, and — just as importantly — who it is not the right fit for.">
<link rel="canonical" href="https://lumivox.one/who-lumivox-is-for/">
```

---

## Required Page Structure

Use this heading structure:

```text
H1: Who Lumivox Is For — And Who It Is Not For

H2: Disclosures
H2: Understanding Who the Lumivox System Is Designed For
H2: Quick Fit Check
H2: Who Lumivox May Be For
H2: Who Lumivox Is Not For
H2: What the Lumivox System Does and Does Not Do
H2: How the System Works in Practice
H2: Your Best Next Step
H2: The Honest Summary
H2: Where to Start
H2: Key Takeaways
```

Use only one H1.

---

## Editorial Cleanup Before HTML Integration

Apply these changes globally:

### 1. US spelling consistency

Replace:

```text
behaviour
recognise
colour
```

With:

```text
behavior
recognize
color
```

Also check for any other British spelling variants.

---

### 2. Safer sleep-onset wording

Replace this table/profile label:

```text
Spends 30+ minutes lying in bed before falling asleep
```

With:

```text
Often spends a long time trying to fall asleep after getting into bed
```

Avoid wording that sounds like a diagnostic threshold.

---

### 3. Wi-Fi formatting

Replace:

```text
2.4GHz Wi-Fi
```

With:

```text
2.4 GHz Wi-Fi
```

---

### 4. Subscription claim tightening

Where the article says no premium subscription is required, keep it limited to the starter routine.

Preferred wording:

```text
No premium subscription is required for the basic starter routines described here.
```

Do not imply every product ecosystem is fully free forever.

---

## Disclosure Requirements

The disclosure section must appear near the top of the page, before any product-related or affiliate-oriented links.

Use a visible callout component, not plain body text.

Suggested markup:

```html
<aside class="disclosure-box" aria-label="Affiliate and medical disclosure">
  <h2>Disclosures</h2>

  <p><strong>Affiliate disclosure:</strong> Some links on this page may be affiliate links. If you buy through them, Lumivox may earn a small commission at no extra cost to you. We only recommend products that fit the Lumivox starter sleep automation setup.</p>

  <p><strong>Not medical advice:</strong> Lumivox is not intended to diagnose, treat, or cure insomnia, sleep apnea, restless leg syndrome, narcolepsy, or any other sleep disorder. It is a practical environment-and-routine system for people who want more consistent sleep cues at home. If you have ongoing sleep problems, breathing issues during sleep, severe daytime fatigue, or a diagnosed sleep condition, speak with a qualified medical professional before using any consumer sleep technology.</p>
</aside>
```

---

## Layout Instructions

### 1. Article Container

Use the existing Lumivox article layout if available.

Suggested structure:

```html
<main class="article-page lumivox-fit-page">
  <article class="article-shell">
    ...
  </article>
</main>
```

Keep line length comfortable for reading.

Recommended max-width:

```css
.article-shell {
  max-width: 920px;
  margin: 0 auto;
}
```

---

### 2. Quick Fit Check

Do not render the Quick Fit Check as a traditional wide table on mobile.

Convert it into a responsive two-card layout.

Desktop:

```text
[ Lumivox may be a good fit if… ] [ Lumivox may not be the right first step if… ]
```

Mobile:

```text
[ Lumivox may be a good fit if… ]

[ Lumivox may not be the right first step if… ]
```

Suggested classes:

```html
<section class="fit-check-grid">
  <div class="fit-card good-fit">
    <h3>Lumivox may be a good fit if…</h3>
    <ul>...</ul>
  </div>

  <div class="fit-card not-first-step">
    <h3>Lumivox may not be the right first step if…</h3>
    <ul>...</ul>
  </div>
</section>
```

---

### 3. “Who Lumivox May Be For” Section

The source document has this section in a table format.

Convert it to cards.

Each card should include:

```text
Profile
Why the system may be relevant
```

Suggested structure:

```html
<section class="profile-grid">
  <article class="profile-card">
    <h3>Tracks sleep but is not sure what to change next</h3>
    <p>...</p>
  </article>
</section>
```

Profiles to include:

* Tracks sleep but is not sure what to change next
* Inconsistent sleep routine
* Often spends a long time trying to fall asleep after getting into bed
* Budget-conscious beginner
* Renter or cannot modify the home
* New to smart home technology
* Wants a routine that runs automatically

---

### 4. Editorial Note

Keep the Lumivox editorial note after the “Who Lumivox May Be For” section.

Render it as a soft callout:

```html
<aside class="editorial-note">
  <strong>Lumivox editorial note:</strong>
  <p>...</p>
</aside>
```

---

### 5. “Who Lumivox Is Not For” Section

Convert this section to cards as well.

Suggested class:

```html
<section class="not-for-section">
```

Profiles to include:

* Has a diagnosed clinical sleep disorder
* Expecting overnight results
* Already sleeps well and feels consistently rested
* Dislikes apps or Wi-Fi setup
* Expecting no behavior change
* Wants fully real-time biometric automation

The clinical sleep disorder profile must not be softened too much. Keep the boundary clear.

---

### 6. Medical First-Step Warning

After the “Who Lumivox Is Not For” cards, keep the warning list:

```text
If you regularly experience any of the following, speaking with a qualified healthcare professional is the recommended first step...
```

Render as a warning/caution box.

Suggested class:

```html
<aside class="medical-first-box">
```

Do not include affiliate links inside this box.

---

### 7. “What the System Does” and “What the System Does Not Do”

Render these as two separate sections or two cards in one section.

The “does not do” list should look like a boundary checklist.

Suggested classes:

```html
<section class="system-boundaries">
  <div class="system-does-card">...</div>
  <div class="system-does-not-card">...</div>
</section>
```

Important: Keep the “does not” language strong.

Do not change:

```text
Lumivox does not diagnose, treat, cure, or prevent any sleep disorder or medical condition.
```

---

### 8. “How the System Works in Practice”

Render the three device categories as a simple three-card explainer:

```text
Sleep tracker
Smart bulbs
Smart plug
```

Make clear that these components run independently in the starter setup.

Do not imply real-time biometric automation.

---

### 9. “Your Best Next Step”

Convert the table into CTA cards.

Each card should have:

* Reader situation
* Suggested starting point
* Link

Use descriptive link labels.

Suggested structure:

```html
<section class="next-step-grid">
  <article class="next-step-card">
    <h3>New to sleep automation?</h3>
    <p>Start with the Beginner Sleep System Checklist.</p>
    <a href="/go/beginner-sleep-system-checklist/">Read the beginner checklist</a>
  </article>
</section>
```

---

## Internal Links to Add

Replace all `[add link]` placeholders before production.

Use these paths unless the project has newer canonical article routes:

```text
Beginner Sleep System Checklist
/go/beginner-sleep-system-checklist/

Starter Setup Guide Under $250
/go/starter-sleep-setup/

Wearable Sleep Data Guide
/go/wearable-sleep-data/

Bedroom Wind-Down Automation Guide
/go/bedroom-wind-down-automation/

Fitbit Inspire 3 vs. Xiaomi Smart Band 10 Comparison
/go/fitbit-vs-xiaomi/
```

If `/go/` routes are affiliate/outbound redirect routes rather than internal article routes, do not use them as article navigation links. Instead, link to the internal article pages and reserve `/go/` links for outbound affiliate redirects.

Before finalizing, verify the site’s actual routing convention.

---

## Affiliate Link Rules

Any outbound affiliate links must include:

```html
rel="sponsored nofollow"
```

External links should generally use:

```html
target="_blank" rel="noopener sponsored nofollow"
```

Only use `sponsored` where the link is affiliate/commercial.

Do not mark internal article links as sponsored.

---

## Visual / CSS Guidance

Use calm, readable, product-oriented styling.

Avoid loud colors or heavy gradients.

Suggested CSS classes:

```css
.lumivox-fit-page
.article-shell
.disclosure-box
.fit-check-grid
.fit-card
.good-fit
.not-first-step
.profile-grid
.profile-card
.editorial-note
.not-for-section
.medical-first-box
.system-boundaries
.system-does-card
.system-does-not-card
.device-grid
.device-card
.next-step-grid
.next-step-card
.key-takeaways
```

Preferred design direction:

* White or near-white content background
* Soft border cards
* Clear headings
* Good spacing
* Readable body text
* Calm accent colors only
* No aggressive sales styling

---

## Mobile Requirements

The page must be readable on mobile.

Required behavior:

* No horizontal scrolling
* Fit-check cards stack vertically
* Profile cards stack vertically
* Next-step cards stack vertically
* Disclosure box remains visible near the top
* CTA buttons remain full-width or comfortably tappable on small screens

---

## Accessibility Requirements

* Use semantic HTML.
* Use one H1 only.
* Maintain logical heading order.
* Do not use icons as the only source of meaning.
* Decorative icons must include `aria-hidden="true"`.
* Link text must be descriptive.
* Avoid “click here.”
* Ensure color contrast meets WCAG readability expectations.

---

## Suggested Schema

Add Article or WebPage JSON-LD if the project already uses schema.

Suggested Article schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Who Lumivox Is For — And Who It Is Not For",
  "description": "A clear, honest guide to who the Lumivox Sleep System is designed for, what kind of problem it addresses, and who it is not the right fit for.",
  "author": {
    "@type": "Organization",
    "name": "Lumivox"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Lumivox"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lumivox.one/who-lumivox-is-for/"
  }
}
</script>
```

Only include this if schema is already part of the project pattern.

---

## Navigation / Related Content

Add this page into the article/resource navigation if the Lumivox site has one.

Suggested category:

```text
Sleep Automation Basics
```

Suggested related articles:

* Beginner Sleep System Checklist
* Starter Setup Under $250
* Wearable Sleep Data Guide
* Bedroom Wind-Down Automation
* Fitbit vs Xiaomi Sleep Tracker Comparison

---

## Production Checklist

Before marking complete:

* [ ] Page created at the correct route
* [ ] Title and meta description added
* [ ] Canonical URL added
* [ ] Affiliate disclosure visible near the top
* [ ] Medical disclaimer visible near the top
* [ ] All `[add link]` placeholders removed
* [ ] British spellings converted to US spellings
* [ ] 2.4 GHz formatting fixed
* [ ] “30+ minutes” wording softened
* [ ] Tables converted to responsive cards/grids
* [ ] Internal links verified
* [ ] Affiliate links use `rel="sponsored nofollow"`
* [ ] Mobile layout tested
* [ ] No medical treatment claims added
* [ ] No guarantee language added
* [ ] Page added to relevant article navigation
* [ ] Existing site styling reused where possible
