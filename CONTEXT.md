# Project Context

This file defines the shared language for `alancota.net`. It is a glossary, not a spec or scratchpad.

## Glossary

### alancota.net
Alan Cota's personal website and professional home on the internet. It documents projects, field notes, technical thinking, and resume links.

### Engineering Notebook
The editorial **form and voice** of the site: it should read like a thoughtful engineering notebook, not a flashy portfolio template or a personal diary. (How it reads.) Complemented by [[Living Field Manual]], which describes what the site *is*.

### Living Field Manual
The editorial **purpose and positioning** of the site: a compounding field manual for customer-facing engineering — *not* a portfolio. A portfolio goes stale as jobs change; a field manual grows richer as experience compounds, which matches the evidence in the body of work and gives the site a much longer shelf life. (What it is.) The [[Engineering Notebook]] is the form; the Living Field Manual is the function.

### Ideal Reader
The primary audience the site is written for: experienced customer-facing technical professionals who believe software and automation can multiply their impact — Solutions Architects, Sales Engineers, Customer Engineers, Forward Deployed Engineers, Field CTOs, tool-building Technical Account Managers, Developer Advocates, Platform Architects. Explicitly *not* written for junior engineers, competitive-programming/LeetCode readers, or generic recruiters (they may enjoy it but do not dictate editorial direction). See [[Reader Tiers]].

### Reader Tiers
Ranked audiences. Tier 1: customer-facing technical professionals (the [[Ideal Reader]] — they recognize the pain instantly). Tier 2: hiring managers (future manager, not recruiter — thinking "this person solves problems nobody assigned him"). Tier 3: software engineers (appreciate the architecture, but not why the stories exist). Tier 4: recruiters (skim; served by About, Resume, and project summaries only).

### The Question The Site Answers
The single niche the site explores: **"How do I create leverage in customer-facing technical roles?"** — not "how do I build distributed systems." The rare perspective is the person who spends mornings with customers, afternoons debugging integrations, evenings automating tomorrow's demo, constantly translating between business and technology.

### Spine Sentence
The single sentence that defines the entire site, in Alan's hero voice:

> **I solve hard technical problems once, then build systems that keep solving them.**

Hero subheading (about the content, not the person): *"Customer-facing architecture, internal tooling, AI workflows, and engineering systems that turn experience into reusable leverage."*

Chosen because it is role-, technology-, and industry-independent — it describes *how Alan thinks*, so it survives career pivots (API security today, AI agents tomorrow). It hooks rather than explains: enough intrigue to scroll, not a summary of the site. Philosophy-mode restatements that may appear as taglines or section headers: *"Every recurring problem is a system waiting to be built."* / *"I don't like solving the same problem twice."*

### Leverage
The site's core concept and organizing theme: **building systems that keep producing value after you've walked away.** This is the common denominator across all of Alan's work. Distinguish from [[Friction Elimination]], which is only *one* mechanism for creating leverage — platform thinking, reusable architecture, codifying knowledge, and improving how a field team operates are leverage too, and are not automation. When in doubt, frame work as leverage, not as friction removal.

### Friction Elimination
One mechanism (among several) for creating [[Leverage]]: removing repetitive manual work via automation. Real but narrow — do not let it stand in for the broader [[Leverage]] thesis. Octopus and the Slides automation are friction-elimination; BlindSpot Labs and this website are leverage *without* friction-elimination.

### Reader Transformation
The success test. After an hour on the site a reader should think: *"I never thought about Solution Engineering that way. This is someone who doesn't just solve customer problems — they build systems that permanently eliminate recurring friction."*

### Continued Curiosity
The site's real conversion metric. The desired reader action is **"I want to read one more article,"** not "Contact Alan." Hiring, speaking, and collaboration are downstream consequences of curiosity, not the optimization target. Realized architecturally via [[Every Artifact Points Deeper]]. **Refined (Phase 3):** *"read one more"* is the **website** metric; the deeper **editorial** conversion is *"continue observing"* — the reader leaves with a changed habit of perception. If the mind changed, the next click usually follows; the reverse is not true. A spine piece's ending therefore **lingers** (it refuses to finish the thought — the last movement happens after the reader leaves) rather than *invites* (asks for a click). Cross-linking is load-bearing but lives in page *chrome*, never in prose the story depends on.

