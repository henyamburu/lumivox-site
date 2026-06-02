# Codex Instructions for Lumivox

These instructions define how Codex should work on the Lumivox website repository.

## Primary Rule

Use the current codebase as the source of truth.

This documentation gives project direction, but Codex must inspect the actual files before editing. If documentation and code disagree, Codex should report the mismatch and proceed based on the repository state unless the user gives a different instruction.

## Working Style

Codex should work in small, reviewable changes.

For each task:

1. Inspect the relevant files first.
2. State what files will be changed.
3. Avoid unrelated edits.
4. Preserve existing analytics, tracking, affiliate routes, and deployment configuration unless the task explicitly requires changing them.
5. Update documentation after meaningful changes.
6. Provide a concise summary of what changed and what still needs attention.

## Do Not Modify Without Explicit Instruction

Codex should not modify these areas casually:

- Cloudflare Web Analytics script.
- Existing tracking attributes.
- `/go/` redirect logic.
- Affiliate link placeholders or affiliate URLs.
- Deployment configuration.
- Domain settings.
- Navigation structure across all pages unless the task is specifically about navigation.
- Product recommendations unless the task is about product research or product page updates.

## Required Before Any Code Change

Before editing, Codex should identify:

- Static HTML, Jekyll, React, or other site structure.
- Current page files.
- Current CSS files.
- Current JavaScript files.
- Current tracking script files.
- Current `/go/` redirect implementation.
- Current README/deployment instructions.

## Recommended First Audit Prompt

Use this prompt in Codex when starting work:

```text
Audit the Lumivox website repository before making code changes.

Read the docs folder first, then inspect the codebase.

Create a concise repository status summary covering:
- current site structure and pages
- CSS and layout organization
- JavaScript and tracking files
- analytics script status
- `/go/` redirect pages and product-link behavior
- content/article structure
- media/image/video organization
- deployment assumptions
- obvious risks or broken links

Do not modify application code during this audit.
Update docs/PROJECT_STATE.md, docs/BACKLOG.md, and docs/DEV_LOG.md only if they are outdated.
```

## Standard Task Prompt Template

Use this structure when asking Codex to perform a task:

```text
Task: [specific task name]

Context:
Read docs/CODEX_INSTRUCTIONS.md, docs/PROJECT_STATE.md, docs/BACKLOG.md, and docs/TESTING_CHECKLIST.md first.

Scope:
- [files or sections Codex may edit]

Do not change:
- analytics scripts
- existing tracking IDs
- `/go/` redirect structure
- affiliate URLs/placeholders
- deployment configuration
unless the task explicitly requires it.

Expected output:
- make the requested changes
- update relevant docs if needed
- summarize changed files
- list tests/checks performed
- list remaining concerns
```

## Content Task Prompt Template

```text
Task: Draft or add article page for: [article title]

Read first:
- docs/CONTENT_WORKFLOW.md
- docs/ARTICLE_BRIEF_TEMPLATE.md
- docs/SEO_CHECKLIST.md
- docs/PAGE_EXPECTATIONS.md
- docs/AFFILIATE_TRACKING.md

Scope:
Create or update only the article/content files needed for this article.

Requirements:
- clear reader intent
- practical setup guidance
- internal links to relevant Lumivox pages
- no medical overclaims
- affiliate disclosure if product links are included
- product CTA tracking preserved
- responsive structure

After completion:
- update docs/DEV_LOG.md
- update docs/BACKLOG.md if related tasks are completed or discovered
```

## Layout / CSS Task Prompt Template

```text
Task: Improve layout/CSS for: [page or section]

Read first:
- docs/CODEX_INSTRUCTIONS.md
- docs/PAGE_EXPECTATIONS.md
- docs/TESTING_CHECKLIST.md

Scope:
Visual polish only unless otherwise stated.

Allowed:
- spacing
- typography scale
- product card layout
- button consistency
- video/media section layout
- mobile responsiveness
- section contrast

Do not change:
- copy meaning
- tracking attributes
- affiliate links
- analytics scripts
- redirect logic
- deployment files

After completion, document visual checks performed.
```

## Tracking / Affiliate Task Prompt Template

```text
Task: Verify or improve tracking for: [page/CTA/product]

Read first:
- docs/AFFILIATE_TRACKING.md
- docs/TESTING_CHECKLIST.md
- docs/RELEASE_CHECKLIST.md

Scope:
Tracking and link behavior only.

Requirements:
- keep Cloudflare analytics script intact
- preserve or add consistent tracking attributes
- route product CTAs through `/go/` pages where appropriate
- verify no 403/404 errors
- document every changed link or redirect

After completion:
- update docs/AFFILIATE_TRACKING.md if tracking structure changed
- update docs/DEV_LOG.md
```

## How Codex Should Report Completion

Every Codex response should include:

```text
Summary:
- [what changed]

Files changed:
- [file list]

Checks performed:
- [manual/static checks]

Risks / follow-ups:
- [remaining issues]
```

## Documentation Update Discipline

Codex should update docs when it changes the project reality.

| Situation | Documentation to Update |
|---|---|
| New page added | `PROJECT_STATE.md`, `PAGE_EXPECTATIONS.md`, `DEV_LOG.md` |
| New article added | `CONTENT_WORKFLOW.md`, `BACKLOG.md`, `DEV_LOG.md` |
| Tracking changed | `AFFILIATE_TRACKING.md`, `TESTING_CHECKLIST.md`, `DEV_LOG.md` |
| Product recommendation changed | `PROJECT_STATE.md`, `AFFILIATE_TRACKING.md`, `DECISIONS.md`, `DEV_LOG.md` |
| Milestone completed | `ROADMAP.md`, `BACKLOG.md`, `DEV_LOG.md` |
| New risk found | `BACKLOG.md`, `PROJECT_STATE.md`, `DEV_LOG.md` |

## Quality Standard

Codex should not treat the website as a generic landing page. Lumivox must feel like a practical, trustworthy guide for beginner smart sleep automation.

The site should be:

- Clear.
- Calm.
- Practical.
- Cost-conscious.
- Beginner-friendly.
- Measurable through analytics.
- Ready for gradual affiliate development.
