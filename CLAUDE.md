# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Canonical instructions

This repository uses `AGENTS.md` as the single source of truth for agent behavior, guardrails, and workflow. Read it first, then:

1. `AGENTS.md` — non-negotiable rules, workflow, commit style, agent skills
2. `PROJECT_STATE.md` — current state and handoffs
3. `CONTEXT.md` — naming and content-modeling vocabulary (read before naming routes, components, or collections)
4. `docs/` — `vision.md`, `architecture.md`, `confidentiality.md`, `writing-style.md`, `design-principles.md`, `adr/`

Do not duplicate rules from `AGENTS.md` here. Update `AGENTS.md` when shared agent behavior changes.

## Critical guardrails (see AGENTS.md for full list)

- **Never publish confidential info.** No customer names, employer-private details, internal architecture/metrics, or anything exposing Akamai, Okta, Salesforce, customers, or partners. Generalize internal work to problem/approach/tradeoffs/lessons.
- **Static-first.** No CMS, database, auth, comments, or heavy client JS in the MVP.
- **No dependencies without a documented reason.**

## Commands

```bash
npm run dev       # local dev server (astro dev)
npm run build     # production build to dist/ — also type-checks content schemas
npm run preview   # serve the built site locally
```

No lint or test tooling is configured. `npm run build` is the verification gate: it validates frontmatter against the Zod content schemas and fails on schema or type errors. Run it before finishing a change.

## Architecture

Pure static Astro 7 site (`output: 'static'`, no SSR adapter) styled with Tailwind v4 via the Vite plugin. Content-first portfolio + field notebook.

- **Content collections** (`src/content.config.ts`) — two collections, `projects` and `field-notes`, both loaded from MDX/MD files via Astro's glob loader and sharing one `documentSchema` (`title`, `description`, `publishDate`, `draft`). Keep schema fields small and stable; changing them is a content-model decision (see `CONTEXT.md`).
- **Draft handling** — `draft` defaults to `true`. Drafts are excluded from production builds entirely (not generated, not linked) but visible in dev. The PROD filter lives in each collection page's `getStaticPaths`. There is no access control — unpublished means not built.
- **Routing** — file-based under `src/pages/`. Collection detail pages use dynamic routes (e.g. `projects/[...slug].astro`) that map `entry.id` to the slug and `render()` the MDX body.
- **Layout** — `src/layouts/BaseLayout.astro` is the single shared shell; pages pass `title`/`description`. Global styles in `src/styles/global.css`.

When adding content, prefer a new MDX file in the relevant `src/content/` collection over new page components.