### Every Artifact Points Deeper
The site's unifying design principle: **every page invites the reader one level deeper; nothing exists in isolation.** Homepage → flagship; flagship → Series; Series → Field Notes; resume → flagship; About → philosophy (implicitly). It is how [[Continued Curiosity]] becomes concrete, and the lens for every navigation, content-architecture, and future-expansion decision. See ADR-0002.

**Refined (Phase 3):** the "pointing deeper" is *not* primarily a hyperlink. The durable reading is **every artifact leaves the reader with a deeper question than it began with.** Sometimes another article answers it; sometimes the reader does; sometimes it stays open — all three are depth. This separates the **narrative hook** (what changes *inside the reader*) from the **navigational hook** (what to read *next on the site*). The two were long conflated. Consequence: **stories must be complete without navigation; navigation only deepens already-complete stories** (the "still works as an emailed PDF" test). On-site cross-linking lives in page *chrome* (sidebars, "Continue with…" affordances), added around a frozen story — never woven into prose the story depends on. See the private editorial conventions (kept outside this public repo; pointer in `docs/handoffs/content-architecture.md`).

### Realization
The atomic unit of the site's editorial grammar: a *change in how Alan saw his work*, earned through experience. Distinct from a tip, a tutorial, or a "lesson learned" listicle — a realization is a shift in perception, not a fact. **A spine piece carries two:** a **lived realization** (the narrator's — one earned hinge, dramatized inside the scene; e.g. *"I wasn't wondering how to finish the report, I was wondering why it existed in this form at all"*) and an **inferred realization** (the reader's — deliberately left *unspoken*, completed later at the reader's own desk). The narrator earns the right to stop one step early; the reader takes the final step alone. The [[Flagship]] is the first lived realization (*"I was solving the wrong problem"*); a [[Series]] explores its consequences; a [[Project]] is evidence a realization held up in practice; a [[Field Note]] is a smaller realization or a reference artifact. Realizations are *shown*, never preached. See [[Accumulated Realizations]].

### Accumulated Realizations
The editorial grammar of the [[Living Field Manual]]: **the *site* becomes a record of accumulated realizations** — its real differentiator from a portfolio. ("Becomes," not "is": the identity is *earned* over time, never declared on day one — consistent with [[Evidence over Assertion]].) (The site accumulates; each *piece* records one lived realization and leaves one inferred — do not conflate the two levels.) This names *how* the manual compounds (the mechanism behind [[Continued Curiosity]] and [[Leverage]] as an *emergent* theme). **[[Leverage]] is never preached** — it emerges across stories. If a reader finishes three or four pieces and thinks *"everything Alan writes is really about leverage,"* that is far stronger than any page asserting it. Governing convention: *the deepest realization in a spine piece belongs to the reader, not the narrator.* Writing rules that operationalize this live in the private editorial conventions (pointer in `docs/handoffs/content-architecture.md`).

### Project
A structured technical case study. A project explains a problem, context, approach, architecture concept, tradeoffs, outcome, and lessons learned.

### Field Note
A short technical article or observation. Field Notes are practical, concise, and focused on what Alan is learning, noticing, or applying.

### Content Type
*What am I reading?* — the publication type, and the ONLY axis the content model formalizes. Examples: [[Project]], [[Field Note]] (later possibly Talk, Presentation). Lives in the content model (collections). Distinct from [[Topic]] and [[Philosophy]] — do not conflate the three.

### Topic
The subject matter of a piece (API Security, AI, Google Apps Script, OAuth, Observability...). Pure metadata. Not a navigation spine and not a formalized taxonomy yet. Distinct from [[Content Type]] and [[Philosophy]].

### Philosophy
The recurring *ideas* behind the work ([[Leverage]], customer empathy, systems thinking, eliminating repetition, engineering storytelling). These are ideas, **not tags** — they do not belong in frontmatter. They surface through writing and may later earn [[Theme]] pages, but are never a content-model field.

### Series
The editorial glue that produces [[Continued Curiosity]]. A Series is a narrative arc (e.g. "Building Octopus", "AI Engineering Workflow", "Building BlindSpot Labs") that can contain Projects, Field Notes, ADR discussions, and lessons. Readers consume narratives, not taxonomies — like episodes, not "another video in a category." **Series are editorial and intentionally decoupled from the content model** (they are not [[Topic]] tags or [[Theme]] pages). Curiosity is driven by editorial sequencing — strong flagship → "Continue the journey" → next logical read → contextual related-reading links — not by taxonomy.

