# ADR 0001: Adopt Astro 5 Content Layer API

- Status: Accepted
- Date: 2026-06-27
- Note (2026-06-27): During bootstrap, `npm create astro@latest` / `@latest`
  resolved to Astro 7.x — the current stable major. Per the original intent
  ("latest stable, longest support runway"), this ADR adopts Astro 7.x rather
  than 5.x. The Content Layer API is the standard (legacy collections removed)
  in Astro 7, so the decision below is unchanged in substance.

## Context

The bootstrap branch establishes the content model for `alancota.net`, including
the `projects` and `field-notes` content collections. This decision dictates how
collection schemas are authored and how every future content page queries them,
so it is hard to reverse once content and pages are built on top of it.

Astro 5 replaced the legacy collections API (`src/content/config.ts` with
`type: "content"`) with the Content Layer API (`src/content.config.ts` with
`loader` functions); by Astro 7 the legacy API is removed and the Content Layer
API is the only supported path. Building on the legacy pattern would be
born-deprecated, and mixing the two is painful.

## Decision

Standardize the project on:

- Astro 7.x (latest stable), scaffolded via `npm create astro@latest`
- Content Layer API in `src/content.config.ts`
- `defineCollection()` with `glob()` loaders imported from `astro/loaders`
- Schemas defined with `z` from `astro/zod`
- `getCollection()` for querying collections
- npm as the package manager
- `.nvmrc` pinned to Node 22 LTS so local and Cloudflare Pages builds match

The legacy `src/content/config.ts` and `type: "content"` patterns are not used.

## Consequences

- Longest support runway and alignment with the currently documented Astro path.
- No deprecated APIs in the codebase from day one.
- Collection schemas use the loader pattern, not the legacy `type: "content"` pattern.
- Local and CI/Cloudflare builds share a pinned Node version, reducing drift.
- If shared theme tokens or additional collections are needed later, they extend
  this same Content Layer foundation rather than replacing it.
