# Lumivox /go Redirect Pages

These pages are the lightweight Phase 1 tracking layer for product interest.

## Current redirect paths

| Product path | Current destination | Future affiliate destination |
|---|---|---|
| `/go/sleep-tracker/` | Google Store Fitbit Inspire 3 page | Amazon Associates, Fitbit partner link, Best Buy, Walmart, or approved network link |
| `/go/smart-bulbs/` | Govee Smart A19 LED Bulbs page | Govee affiliate link, Amazon Associates, Best Buy, Walmart, or approved network link |
| `/go/smart-plug/` | Kasa Smart EP25 product page | Amazon Associates, TP-Link/Kasa affiliate link, Best Buy, Walmart, or approved network link |

## Why these exist

Cloudflare Web Analytics does not provide custom button-event reporting by itself. These pages convert product button clicks into measurable page views. In Cloudflare, look for page traffic on:

```text
/go/sleep-tracker/
/go/smart-bulbs/
/go/smart-plug/
```

## How to replace a destination

Open the relevant `index.html` file and change only the `href` on the `continue-link` anchor:

```html
<a class="button" id="continue-link" href="PASTE_APPROVED_AFFILIATE_LINK_HERE" rel="sponsored nofollow noopener">
```

Leave the `/go/.../` URL in the public product buttons. That keeps the website clean and preserves historical metrics even when destination vendors change.

## Redirect timing

Each page waits about 1.2 seconds before redirecting. This gives the Cloudflare beacon a better chance to count the visit and gives users a visible fallback link if the redirect is blocked.