### Theme
A philosophy-level grouping page (e.g. "Engineering Leverage", "AI-Assisted Field Engineering"). **Deliberately deferred.** Themes must *emerge* from published work, not be invented up front — formalizing them early freezes Alan's worldview before the writing validates it and creates link/URL debt when a guessed pillar turns out wrong. Gate: revisit only after roughly **25–40 published pieces**, when themes reflect the actual body of work. Until then, [[Series]] and editorial sequencing do this job. See ADR-0002.

### Case Study
A project writeup that emphasizes problem-solving and decision-making. Case studies may be based on internal work, open-source work, demos, or personal experiments.

### Recognition-first
The flagship's opening register, **superseding the earlier term "pain-first."** Pain invites pity and risks melodrama; recognition is quieter and is the actual goal — the reader should think *"I've had that evening,"* not *"I feel sorry for him."* Achieved through **empathy via specificity**: one concrete, ordinary, generalized-but-true scene (no employer/customer/product names, no implementation) that almost every experienced customer-facing professional has lived. Counter-intuitively, the more specific the moment, the more universal it reads. Replaces "pain-first" wherever that phrase appears in older notes. See [[Flagship]].

### Flagship
The single lead case study the site is built around. It optimizes for authenticity, storytelling, uniqueness, and timelessness — **not** technical complexity. **[[Recognition-first]], the reader's story — not autobiography.** It opens on a concrete *scene*, not an abstraction: an ordinary evening preparing yet another customer engagement (collecting data across systems, copying numbers, rebuilding the same deck) where nothing is hard and nothing is new, until a single thought appears — *"Why am I rebuilding this again?"* That realization **is** the inciting incident. The scene may be a faithful **composite** of many real evenings (a standard nonfiction technique — assemble, never invent), which is likely the more honest telling: not one dramatic night but the accumulation of ordinary ones until the pattern became impossible to ignore. **Critical boundary:** the flagship answers *why I started thinking differently*; the "Building Octopus" [[Series]] answers *what happened after*. The flagship must **not** borrow the Series' inciting incident ("the spreadsheet that started it all") — that is Series Chapter 1, not the flagship. The earlier abstract opening (*"Every customer engagement generated the same manual work…"*) is rhetoric, not narrative, and is rejected as the opening; it may survive only as connective tissue after the scene. **Structure:** the whole piece is *one continuous scene*, first person, no subheadings; the realization is an embedded event that changes the meaning of the evening, which then keeps going under changed perception (see the private editorial conventions, pointer in `docs/handoffs/content-architecture.md`). It ends **inward** (understated first person, no question, no forward link) so it works as a standalone emailed PDF. Working title: *"I Was Solving the Wrong Problem"* — chosen because it makes a reader curious *before* they know who Alan is, and matches the pain-first opening. (The earlier *"Why Customer-Facing Work Made Me Start Building Systems"* still centered Alan's career.) **Title locked.** It works on three levels: the reader assumes a *technical* problem, discovers it was the *workflow*, then realizes *they've* been solving the wrong problems too. Repurpose the runners-up: *"When Every Customer Engagement Became the Same Work"* → opening section; *"The Cost of Solving the Same Problem Twice"* → a later Field Note. Deliberately short (~1,800–2,500 words), ends on a hook, sits at the head of the "Building Octopus" [[Series]]. The v1→v2 rewrite is the series *payoff*, not the lead. See the private editorial compass (`docs/handoffs/content-architecture.md`).

### Builder → Architect → Teacher
The career arc that is the true spine of the site — more fundamental than any single project. **Builder:** pain → software ("I can automate this"; Octopus v1). **Architect:** software → architecture ("I now understand what should have been simple"; the v1→v2 rewrite). **Teacher:** architecture → knowledge (the demos, automation, open-source, and this website itself). Tech specifics (Django vs Go, monolith vs streaming) are *evidence* of the arc, not the arc itself. Every article should locate itself somewhere on this progression.

### Outsource Complexity
A canonical engineering principle discovered across the body of work: **leverage what someone has already solved better instead of building it yourself.** Evidence: Google Sheets instead of a database, Google Drive ACLs instead of building auth, Pulumi instead of a deployment UI. Not mere pragmatism — a reusable philosophy, and an early [[Field Note]] candidate. Part of the [[Editorial Canon]].

### Evidence over Assertion
The meta-principle beneath ADR-0002, ADR-0003, and the [[Editorial Canon]]: **editorial decisions emerge from published work and documented engineering decisions, not from aspiration.** The site demonstrates ideas before codifying them publicly. Applies equally to [[Series]], [[Theme]]s, philosophy pages, and any future abstraction — nothing is formalized until the body of work has earned it. The writing-side mirror of "don't build an abstraction until the code demands it."

### Editorial Canon
The site's set of canonical engineering beliefs, kept as an **internal, unpublished author's compass — never a published page.** Readers should *discover* these ideas through articles, not read them as a manifesto (see [[Layered Disclosure]] / ADR-0003). Every draft is checked against it: reinforce or consciously challenge. Maintained in the private editorial compass (untracked, outside this public repo; see `docs/handoffs/content-architecture.md`). Seed beliefs: build systems not heroics · simplicity beats theoretical elegance · repetitive work deserves automation · [[Outsource Complexity]] · customers care about outcomes not architecture · good internal tools multiply an entire field organization.

### Layered Disclosure
How engineering philosophy reaches the reader (ADR-0003): **demonstrate before documenting.** Layer 1 Homepage — one sentence/idea/promise. Layer 2 About — a *lens, not a biography or manifesto* (one mental model, no enumerated principles). Layer 3 Articles — prove it through real stories. Layer 4 (eventually, after ~5–8 articles) a Field Manual / Principles page where each belief links to multiple stories and reads as earned observation, not aspiration. Each layer earns the next; deferring preserves the right to be wrong before canonising a principle in public.

### Editorial Discovery
The investigative output (this session's deliverable) that uncovered the philosophy, recurring themes, flagship, article backlog, safe terminology, and confidentiality rules tying the body of work into one narrative. It is **editorial state**, distinct from project/build state — durable source material that future sessions read *before* making content recommendations. Lives in the private editorial compass — untracked and outside this public repo (see `docs/handoffs/content-architecture.md`). Kept public-safe regardless, as defense in depth.

### Public-Safe Content
Content that can be published without exposing confidential or proprietary information. Public-safe content generalizes names, diagrams, metrics, and implementation details.

### Internal Work
Work created for or inside an employer or customer environment. Internal work may inspire a generalized case study, but the actual source code, architecture, names, data, screenshots, and proprietary details must not be published.

### CotaLabs
The umbrella identity for open-source experiments, labs, demos, and reusable tools created by Alan. `cotalabs.io` may link to or complement `alancota.net`.

### BlindSpot Labs
An open-source API security learning project and demo environment. It can be discussed more directly than employer-internal work because it is Alan's own public project.

### Multi-Tenant Security Analytics Platform
The public-safe name for an internal platform case study inspired by repeated field engineering problems around telemetry, reporting, API inventory analysis, and executive readouts. Do not use internal project names in public content.

### Confidentiality Note
A short note included in internal-work-based case studies explaining that names, details, metrics, screenshots, and implementation specifics have been generalized.

### Guardrail
A repository rule, template, checklist, or document that helps Alan and AI agents stay aligned and avoid repeated clarification.

### Handoff
A session summary that preserves important context for a future agent or future session. Handoffs should live under `docs/handoffs/` when committed.

### ADR
Architecture Decision Record. Use ADRs only for meaningful decisions that are hard to reverse, surprising without context, and based on real tradeoffs.

### Dark-first
The site uses a dark visual baseline as its default and only theme. The base layout and global styles assume dark background and foreground from the start. Theme switching and light-mode support are intentionally out of scope until there is a concrete need.

### Content Modeling Principle
Frontmatter describes the document (metadata used for routing, listing, sorting, and publishing). The MDX body contains the content, narrative, and document structure. Keep frontmatter intentionally small and stable; only introduce new metadata when there is a concrete architectural need.

### Walking Skeleton
The bootstrap deliverable: the thinnest end-to-end slice that proves the full pipeline (stack, routing, content model, MDX rendering, and Cloudflare-compatible build) works, without real content or visual polish.
