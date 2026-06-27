# ADR 0002: Series are an editorial collection, decoupled from articles

- Status: Accepted
- Date: 2026-06-27

## Context

The site's conversion metric is Continued Curiosity — "I want to read one more
article" (see `CONTEXT.md`). Two mechanisms compete to produce it: **Themes**
(philosophy-level grouping pages) and **Series** (narrative reading paths).

Themes are tempting but are a *hypothesis* about Alan's recurring ideas before
enough has been written to validate them. Formalizing themes early freezes a
worldview into top-level navigation and URLs, creating link debt when a guessed
pillar turns out wrong. Readers also consume narratives, not taxonomies — like
episodes, not "another video in a category."

## Decision

The site begins with format-based collections only: **Projects** and **Field
Notes**. Editorial groupings are decoupled from the content model:

- **Series** will be introduced later as a **separate collection**, once at least
  **two published entries** form a meaningful editorial sequence. A series entry
  owns its `title`, `description`, and an **ordered list of member article slugs**
  (e.g. `{ collection, slug }`). **Series membership and ordering live in the
  series entry, not in article frontmatter.** Articles remain standalone
  artifacts; a Field Note stays a Field Note, unaware it is "part 3." An article
  may appear in more than one series, but this is discouraged by convention.
- **Themes** are deliberately deferred. Revisit only after roughly **25–40
  published pieces**, when themes reflect the actual body of work rather than a
  guess. Until then, Series plus editorial sequencing (strong flagship →
  "Continue the journey" → next logical read → contextual related-reading links)
  do this job.

## Considered Options

- **Article frontmatter (`series` + `order`)** — rejected: pollutes every article
  with navigation concerns and implies the article is *defined by* its series.
- **Hand-authored editorial pages** — rejected: philosophically pure but fragile
  (manual ordering, silently rotting links, no validation).
- **Series collection (chosen)** — keeps articles clean while giving curated
  reading paths, next/previous navigation, validated links, and stable arcs from
  a single source of truth.

## Consequences

- No `series`/`order` fields are added to the Project or Field Note schemas.
- Reordering or re-curating a series is a one-file edit to the series entry.
- Nothing is built now (YAGNI): the shape is decided, the code waits until a real
  two-piece arc exists.
- Top-level navigation is not committed to a thematic worldview prematurely.

## Related principle

Series exist to serve a broader design thread: **every artifact points one level
deeper — nothing exists in isolation** (homepage → flagship → Series → Field Notes;
resume → flagship; About → philosophy). This is how Continued Curiosity becomes
concrete, and it applies equally to navigation, content architecture, and future
expansion. See `CONTEXT.md` → "Every Artifact Points Deeper".
