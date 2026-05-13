# Lumivox multipage GitHub Pages site

This version splits the original single-page JavaScript site into real pages:

- `/` → Home
- `/sleep-system/` → Sleep System
- `/about/` → About

Reusable blocks:
- `_includes/nav.html`
- `_includes/footer.html`
- `_layouts/default.html`

Shared assets:
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/videos/`

## To deploy

1. Copy these files into your GitHub Pages repo.
2. Upload your videos to `assets/videos/`.
3. Commit and push to `main`.
4. Let GitHub Pages rebuild.

## Update affiliate links

Search for:

- `REPLACE_WITH_AFFILIATE_LINK_WEARABLE`
- `REPLACE_WITH_AFFILIATE_LINK_SMART_BULBS`
- `REPLACE_WITH_AFFILIATE_LINK_SMART_PLUG`

Replace each with the correct affiliate URL.
