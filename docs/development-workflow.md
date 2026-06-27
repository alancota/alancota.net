# Development Workflow

This document defines how this repository should be developed by Alan and AI-enabled engineering partners.

## Philosophy

Develop the site incrementally using small, reviewable changes.

Prefer documentation before implementation, architecture before code, small vertical slices over large rewrites, reusable patterns over one-off solutions, clear content over visual polish, and reviewable branches over direct changes to `main`.

This repository values durable thinking over rapid output. The website should teach how problems were solved, not merely display accomplishments.

## Local development environment

The reference local environment is optimized for AI-assisted engineering while remaining tool-agnostic.

Preferred local tools:

- Neovim for editing
- Tmux for long-running sessions
- WorkMux for Git worktree orchestration
- Just for minimal local automation
- Git worktrees for isolated tasks
- Claude Code initially, with future compatibility for Codex CLI, Gemini CLI, and Copilot CLI

These tools support the workflow, but the repository should not become tightly coupled to any single AI tool.

## Branching

Do not work directly on `main` for meaningful changes. Keep `main` clean, synced, and deployable.

Create a branch for each focused unit of work.

Examples:

```text
feat/bootstrap-astro-site
feat/homepage
feat/projects-index
docs/project-template
docs/first-case-study
refactor/navigation
build/cloudflare-pages
```

## Local worktree philosophy

Use Git worktrees for parallel development and AI-assisted engineering sessions.

One worktree should represent:

- one objective
- one branch
- one focused AI session or human work session
- one pull request when practical

Do not reuse a worktree for unrelated tasks. Remove worktrees after the branch is merged or abandoned.

Recommended WorkMux flow:

```bash
just wt-add feat/bootstrap-astro-site
```

Common worktree commands should stay minimal and useful. Do not bloat the `Justfile` with recipes that are not used frequently.

The primary checkout should usually remain on `main`. Feature work should happen in separate worktrees.

## Pull requests

Every meaningful feature or documentation change should be reviewed through a pull request when practical.

A pull request should explain why the change exists, what changed, any important design or content decisions, screenshots or preview links when UI changed, and any follow-up work intentionally deferred.

## Git workflow

Before starting new work from the primary checkout:

```bash
git checkout main
git pull --rebase origin main
```

Then create a feature branch or worktree.

Feature branch:

```bash
git checkout -b feat/<short-description>
```

WorkMux worktree:

```bash
just wt-add feat/<short-description>
```

## Commit style

Use Conventional Commits.

Examples:

```text
feat(home): add first homepage layout
docs(context): refine project glossary
docs(adr): record Astro content decision
build(cloudflare): add deployment configuration
refactor(layout): simplify navigation structure
chore(agents): update AI workflow instructions
```

Commit bodies should explain why the change exists, not merely list files.

## AI session lifecycle

Every AI-enabled engineering session should begin by reading:

1. `AGENTS.md`
2. Tool-specific shim if present, such as `CLAUDE.md`
3. `PROJECT_STATE.md`
4. `CONTEXT.md`
5. Relevant docs under `docs/`

Then the session should follow this lifecycle:

```text
Create focused worktree
  ↓
Read project guardrails
  ↓
Restate the task
  ↓
Clarify assumptions
  ↓
Grill/design when needed
  ↓
Implement the smallest useful change
  ↓
Run checks
  ↓
Update docs or PROJECT_STATE.md if needed
  ↓
Create handoff when useful
  ↓
Open PR or prepare for review
  ↓
Merge and remove worktree
```

The agent should identify relevant guardrails, ask clarifying questions if needed, avoid unnecessary dependencies, and propose documentation updates when project direction changes.

## First-session rule

During the first local coding-agent session, the agent should operate in read-only design mode unless explicitly approved to edit files.

The goal of the first session is to clarify project direction, not scaffold the site.

## Definition of done

A task is done when the requested change is complete, the change is small and reviewable, relevant checks pass if available, documentation is updated if needed, `PROJECT_STATE.md` is updated if project state changed, no confidentiality concerns were introduced, and the work is ready for review.

## Handoffs

Use handoffs when context should survive across sessions or tools.

Committed handoffs should live under:

```text
docs/handoffs/
```

A useful handoff includes the session goal, what changed, decisions made, open questions, risks, files touched, related issues or ADRs, and the recommended next step.

## Justfile philosophy

The `Justfile` should stay small and practical.

Add recipes only when they are used frequently or remove meaningful friction from the workflow. Prefer a short list of memorable commands over a large command catalog.

Good candidates for recipes:

- build
- check
- format
- preview
- worktree add/remove/list

Avoid adding speculative recipes before the need exists.

## Confidentiality checkpoint

Before publishing content or committing case-study material, review `docs/confidentiality.md`.

When in doubt, generalize more.
