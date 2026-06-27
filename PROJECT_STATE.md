# Project State

Last updated: 2026-06-27

## Current milestone

Bootstrap Astro site (walking skeleton) — complete on `feat/bootstrap-astro-site`. Next: first real content and Cloudflare Pages connection.

## Current objective

Prepare the repository so Alan and AI coding agents can build the first deployable version of `alancota.net` without losing direction or exposing confidential information.

## Completed

- Created public GitHub repository: `alancota/alancota.net`
- Added initial README
- Added foundational docs:
  - `docs/vision.md`
  - `docs/roadmap.md`
  - `docs/architecture.md`
- Installed selected AI engineering skills locally and pushed initial workflow commit
- Added first guardrail files:
  - `AGENTS.md`
  - `CLAUDE.md`
  - `CONTEXT.md`
  - `PROJECT_STATE.md`
- Configured Matt Pocock engineering skills (`docs/agents/`: issue tracker, triage labels, domain docs)
- Bootstrapped the Astro walking skeleton on `feat/bootstrap-astro-site`:
  - Astro 7.x (latest stable) + TypeScript + Tailwind v4 (`@tailwindcss/vite`) + MDX, pure static output, no Cloudflare adapter
  - Content Layer API (`src/content.config.ts`) with `projects` and `field-notes` collections (ADR-0001)
  - Five routes (Home, Projects, Field Notes, About, Resume) + dynamic `projects/[...slug]` detail route
  - One non-draft sample project proving MDX rendering end-to-end in the production build
  - Dark-first `BaseLayout` with responsive nav, footer (dynamic year + GitHub link)
  - Just recipes (`dev`/`build`/`preview`); `check` runs the build
  - `npm run build` verified: 6 static pages emitted to `dist/`

## Next recommended step

Open a PR for `feat/bootstrap-astro-site`, then start focused follow-up branches:

- First real public-safe project case study and first field note (replacing the placeholder)
- `build/cloudflare-pages`: connect Cloudflare Pages (build `npm run build`, output `dist/`)
- Later quality gates: `astro check`, lint, tests folded into `just check`

## Established Decisions

The following decisions are considered settled unless Alan explicitly reopens them.

### Platform

- Astro
- TypeScript
- Tailwind CSS
- MDX
- Cloudflare Pages

### Engineering

- Static-first
- Content-first
- Dark-first
- Git worktrees
- Just
- Conventional Commits

### Editorial

- Engineering notebook
- Public-safe case studies
- No confidential information

## MVP target

A simple, deployable site with:

- Home page
- Projects index
- Field Notes index
- About page
- Resume page or placeholder
- Basic layout, navigation, and footer
- MDX-ready content structure
- Cloudflare Pages-ready build

## Open questions

- Resolved: dark-first (dark-only for now; light mode deferred). See Established Decisions.
- Should resume be a static PDF in `public/resume/` or a page generated from content?
- Should first deploy happen before content is polished, or only after one project and one field note are drafted?

## Risks

- Over-polishing design before content exists
- Accidentally exposing internal employer/customer details
- Installing too many agent skills or dependencies too early
- Turning the site into a resume instead of an engineering notebook

## Current operating principle

Content first. Design second. Polish third.
