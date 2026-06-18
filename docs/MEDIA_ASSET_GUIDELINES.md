# Lumivox Media and Asset Guidelines

_Last updated: 2026-05-30_

This file defines how Lumivox should handle images, videos, icons, diagrams, and other media assets.

## Media Purpose

Media should make the site clearer, more trustworthy, and easier to understand. It should not be added only for decoration.

Good media for Lumivox:

- Simple diagrams explaining the Lumivox Loop.
- Product stack visuals.
- Bedroom routine illustrations.
- YouTube videos already created for Lumivox.
- Setup screenshots or checklist graphics.
- Calm, practical lifestyle visuals.

Avoid:

- Generic stock photos that feel unrelated.
- Medical imagery that implies clinical treatment.
- Overly futuristic smart-home visuals that make the system look expensive.
- Misleading product images.
- Large files that slow down mobile loading.

## Folder Convention

Codex should inspect the current repository first. If no convention exists, prefer:

```text
/assets/
  /images/
    /brand/
    /articles/
    /products/
    /diagrams/
  /video/
  /icons/
```

If the site already uses a different structure, follow the existing pattern.

## File Naming Convention

Use lowercase, descriptive names with hyphens.

Good:

```text
lumivox-loop-diagram.png
sleep-automation-bedroom-routine.jpg
fitbit-vs-xiaomi-comparison-hero.jpg
govee-wyze-evening-lighting.png
kasa-smart-plug-setup-diagram.png
```

Avoid:

```text
image1.jpg
hero-final-final.png
screenshot copy 3.png
IMG_2034.jpeg
```

## Image Size Guidance

Use reasonable web sizes.

| Image Type | Suggested Width | Notes |
|---|---:|---|
| Hero image | 1200–1600px | Compress before publishing. |
| Article inline image | 800–1200px | Keep file size low. |
| Product card image | 400–800px | Consistent ratio. |
| Icon | SVG preferred | Keep simple. |
| Diagram | SVG or PNG | Text must be readable on mobile. |

## Alt Text Guidance

Alt text should describe the image’s meaning, not stuff keywords.

Good:

```text
Diagram showing wearable sleep data flowing into a smart bedroom routine.
```

Poor:

```text
Best smart sleep automation tracker smart bulbs smart plug Lumivox.
```

For decorative images, use empty alt text if the HTML pattern supports it.

## Video Guidance

Known direction: Lumivox videos are already posted on YouTube.

Use YouTube links or responsive embeds rather than self-hosting large video files unless the user explicitly instructs otherwise.

Video sections should include:

- Short title.
- One-sentence context.
- Video link or embed.
- Tracking attributes if the video CTA is clickable.

## Product Image Caution

When using product images:

- Do not imply Lumivox owns, manufactures, or officially endorses the product.
- Do not use brand assets in a way that violates brand guidelines.
- Prefer neutral product cards unless approved affiliate/brand assets are available.
- Include disclosure where product links appear.

## Diagrams to Consider

### Lumivox Loop Diagram

```text
Wearable Data → Routine Rules → Bedroom Environment
```

Expanded version:

```text
Input: Sleep/wake patterns, evening habits, light exposure
System: Simple automation routine
Output: Dimmer lights, fewer device interruptions, calmer evening rhythm
```

### Starter Stack Diagram

```text
Sleep Tracker + Smart Bulbs + Smart Plug = Beginner Sleep Automation Setup
```

### Evening Routine Timeline

```text
8:30 PM: Lights warm
9:00 PM: Plug shuts off distracting device
9:30 PM: Phone/wearable reminder
10:00 PM: Bedroom environment settled
```

## Media Definition of Done

- [ ] File name is descriptive.
- [ ] File size is reasonable.
- [ ] Alt text is useful.
- [ ] Image does not make misleading claims.
- [ ] Media layout works on mobile.
- [ ] Video embeds are responsive.
- [ ] Product media respects affiliate/trademark caution.
- [ ] Tracking is present for clickable media CTAs.
