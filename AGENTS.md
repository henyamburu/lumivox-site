# Lumivox AI Agent Guide

This repository is a static GitHub Pages website built with HTML, CSS, JavaScript, Jekyll layout/includes, and a small local preview server.

## What an AI agent must know first

- Read `docs/CODEX_INSTRUCTIONS.md` before making changes.
- Use `docs/README.md` and the linked docs in `docs/` as the project memory.
- When docs conflict with source files, treat the repo files as authoritative and note the mismatch.
- Preserve the existing analytics, `/go/` redirect pages, and tracking convention unless the user explicitly asks to change them.

## Local development commands

- `npm run dev` or `npm run preview` to start the local preview server via `tools/local-preview-server.js`
- `npm run vite` to launch Vite on `127.0.0.1:8000`

## Key repo patterns

- Static content lives in the root HTML pages, `guides/`, and `go/`.
- Shared layout and reusable page sections use Jekyll includes under `_layouts/` and `_includes/`.
- Tracking event attributes are defined in `assets/js/analytics.js` and added to HTML elements with `data-track`, `data-track-id`, `data-category`, `data-label`.
- Product/affiliate readiness uses stable internal redirect paths under `/go/`.

## Coding and editing guidance

- Do not add frameworks, new build tooling, or complex CMS behavior unless explicitly requested.
- When editing content or pages, keep changes small and reviewable.
- Do not replace internal `/go/` routes with raw external affiliate URLs unless the user gives explicit affiliate link instructions.
- Do not remove or rewrite the Cloudflare analytics beacon casually.
- Keep page copy practical and helpful, not hype-driven.

## Important files

- `index.html`, `sleep-system.html`, `about.html`, plus guide and article pages
- `_layouts/default.html`
- `_includes/nav.html`, `_includes/footer.html`, `_includes/youtube-embed.html`
- `assets/css/style.css`
- `assets/js/main.js`, `assets/js/analytics.js`
- `go/` redirect page directories
- `docs/CODEX_INSTRUCTIONS.md`
- `docs/PROJECT_STATE.md`, `docs/BACKLOG.md`, `docs/DECISIONS.md`, `docs/TESTING_CHECKLIST.md`

## Documentation rules for agents

- Update `docs/DEV_LOG.md` after meaningful work.
- Update `docs/BACKLOG.md` when tasks are discovered or completed.
- Update `docs/PROJECT_STATE.md` when the site structure, tracking setup, product stack, or content architecture changes.
- Document new decisions in `docs/DECISIONS.md` when project direction changes.

## When focusing on "codex"

This repository already includes Codex-specific guidance. If the user asks for Codex-related work, prioritize `docs/` files and follow the internal Codex rules before editing live pages.
