# Lumivox Website

Lumivox is a static, multi-page GitHub Pages site for the Lumivox smart-living concept. The site presents the brand, explains the sleep-system offer, embeds YouTube videos, and prepares product/affiliate links for analytics tracking.

Live domain:

```text
https://lumivox.one
```

## Clean daily workflow

On Windows, start from the trusted local repo:

```powershell
cd C:\Dev\Trusted\lumivox.one
code .
```

Then in VS Code:

```text
Dev Containers: Reopen in Container
```

Then inside the container terminal:

```bash
npm run dev
```

## Current site structure

```text
/
├── index.html                 # Home page
├── sleep-system.html          # Sleep System page
├── about.html                 # About page
├── CNAME                      # Custom domain: lumivox.one
├── _config.yml                # GitHub Pages / Jekyll configuration
├── _layouts/
│   └── default.html           # Shared page layout
├── _includes/
│   ├── nav.html               # Shared navigation
│   ├── footer.html            # Shared footer
│   └── youtube-embed.html     # Reusable YouTube embed block
├── guides/
│   └── index.html             # Guide and article hub
├── _templates/
│   └── article-page.html      # Starter file for new guide pages
├── assets/
│   ├── css/
│   │   └── style.css          # Main site styling
│   ├── js/
│   │   ├── main.js            # UI behavior, including mobile nav
│   │   └── analytics.js       # Button/link click-tracking layer
│   └── videos/
│       └── README.md          # Notes for optional video assets
├── go/                        # Product redirect pages for Phase 1 click-path tracking
│   ├── sleep-tracker/
│   ├── smart-bulbs/
│   └── smart-plug/
├── AFFILIATE_LINKS.md         # Hybrid affiliate and metrics plan
├── LANE5_ROADMAP.md           # Lane 5 status, QA, and next steps
├── METRICS_WEEKLY_TEMPLATE.csv # Weekly Cloudflare metrics capture template
├── TRACKING.md                # Tracking implementation notes
└── README.md                  # This file
```

## Pages

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Main Lumivox brand introduction and overview |
| Sleep System | `/sleep-system/` | Product-stack page for the sleep system under $250 |
| About | `/about/` | Brand purpose and positioning |
| Guides | `/guides/` | Article hub and beginner-content entry point |

## Reusable blocks

The site uses Jekyll includes so common sections do not need to be edited repeatedly.

| File | Purpose |
|---|---|
| `_layouts/default.html` | Shared HTML shell, CSS, scripts, Cloudflare analytics, nav, footer |
| `_includes/nav.html` | Desktop and mobile navigation |
| `_includes/footer.html` | Footer links and site closing section |
| `_includes/youtube-embed.html` | Reusable YouTube embed card |
| `_layouts/article.html` | Shared article structure, recovery link, and Sleep System CTA |

When changing the navigation or footer, update the include file once instead of editing every page.

## Analytics setup

Cloudflare Web Analytics is currently included in the shared layout:

```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "b942e39c3ad64cacb2e4cc13e9fcd9ae"}'></script>
```

Cloudflare Web Analytics tracks page-level behavior such as visits, pages, referrers, and performance. It does not currently provide full custom button-event reporting by itself.

For Phase 1 product-click measurement, product CTAs route through `/go/.../` pages. Cloudflare can then count visits to product-interest paths such as `/go/smart-bulbs/` before the user is redirected to the vendor page. Option pages also route each outbound choice through a distinct `/go/.../` path so retailer selections can be counted manually.

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

The site deliberately keeps two tracking layers:

1. Cloudflare-visible `/go/.../` page views for manual counting now.
2. Unique `data-track-id` attributes for event-level reporting when Zaraz, GA4, Plausible, or another analytics service is enabled later.

Current tracked event groups include:

| Event | Purpose |
|---|---|
| `nav_click` | Main, mobile, and footer navigation clicks |
| `cta_click` | Primary call-to-action buttons |
| `video_click` | YouTube watch buttons |
| `affiliate_click` | Product and affiliate link clicks |
| `menu_click` | Mobile menu toggle clicks |

For more detail, see:

```text
TRACKING.md
```

## Testing tracking locally

Start the local preview server:

```powershell
node tools/local-preview-server.js
```

Then open:

```text
http://127.0.0.1:4173
```

The preview server renders the Jekyll layout and includes from the current working tree, so you can test uncommitted changes before pushing to GitHub Pages. Keep the server running while testing; page refreshes render the latest saved files.

Open DevTools → Console.

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

## Product redirect and affiliate link setup

The Sleep System product buttons now point to stable internal redirect paths instead of raw vendor URLs:

```text
/go/sleep-tracker/
/go/sleep-tracker-google-store/
/go/sleep-tracker-amazon/
/go/sleep-tracker-retailers/
/go/smart-bulbs/
/go/smart-plug/
```

These pages route visitors through stable internal product paths so the buttons are measurable and no longer broken. The sleep-tracker path presents region-safe options; the bulb and plug paths redirect to live-safe non-affiliate vendor pages. When Lumivox receives approved affiliate links, update the destination inside each `/go/.../index.html` file. Do not replace the public Sleep System button URLs with long affiliate URLs.

Current map:

| Product path | Current destination | Update later with |
|---|---|---|
| `/go/sleep-tracker/` | Region-safe Fitbit Inspire 3 options page | Amazon Associates, Fitbit/retailer, Best Buy, Walmart, or approved network affiliate link |
| `/go/sleep-tracker-google-store/` | Google Store Fitbit Inspire 3 page | Approved Google Store or retailer destination |
| `/go/sleep-tracker-amazon/` | Amazon Fitbit Inspire 3 search | Approved Amazon Associates destination |
| `/go/sleep-tracker-retailers/` | Broader Fitbit Inspire 3 retailer search | Approved regional retailer destination |
| `/go/smart-bulbs/` | Govee Smart A19 LED Bulbs product page | Govee affiliate link first, Amazon fallback |
| `/go/smart-plug/` | Kasa Smart EP25 product page | Amazon Associates, Best Buy/Walmart, or Kasa/TP-Link network affiliate link |

For the full affiliate and metrics plan, see:

```text
AFFILIATE_LINKS.md
LANE5_ROADMAP.md
METRICS_WEEKLY_TEMPLATE.csv
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
| Guide hub content | `guides/index.html` |
| New guide starter | `_templates/article-page.html` |

## Next recommended steps

1. Deploy the `/go/.../` redirect pages and confirm the three product buttons no longer 404.
2. Confirm every major CTA has a unique `data-track-id`.
3. Push the updated site to GitHub.
4. Test live clicks in the browser console.
5. Confirm Cloudflare Web Analytics shows page views for `/sleep-system/` and `/go/.../` product paths.
6. Apply to broad affiliate programs once the site is live and polished; use `/go/.../` metrics to support direct brand outreach later.
7. Add Cloudflare Zaraz, GA4, or Plausible later only when deeper conversion reporting is needed.

## Important note

The current setup is intentionally lightweight. Cloudflare Web Analytics is enough for early traffic validation. The custom tracking attributes prepare the site for more advanced event analytics later without forcing a paid analytics tool too early.
