# Lumivox — Theme & Component Reference

Premium editorial theme. One accent (deep teal) over a warm paper neutral scale.
All values are CSS custom properties defined in `:root` in `assets/css/style.css`.
Change a token there and it cascades site-wide.

---

## 1. Token schema

### Brand / accent
| Token | Value | Purpose |
|---|---|---|
| `--accent` | `#1e6e60` | Primary brand teal. Links, CTAs, active states, markers, focus ring. |
| `--accent-dark` | `#18564b` | Hover/pressed accent, article link color, active TOC text. |
| `--accent-soft` | `rgba(30,110,96,0.08)` | Faint teal wash — table headers, medical note, outline-button hover. |
| `--accent-mid` | `rgba(30,110,96,0.18)` | Stronger teal tint / borders. |
| `--lv-gradient-cta` | `linear-gradient(180deg,#237b6c,#1a6055)` | Filled button + nav CTA fill. |
| `--lv-gradient-brand` | `linear-gradient(90deg,transparent,rgba(30,110,96,0.55),transparent)` | Thin accent rules/dividers. |

> Legacy aliases `--lv-blue`, `--lv-cyan`, `--lv-violet` all now point to `#1e6e60`. They remain only so older selectors keep working; treat `--accent` as the source of truth.

### Alert / safety
| Token | Value | Purpose |
|---|---|---|
| `--lv-pink` | `#b4532e` | Warm clay. Safety notes, "not the right first step" boxes, occasional warm hover. **Use sparingly — it signals caution.** |

### Neutral surfaces (warm paper scale)
| Token | Value | Purpose |
|---|---|---|
| `--lv-bg-0` / `--lv-paper` | `#faf8f3` | Page background (warm ivory). |
| `--lv-bg-1` / `--off-2` | `#f4f0e8` | Tinted section bands, quiet note backgrounds. |
| `--lv-bg-2` | `#efeae0` | Deeper tint (rare). |
| `--lv-bg-3` / `--white` | `#ffffff` | Raised surfaces — cards, panels, tables. |
| `--off` | `#fbf9f4` | Subtle off-white. |

### Ink (text)
| Token | Value | Purpose |
|---|---|---|
| `--lv-text` / `--ink` | `#232020` | Headings + primary text (warm near-black). |
| `--ink-80` | `#3a3531` | Strong secondary text. |
| `--lv-muted` / `--ink-60` | `#595450` | Lead paragraphs, nav links, UI body. |
| `--lv-soft` / `--ink-40` | `#8a847e` | Captions, TOC label, metadata. |
| `--ink-30` | `#b8b1a7` | Disabled / faint text. |
| *(reading body)* | `#322d29` | Article serif body (set on `.article-body p,li`). |
| *(standfirst)* | `#2a2622` | Opening article paragraph. |

### Borders
| Token | Value | Purpose |
|---|---|---|
| `--lv-card-border` / `--border` / `--ink-08` | `#e7e1d7` | Default hairline on everything. |
| `--lv-card-border-strong` / `--border-strong` | `#d8d0c3` | Outline buttons, emphasis borders. |

### Highlight (skim/summary boxes)
| Token | Value | Purpose |
|---|---|---|
| `--lv-highlight-bg` | `#f6eedd` | Warm "highlighter" fill for Key Takeaways / summary. |
| `--lv-highlight-border` | `#e7d7b6` | Border for the same. |
| `--lv-highlight-ink` | `#8a6516` | Amber accent text inside highlight boxes. |

### Typography
| Token | Value | Purpose |
|---|---|---|
| `--lv-serif-display` | `"Fraunces", Georgia, serif` | All headings (h1–h4), logo, room-panel title. |
| `--lv-serif-read` | `"Source Serif 4", Georgia, serif` | Long-form article reading body. |
| `--lv-sans` | `"Inter", system-ui, …` | All UI, leads, nav, buttons, labels, tables. |

Weights: h1/h2 = 500, h3/h4 = 600, hero `<em>` = 400 italic teal. UI weights 500–600.

### Radius
| Token | Value |
|---|---|
| `--r-sm` | `8px` |
| `--r-md` | `12px` (cards, notes, tables) |
| `--r-lg` | `16px` (panels) |
| `--r-xl` | `22px` (hero visual) |
| `--r-pill` | `999px` (buttons, nav CTA) |

### Shadows (soft, neutral — no glow)
| Token | Value | Purpose |
|---|---|---|
| `--lv-shadow-glow` | `0 1px 2px rgba(40,33,28,0.04)` | Minimal lift. |
| `--lv-shadow-card` / `--shadow-sm` | `0 1px 2px …/0 14px 34px -18px rgba(40,33,28,0.18)` | Standard card. |
| `--shadow-md` | `… 0 22px 48px -24px rgba(40,33,28,0.22)` | Hover lift. |
| `--shadow-lg` | `… 0 34px 70px -30px rgba(40,33,28,0.26)` | Hero visual. |

---

## 2. Per-component theme

