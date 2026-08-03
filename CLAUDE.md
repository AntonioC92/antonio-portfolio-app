# Caruso Martech — Antonio Portfolio App

## Project overview

React 18 + Vite 6 + TypeScript + styled-components v6, deployed on Cloudflare Pages.
Repository: `/Users/Antonio/antonio-portfolio-app`
Live site: `https://carusomartech.com`

## Stack rules (never break these)

- **Transient props**: styled-components v6 requires `$propName` prefix for all custom props passed to DOM elements (e.g. `$inView`, `$delay`, `$h`). Violating this causes React DOM warnings and TS errors.
- **Unused imports**: TypeScript strict mode throws TS6133 on any unused import or variable. Always remove imports that are no longer referenced.
- **Build check**: run `tsc -b` to verify TypeScript before committing. The sandbox cannot run `vite build` (Rollup native binary issue) — Cloudflare handles the actual build.
- **No em dashes**: brand rule. Use commas, periods, or colons instead. Never `—`.
- **Git lock workaround**: before every commit run `find .git -name "*.lock" -delete`.
- **Image assets**: never drop a raw export (logo, photo, icon) straight into `src/assets/`. A 2026-08-03 PageSpeed Insights audit found 8 MarTech-stack logos, an avatar photo, and 2 icons imported at their full multi-thousand-pixel export resolution while displayed at 30-140px, which alone drove mobile LCP to ~19s and the page payload to 4.1MB (fixed: rescaled to roughly 2-3x display size, converted to WebP; total dropped to ~100KB). Before adding a new raster image: resize to about 2-3x its actual display height/width, export as WebP (`Image.save(..., "WEBP", quality=85-90, method=6)` via Pillow, or an equivalent tool), and keep individual assets under ~50KB unless there's a specific reason not to. Always pass explicit `width`/`height` attributes on the `<img>` (matching the exported file's real pixel dimensions, not the CSS display size) so the browser can reserve layout space and avoid a layout shift. If the element's CSS sets `width: 100%` with no explicit `height`, also set `height: auto` (and `aspect-ratio: <w> / <h>` if precise reservation matters) on that image rule. Do not rely on `height:auto` implicitly, some global reset rules apply `object-fit: fill` and, combined with a `width`/`height` HTML attribute pair and no matching CSS height, the browser will use the HTML `height` attribute as the literal CSS height and stretch/distort the image into the wrong aspect ratio.
- **Color contrast**: don't put white text directly on the raw brand orange `colors.primary` (`#ff8164`) as a background/border/text color pairing, that combination is only 2.45:1 contrast, under the WCAG AA 4.5:1 minimum. Use `colors.primaryButtonBg` (`#c94618`) for that pairing instead (4.8:1 against white, 4.5:1+ against dark section backgrounds), with `colors.primaryButtonBgHover` (`#a83a13`) for its hover state. `colors.primary` itself is fine as a text/accent color against dark backgrounds, that's a different pairing and already passes.
- **Heading order**: every page's headings must descend one level at a time, no skipping (h1 → h2 → h3, never h1 → h3). When adding a new top-of-section subheading, default to `h2` unless there's already an `h2` earlier on that same page.

## Brand rules

- Voice: "we" throughout (consultancy brand), except the About page where "I" is used
- No "Fractional CMO" as a service description
- Primary colour: `#ff8164`
- Tone: direct, practical, no fluff. Write like a senior practitioner explaining to a peer.
- No academic or CV tone — the site is commercial, not portfolio
- Internal links use `/insights/[slug]` pattern

## Insights system

Blog posts live in `src/content/resources/*.md`. The `index.ts` in that folder uses `import.meta.glob` to pick up every `.md` file automatically — **no registration needed**. Just add the file with correct frontmatter and it appears on the site.

### Valid categories (exact strings required)

```
Acquisition Systems
AI Search & Experience
Automation & Intelligence
```

### Frontmatter spec (all fields required)

```markdown
---
title: "Full title of the article"
slug: "url-safe-slug-matching-filename"
description: "1–2 sentence description for the card on InsightsPage"
metaTitle: "SEO title (max 60 chars) | Caruso Martech"
metaDescription: "SEO meta description (max 155 chars). No marketing fluff."
date: "YYYY-MM-DD"
lastUpdated: "YYYY-MM-DD"
category: "One of the three valid categories above"
tags: "tag one, tag two, tag three"
---
```

The filename must match the slug: `src/content/resources/[slug].md`

### Existing articles (use for internal linking)

| Slug | Category | Title |
|------|----------|-------|
| `automating-marketing-workflows` | Automation & Intelligence | Automating Marketing Workflows: A Practical Guide |
| `attribution-challenges-2025` | Acquisition Systems | Attribution in 2026 |
| `modern-marketing-system-2025` | Automation & Intelligence | What a Modern Marketing System Actually Looks Like in 2026 |
| `ai-search-attribution-gap` | AI Search & Experience | The AI Search Attribution Gap |
| `martech-stack-audit` | Automation & Intelligence | How to Audit Your Martech Stack in a Day |
| `marketing-automation-readiness-checklist` | Automation & Intelligence | Marketing Automation Readiness Checklist |

Internal link format in body: `[anchor text](/insights/slug)`

### Post structure

