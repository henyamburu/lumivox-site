# Lumivox Content Workflow

_Last updated: 2026-05-30_

This file defines how Lumivox articles, guides, product comparisons, and media-supported pages should be planned, drafted, reviewed, and published.

## Content Purpose

Every Lumivox content piece should do at least one of the following:

1. Help a beginner understand smart sleep automation.
2. Explain how wearable sleep data can guide better routines.
3. Compare simple products honestly.
4. Show a practical setup or routine.
5. Build trust before affiliate monetization.
6. Move readers naturally toward the Sleep System page or product stack.

## Content Tone

Use a practical, calm, helpful tone.

Good tone:

- "Here is what this setup can help with."
- "This is best for beginners who want a simple routine."
- "This does not replace medical guidance."
- "The lower-cost option may be enough if you only need basic tracking."

Avoid:

- Hype.
- Fear-based sleep claims.
- Medical treatment promises.
- Overly technical smart-home jargon.
- Thin product promotion.

## Standard Article Workflow

### Step 1 — Define Reader Intent

Before drafting, answer:

- Who is the reader?
- What problem are they trying to solve?
- What decision do they need to make?
- What should they do after reading?

### Step 2 — Choose Content Type

| Type | Best For |
|---|---|
| Beginner guide | Teaching the Lumivox concept. |
| Product comparison | Helping readers choose between two options. |
| Setup guide | Walking through a practical routine. |
| Checklist | Giving readers a quick action plan. |
| Trust article | Explaining limitations and who the system is for. |
| Product hub | Organizing recommended products by category. |

### Step 3 — Create Brief

Use `ARTICLE_BRIEF_TEMPLATE.md` before writing.

### Step 4 — Draft Page

The draft should include:

- Clear headline.
- Direct intro.
- Practical body sections.
- Product or setup table where useful.
- Internal links.
- CTA to next logical page.
- Disclosure if product links are present.
- No unsupported product claims.

### Step 5 — Review for Trust

Check:

- Are claims realistic?
- Is the reader being helped, not pushed?
- Are limitations included?
- Is medical language careful?
- Are product recommendations supported by practical reasoning?

### Step 6 — Add Tracking

If CTAs or product links are included:

- Use existing tracking conventions.
- Route product clicks through `/go/` pages if appropriate.
- Label product category, product name, page, and link text clearly.

### Step 7 — SEO Pass

Use `SEO_CHECKLIST.md`.

### Step 8 — Test Page

Use `TESTING_CHECKLIST.md`.

### Step 9 — Update Docs

After publishing or staging:

- Update `DEV_LOG.md`.
- Update `BACKLOG.md`.
- Update `PROJECT_STATE.md` if the page structure changed.

## Recommended Article Structure

```md
# Article Title

## Intro
Briefly define the problem and what the reader will learn.

## Quick Recommendation / Summary
Give the practical answer early.

## Why This Matters
Explain the routine, sleep, or smart-home context.

## Setup / Comparison / Main Guide
Use clear subsections.

## Product or Tool Table
Use only if products are relevant.

## What to Watch Out For
Explain limitations, compatibility, costs, or mistakes.

## Suggested Lumivox Routine
Tie the article back to the Lumivox Loop: Input → System → Output.

## Next Step
Link to Sleep System, Start Here, checklist, or product page.

## Disclosure
Include if product links appear.
```

## Internal Linking Pattern

Use internal links intentionally:

| From | Link To | Purpose |
|---|---|---|
| Product comparison | Sleep System page | Show how product fits the full setup. |
| Setup guide | Product stack | Help reader buy/build. |
| Checklist | Start Here or Sleep System | Give next step. |
| Wearable data article | About or Sleep System | Explain philosophy and limitations. |
| Who Lumivox Is For | Start Here | Guide qualified readers. |

## Article Priority Order

Recommended publishing order:

1. Best Starter Sleep Automation Setup Under $250.
2. Fitbit Inspire 3 vs Xiaomi Smart Band for Sleep Tracking.
3. Govee Smart Bulbs vs Wyze Bulb Color for Evening Routines.
4. Kasa Smart Plug Setup for Sleep Routines.
5. How to Build a Bedroom Wind-Down Automation.
6. What Wearable Sleep Data Can and Cannot Tell You.
7. Beginner Smart Home Sleep System Checklist.
8. Who Lumivox Is For — And Who It Is Not For.

## Editorial Guardrails

### Medical Claims

Do not claim Lumivox cures, treats, diagnoses, prevents, or guarantees improvement for insomnia, sleep apnea, anxiety, depression, or other medical conditions.

Acceptable phrasing:

- "can support a more consistent wind-down routine"
- "may help you notice patterns"
- "can reduce friction around bedtime habits"
- "not a substitute for medical advice"

### Product Claims

Do not claim current product specs, prices, compatibility, or availability unless verified during the task.

When uncertain, use cautious phrasing:

- "often available around..."
- "check current compatibility before buying"
- "pricing changes often"
- "verify the exact model before purchasing"

### Affiliate Language

Avoid:

- "best product ever"
- "must-buy"
- "guaranteed results"
- "perfect for everyone"

Prefer:

- "best fit for..."
- "stronger choice when..."
- "budget-friendly option if..."
- "not ideal if..."

## Definition of Done for an Article

- [ ] Clear reader intent.
- [ ] Useful title.
- [ ] Practical structure.
- [ ] Internal links included.
- [ ] CTA included.
- [ ] Product links routed/tracked if present.
- [ ] Affiliate disclosure included if product links are present.
- [ ] SEO basics completed.
- [ ] Mobile layout checked.
- [ ] No unsupported claims.
- [ ] Docs updated.
