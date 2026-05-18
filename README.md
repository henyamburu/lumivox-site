# Lumivox Website

Lumivox is a static, multi-page GitHub Pages site for the Lumivox smart-living concept. The site presents the brand, explains the sleep-system offer, embeds YouTube videos, and prepares product/affiliate links for analytics tracking.

Live domain:

```text
https://lumivox.one
```

## Current site structure

```text
/
├── index.html                 # Home page
├── sleep-system.html          # Sleep System page
├── about.html                 # About page
├── acah.html                  # Standalone legacy / separate page included in this package
├── CNAME                      # Custom domain: lumivox.one
├── _config.yml                # GitHub Pages / Jekyll configuration
├── _layouts/
│   └── default.html           # Shared page layout
├── _includes/
│   ├── nav.html               # Shared navigation
│   ├── footer.html            # Shared footer
│   └── youtube-embed.html     # Reusable YouTube embed block
├── assets/
│   ├── css/
│   │   └── style.css          # Main site styling
│   ├── js/
│   │   ├── main.js            # UI behavior, including mobile nav
│   │   └── analytics.js       # Button/link click-tracking layer
│   └── videos/
│       └── README.md          # Notes for optional video assets
├── TRACKING.md                # Tracking implementation notes
└── README.md                  # This file
```

## Pages

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Main Lumivox brand introduction and overview |
| Sleep System | `/sleep-system/` | Product-stack page for the sleep system under $250 |
| About | `/about/` | Brand purpose and positioning |
| ACAH | `/acah.html` | Standalone page included in the package; not part of the main Lumivox navigation |

## Reusable blocks

The site uses Jekyll includes so common sections do not need to be edited repeatedly.

| File | Purpose |
|---|---|
| `_layouts/default.html` | Shared HTML shell, CSS, scripts, Cloudflare analytics, nav, footer |
| `_includes/nav.html` | Desktop and mobile navigation |
| `_includes/footer.html` | Footer links and site closing section |
| `_includes/youtube-embed.html` | Reusable YouTube embed card |

When changing the navigation or footer, update the include file once instead of editing every page.

## Analytics setup

Cloudflare Web Analytics is currently included in the shared layout:

```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "b942e39c3ad64cacb2e4cc13e9fcd9ae"}'></script>
```

The same Cloudflare beacon is also included in the standalone `acah.html` page.

Cloudflare Web Analytics tracks page-level behavior such as visits, pages, referrers, and performance. It does not currently provide full custom button-event reporting by itself.

## Button and link tracking

Important buttons and links now use structured tracking attributes.

Example:

```html
<a
  href="/sleep-system/"
  class="btn btn-dark"
  data-track="cta_click"
  data-track-id="home_hero_start_first_system"
  data-category="cta"
  data-label="Home hero - Start Your First System">
  Start Your First System →
</a>
```

The tracking script lives here:

```text
/assets/js/analytics.js
```

It listens for clicks on any element with `data-track` and sends a payload to the browser console. It is also prepared to forward events to Cloudflare Zaraz or GA4 later if either tool is added.

Current tracked event groups include:

| Event | Purpose |
|---|---|
| `nav_click` | Main, mobile, and footer navigation clicks |
| `cta_click` | Primary call-to-action buttons |
| `video_click` | YouTube watch buttons |
| `affiliate_click` | Product and affiliate link clicks |
| `menu_click` | Mobile menu toggle clicks |
| `phone_click` | Telephone link clicks |
| `form_submit_click` | Form submit buttons on the standalone ACAH page |
| `tab_click` | Tab interactions on the standalone ACAH page |

For more detail, see:

```text
TRACKING.md
```

## Testing tracking locally

Open the site in a browser, then open DevTools → Console.

Click a tracked button. You should see a console message like:

```text
[Lumivox Tracking] cta_click { ... }
```

The payload should include:

```text
tracking_id
category
label
destination
page
link_text
```

## Affiliate link placeholders

The product buttons still use placeholder affiliate links. Search the project for:

```text
REPLACE_WITH_AFFILIATE_LINK_WEARABLE
REPLACE_WITH_AFFILIATE_LINK_SMART_BULBS
REPLACE_WITH_AFFILIATE_LINK_SMART_PLUG
```

Replace each placeholder with the correct affiliate URL before sending traffic to the product page.

Suggested convention:

```text
Wearable:      REPLACE_WITH_AFFILIATE_LINK_WEARABLE
Smart bulbs:   REPLACE_WITH_AFFILIATE_LINK_SMART_BULBS
Smart plug:    REPLACE_WITH_AFFILIATE_LINK_SMART_PLUG
```

## YouTube video embeds

The site currently uses YouTube embeds through:

```text
_includes/youtube-embed.html
```

The Home page and Sleep System page pass YouTube video IDs into this include.

To update a video, edit the `id`, `title`, and `watch_url` values in the page where the include is used.

Example:

```liquid
{% include youtube-embed.html 
  id="YOUTUBE_VIDEO_ID" 
  title="Lumivox Smart Living Overview"
  watch_url="https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID" %}
```

## Deployment workflow

Recommended Git workflow:

```bash
git status
git add .
git commit -m "Update Lumivox tracking and README"
git push origin main
```

If you are working from a feature branch:

```bash
git checkout -b feat/analytics-tracking
git add .
git commit -m "Add tracking IDs and analytics documentation"
git push origin feat/analytics-tracking
```

Then open a pull request into `main`.

## GitHub Pages setup

Make sure GitHub Pages is configured to build from the correct branch.

Typical setup:

```text
Branch: main
Folder: /root
```

The `CNAME` file should remain in the root folder so GitHub Pages keeps the custom domain:

```text
lumivox.one
```

## Cloudflare setup

Cloudflare should remain responsible for DNS and Web Analytics.

Recommended checks after deployment:

1. Confirm `https://lumivox.one` loads correctly.
2. Confirm the Cloudflare analytics beacon appears in the page source.
3. Confirm tracked clicks appear in the browser console.
4. Confirm Cloudflare Web Analytics starts showing page traffic after visits occur.
5. If caching delays appear, purge the Cloudflare cache or wait for propagation.

## Editing rules

Use this structure to avoid repeat work:

| Change needed | Edit this file |
|---|---|
| Navigation links | `_includes/nav.html` |
| Footer links | `_includes/footer.html` |
| Global page layout | `_layouts/default.html` |
| Main styling | `assets/css/style.css` |
| Mobile menu behavior | `assets/js/main.js` |
| Click tracking behavior | `assets/js/analytics.js` |
| Home page content | `index.html` |
| Sleep product page content | `sleep-system.html` |
| About page content | `about.html` |

## Next recommended steps

1. Replace all affiliate placeholders with real affiliate links.
2. Confirm every major CTA has a unique `data-track-id`.
3. Push the updated site to GitHub.
4. Test live clicks in the browser console.
5. Keep Cloudflare Web Analytics for free traffic validation.
6. Add Cloudflare Zaraz, GA4, or Plausible later only when deeper conversion reporting is needed.

## Important note

The current setup is intentionally lightweight. Cloudflare Web Analytics is enough for early traffic validation. The custom tracking attributes prepare the site for more advanced event analytics later without forcing a paid analytics tool too early.
