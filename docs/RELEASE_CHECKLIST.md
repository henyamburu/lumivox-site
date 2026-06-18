# Lumivox Release Checklist

_Last updated: 2026-05-30_

Use this before merging, publishing, or deploying Lumivox website changes.

## Release Type

Mark the type of release:

- [ ] Documentation only.
- [ ] Content update.
- [ ] CSS/layout update.
- [ ] Tracking/link update.
- [ ] Media update.
- [ ] Mixed release.
- [ ] Deployment/config update.

## Pre-Release Review

- [ ] Scope matches the original task.
- [ ] No unrelated files changed.
- [ ] No accidental formatting churn.
- [ ] No placeholder text left behind.
- [ ] No broken HTML structure.
- [ ] No secrets, API keys, or private IDs exposed.
- [ ] No invented affiliate IDs.

## Analytics and Tracking

- [ ] Cloudflare Web Analytics script remains present if it existed before.
- [ ] Analytics script is not duplicated.
- [ ] Tracking attributes are preserved on existing CTAs.
- [ ] New CTAs have tracking attributes where appropriate.
- [ ] `/go/` routes still work.
- [ ] Product links go to intended destinations.

## Content and Claims

- [ ] No medical treatment/cure/diagnosis claims.
- [ ] No unsupported product specs.
- [ ] No unsupported pricing claims.
- [ ] Product limitations are included where relevant.
- [ ] Affiliate disclosure is present where needed.
- [ ] Tone is practical and trustworthy.

## Page Testing

- [ ] Home page checked.
- [ ] Sleep System page checked.
- [ ] About page checked.
- [ ] Start Here page checked if present.
- [ ] Products page checked if present.
- [ ] Changed article pages checked.
- [ ] 404 or missing-route behavior checked if relevant.

## Mobile Testing

- [ ] 375px width checked.
- [ ] 390px width checked.
- [ ] 414px width checked.
- [ ] Tablet width checked.
- [ ] Desktop width checked.
- [ ] No horizontal scrolling.
- [ ] Buttons are tappable.
- [ ] Product cards stack correctly.

## Link Testing

- [ ] Main nav links.
- [ ] Mobile nav links.
- [ ] Footer links.
- [ ] Hero CTAs.
- [ ] Product CTAs.
- [ ] Article internal links.
- [ ] YouTube/video links.
- [ ] `/go/` redirects.

## Documentation Updates

- [ ] `DEV_LOG.md` updated.
- [ ] `BACKLOG.md` updated.
- [ ] `PROJECT_STATE.md` updated if structure changed.
- [ ] `DECISIONS.md` updated if a new decision was made.
- [ ] `AFFILIATE_TRACKING.md` updated if tracking changed.
- [ ] `CONTENT_WORKFLOW.md` updated if content workflow changed.

## Release Notes Template

```md
# Release Notes — YYYY-MM-DD

## Summary

-

## Files Changed

-

## Checks Performed

-

## Known Issues

-

## Next Recommended Task

-
```

## Do Not Release If

- Main navigation is broken.
- Product CTAs are broken.
- `/go/` routes return errors.
- Cloudflare analytics was accidentally removed.
- A product page contains unsupported current specs/prices.
- A page makes medical claims.
- Mobile layout is visibly broken.
- The release includes unrelated edits that cannot be reviewed cleanly.
