# Development Workflow

This document defines how this repository should be developed by Alan and AI coding agents.

## Philosophy

Develop the site incrementally using small, reviewable changes.

Prefer documentation before implementation, architecture before code, small vertical slices over large rewrites, reusable patterns over one-off solutions, clear content over visual polish, and reviewable branches over direct changes to `main`.

## Branching

Do not work directly on `main` for meaningful changes. Create a branch for each focused unit of work.

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

## Pull requests

Every meaningful feature or documentation change should be reviewed through a pull request when practical.

A pull request should explain why the change exists, what changed, any important design or content decisions, screenshots or preview links when UI changed, and any follow-up work intentionally deferred.

## Git workflow

Before starting new work:

```bash
git checkout main
git pull --rebase origin main
```

Then create a feature branch:

```bash
git checkout -b feat/<short-description>
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

## AI agent workflow

Every AI coding session should begin by reading:

1. `AGENTS.md`
2. `PROJECT_STATE.md`
3. `CONTEXT.md`
4. Relevant docs under `docs/`

Then the agent should restate the task, identify relevant guardrails, ask clarifying questions if needed, make the smallest useful change, avoid unnecessary dependencies, run available checks, propose documentation updates if project direction changed, and leave a handoff when useful.

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

## Confidentiality checkpoint

Before publishing content or committing case-study material, review `docs/confidentiality.md`.

When in doubt, generalize more.