1. **Opening paragraph** — state the problem without hedging. No "In today's world…" openers.
2. **`## Quick answer: [question]`** — 3–5 bullet points or short paragraph. Scannable.
3. **Body sections** (`##` headings) — practical, specific. Avoid generalities.
4. **Closing** — actionable next step or internal link to related post. No summary rehash.

Target length: 1,100–1,600 words. Paragraph rhythm: 2-3 sentences per paragraph by default (4 max), with deliberate sentence-length variation, see Writing rules below.

---

## Blog generation routine

Run this when told to "generate a blog post" or "write a new insight".

### Step 1 — Pick a topic

Open `BLOG_TOPICS.md`. Find the first item with status `[ ]` (pending). Note its topic, target keyword, and category.

### Step 2 — Write the post

Write a complete post following the frontmatter spec and post structure above. Apply all brand rules:
- No em dashes anywhere, including inside list items. Use a colon or comma instead.
- Practical, direct tone
- At least one internal link to an existing article
- "Quick answer" section as second heading

**Writing rules (non-negotiable):**

- **No contrast framing.** Never write "not X, it is Y" or "X, not Y." Say the positive thing directly and stop. This applies to body copy, section headings, bullet points, and list item labels. Examples of what to cut: "not a strategy problem, a visibility problem" → "a visibility problem". "not memory" → delete. "not a workshop series" from a heading → delete. "not just the admin" → delete. "not the cost savings. It is having X" → "The bigger win is having X."
- **No bold labels inside list items.** Write "Owner: description" not "**Owner** — description". Plain text only in bullets and numbered lists.
- **Section headings state what something is, not what it is not.** "Why this needs a day" not "Why this needs a day, not a workshop series."
- **Rewrite negative-positive sentence pairs into a single positive statement.** "You are not trying to X. You are trying to Y." → "Instead of X, you are trying to Y." or just "You are trying to Y."
- **No summary sentences at the end of sections.** The last sentence should land on something new, not echo what was just said.
- **Fluid prose, no AI sentence structures.** No "Let's be real:", no "Here's the truth:", no three-word staccato. Write like a practitioner explaining to a peer.
- **Never use "founder-led".** It is overused jargon. Say what you mean: "the founder runs sales", "the founder is the main point of contact", "a business where one person owns and operates everything", etc.
- **Paragraph rhythm (added 2026-07-30, per Antonio's direct feedback comparing house style to HubSpot's blog).** Keep paragraphs to 2-3 sentences by default, 4 only when one idea genuinely needs the room. Nothing at 5+ sentences or 90+ words, that reads as a dense wall of text. Inside a paragraph, vary sentence length on purpose: pair a short 6-12 word sentence with a longer 20+ word one instead of stringing together several similar-length sentences. Headers stay as frequent as the current structure calls for, this rule does not mean adding more bullets to the body.

### Step 3 — Save the file

Save to: `src/content/resources/[slug].md`

The slug must be URL-safe (lowercase, hyphens only, no special chars).

### Step 4 — Mark topic as done

In `BLOG_TOPICS.md`, change `[ ]` to `[x]` for the topic you used.

### Step 5 — Commit to a branch

Run these commands in order:

```bash
# Clear any git locks
find /Users/Antonio/antonio-portfolio-app/.git -name "*.lock" -delete

# Move into repo
cd /Users/Antonio/antonio-portfolio-app

# Get today's date
DATE=$(date +%Y-%m-%d)

# Create and switch to a new branch
git checkout -b blog/$DATE-[slug]

# Stage everything
git add -A

# Commit
git commit -m "Insight: [post title]"

# Push
git push -u origin blog/$DATE-[slug]
```

### Step 6 — Report back

Tell the user:
- Branch name pushed
- Post title and slug
- Word count
- Suggested PR title for GitHub merge

### After user merges

Cloudflare Pages auto-deploys from `main`. No further action needed — the new `.md` file is picked up by `import.meta.glob` automatically.

---

## Deployment strategy

**Two-track workflow:**

| Change type | Branch | Command |
|-------------|--------|---------|
| Site code (components, styles, copy, HTML files) | `main` directly | See "Deploy code change" below |
| Blog posts / insights | `blog/YYYY-MM-DD-slug` | Blog generation routine above |

Blog posts use branches so Antonio can review the post before it's indexed by Google. Code changes go straight to main — they're low risk and you want to see the result immediately.

### Deploy a code change (push to main)

```bash
find /Users/Antonio/antonio-portfolio-app/.git -name "*.lock" -delete
cd /Users/Antonio/antonio-portfolio-app
git add -A
git commit -m "describe what changed"
git push origin main
```

Cloudflare deploys automatically. Live in ~1–2 minutes.

### Merge and publish a blog post

After reviewing the Cloudflare preview URL, run:

```bash
cd /Users/Antonio/antonio-portfolio-app
gh pr merge --squash --delete-branch
```

Or open the PR on GitHub and click "Merge pull request".

---

## Common tasks

### TypeScript check before commit
```bash
cd /Users/Antonio/antonio-portfolio-app && tsc -b
```

### Fix git lock
```bash
find /Users/Antonio/antonio-portfolio-app/.git -name "*.lock" -delete
```

### See what's uncommitted
```bash
cd /Users/Antonio/antonio-portfolio-app && git status --short
```
