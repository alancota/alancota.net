# Project State

Last updated: 2026-06-27

## Current milestone

MVP foundation and guardrails.

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

## Next recommended step

Create the first implementation branch and bootstrap the Astro project using the repository guardrails.

Recommended branch:

```bash
git checkout -b feat/bootstrap-astro-site
```

Then ask the coding agent to implement the first Astro MVP structure.

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

- Should the initial site be dark-mode-only or dark-first with light mode support?
- Should resume be a static PDF in `public/resume/` or a page generated from content?
- Should first deploy happen before content is polished, or only after one project and one field note are drafted?

## Risks

- Over-polishing design before content exists
- Accidentally exposing internal employer/customer details
- Installing too many agent skills or dependencies too early
- Turning the site into a resume instead of an engineering notebook

## Current operating principle

Content first. Design second. Polish third.
