# ADR 0003: Demonstrate philosophy before documenting it — pages emerge from evidence

- Status: Accepted
- Date: 2026-06-27

## Context

The site is positioned as a Living Field Manual for customer-facing engineering,
and its conversion metric is Continued Curiosity (see `CONTEXT.md`). It is
tempting to lead with a philosophy/principles page and thematic hub pages that
state what kind of engineer Alan is. But every sentence on a philosophy page is a
*claim*, and sophisticated readers react with "show me" — they have read too many
personal sites full of beautiful principles that never materialize in the work.
The same applies to Themes (already deferred in ADR-0002).

## Decision

**The site demonstrates engineering philosophy before explicitly documenting it.
Editorial pages — philosophy/principles pages and Theme hubs — emerge from
published evidence rather than preceding it.**

Disclosure happens in layers, each earning the next:

1. **Homepage** — one sentence, one idea, one promise.
2. **About** — a *lens*, not a biography or manifesto: who Alan is and why he
   builds, giving readers a mental model (e.g. "a customer-facing Solutions
   Architect who believes recurring technical work should become systems, not
   routines"). No enumerated principles.
3. **Articles** — prove the ideas, repeatedly, through real stories.
4. **Field Manual / Principles page** — only *after* ~5–8 substantial articles
   exist, so each principle links to multiple real stories and reads as an earned
   observation, not an aspiration.

An **Editorial Canon** is maintained from day one as an **internal, unpublished**
author's compass (kept out of the published site — untracked, outside this repo;
see `docs/handoffs/content-architecture.md`). Every draft is checked against it for
consistency.

## Consequences

- No standalone philosophy/principles page or Theme hubs at launch.
- The homepage hero and About page carry the positioning; the flagship and early
  Field Notes carry the proof.
- Deferring the page preserves the freedom to be wrong: a principle like "Outsource
  Complexity" may evolve (e.g. into "Build Less") before it is ever canonised in
  public.
- This mirrors the engineering discipline applied throughout the work — don't build
  an abstraction until the code (here, the writing) has demonstrated the need.
- Generalises ADR-0002: editorial groupings (Series, Themes, Philosophy pages) are
  all earned from published work, never assumed up front.