| Component | Surface / background | Border | Text | Accent treatment | Type | Radius / shadow |
|---|---|---|---|---|---|---|
| **Page** | `#faf8f3` + faint teal top vignette `rgba(30,110,96,0.045)` | — | `#232020` | — | — | — |
| **Nav bar** | `rgba(250,248,243,0.82)` + blur | bottom `#e7e1d7` | links `#595450`→`#232020` | teal underline slides in on hover; CTA = teal gradient | logo serif; links Inter 500 | — |
| **Logo** | — | — | `#232020` | trailing dot `#1e6e60` (no glow) | Fraunces 600, 21px | — |
| **Eyebrow label** | transparent | — | `#1e6e60` | leading 22px teal dash | Inter 600, 12px, `.16em` uppercase | — |
| **Button — filled** (`.btn-dark`,`.pc-btn`,`.nav-cta`) | gradient `#237b6c→#1a6055`, hover `#1f7163→#165449` | — | `#ffffff` | — | Inter 600 | pill; soft shadow on hover |
| **Button — outline** | `#ffffff`, hover `accent-soft` | `#d8d0c3`→`#1e6e60` | `#232020`→`#18564b` | — | Inter 600 | pill |
| **Card** (problem/method/system/flow/trust/guide) | `#ffffff` | `#e7e1d7` | h3 `#232020`, body `#595450`, link `#1e6e60`→`#b4532e` | — | h3 Fraunces 600; body Inter | `--r-lg` + `--shadow-card` |
| **Hero visual / room panel** | white→`#f8f5ef` + faint teal radial | `#e7e1d7` | label teal; title `#232020` | numbered markers = solid teal circles, white digits | title Fraunces 500 | `--r-xl`/`--r-lg` |
| **Section band** (`.sec-bg`, guides list) | `#f4f0e8` | top/bottom `#e7e1d7` | — | — | — | — |
| **H1 / H2 / H3** | — | — | `#232020` | hero `<em>` = `#1e6e60` italic | Fraunces 500 / 500 / 600 | — |
| **Lead paragraph** | — | — | `#595450` | — | Inter, 16–20px, 1.65 | — |
| **Article reading body** | page | — | `#322d29` | links `#18564b` underlined teal (`rgba(30,110,96,0.35)`)→`#1e6e60` | Source Serif, 18px, 1.74 | — |
| **Standfirst** (opening ¶) | — | — | `#2a2622` | — | Source Serif, 20px, 1.6 | — |
| **TOC — "On this page"** | `#ffffff` card; sticky rail ≥1080px | `#e7e1d7` | label `#8a847e`; links `#595450` | hover teal; **active** `#18564b` + 2px teal left-border, weight 600 | label Inter 600 uppercase; links Inter 500 | `--r-md` + `--shadow-card` |
| **Reading progress bar** | track transparent | — | — | fill `#1e6e60`, fixed under nav, 2px | — | — |
| **Table** | wrap `#ffffff` | `#e7e1d7`; rows top-border `#e7e1d7` | cells `#595450`; head `#232020` | `thead` tint `accent-soft` `rgba(30,110,96,0.08)` | Inter | `--r-md` + `--shadow-card` |
| **Note — default** (`.article-note`) | `#f4f0e8` | `#e7e1d7` | `#595450` | — | mixed | `--r-md` |
| **Note — medical** | `accent-soft` teal wash | `rgba(30,110,96,0.28)` | `#595450` | teal-toned | — | `--r-md` |
| **Note — safety** | `rgba(180,83,46,0.08)` clay wash | `rgba(180,83,46,0.28)` | `#595450` | clay caution | — | `--r-md` |
| **Key takeaways / summary** | `#f6eedd` highlight | `#e7d7b6` + **3px `#1e6e60` left border** | li `#4a4036` | teal anchor, amber context | h2 Fraunces | `--r-md`, no shadow |
| **Disclosure block** | `#f4f0e8` (quiet) | `#e7e1d7` | body `#595450` | heading = soft-grey uppercase label | label Inter 600 | `--r-md`, no shadow |
| **Footer** | `rgba(250,248,243,0.72)` + blur | top `#e7e1d7` | links `#595450`→`#1e6e60`; copy `#8a847e` | — | logo serif; rest Inter | — |
| **`go/` redirect pages** | `#faf8f3` page, `#ffffff` card | `#e7e1d7` | `#232020` / `#595450` | pill + CTA teal `#237b6c→#1a6055` | h1 system serif | 24px card |
| **Focus ring (a11y)** | — | — | — | `2px solid #1e6e60`, 3px offset | — | — |

---

## 3. Usage rules of thumb

- **Teal is the only accent.** If something needs emphasis (link, CTA, active nav, marker), it's teal. Don't introduce a second hue for variety.
- **Clay (`#b4532e`) means caution.** Reserve it for safety/medical-limit/"not for you" content so the signal stays meaningful.
- **White = a thing you can act on** (card, table, panel). **Sand `#f4f0e8` = a quiet zone** (section band, note, disclosure). Alternate them for rhythm.
- **Warm cream `#f6eedd` = the payoff.** Used only on summary/takeaway boxes so a skimming reader's eye lands on the gist — this is the conversion hook.
- **Serif headings + serif reading body, sans everything else.** Don't set UI controls in serif or article prose in sans.
- **No glows.** Lift comes from soft neutral shadows only.
