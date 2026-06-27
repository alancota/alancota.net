# AI Agent Instructions

Version: 1.0
Last updated: 2026-06-27

## Project purpose

`alancota.net` is a content-first personal engineering website, technical portfolio, and field notebook for Alan Cota.

The site should document how Alan thinks through technical problems, builds reusable patterns, and helps enterprises adopt emerging technology safely. It is not a generic online resume.

## Non-negotiable rules

1. **Content first. Design second. Polish third.** Do not overbuild visual details before meaningful content exists.
2. **Never publish confidential information.** Do not include customer names, employer-private details, internal architecture, internal screenshots, source code from employers, proprietary metrics, roadmap details, or anything that could expose Akamai, Okta, Salesforce, customers, or partners.
3. **Generalize internal work.** For employer-related projects, describe the problem, approach, tradeoffs, and lessons learned at a conceptual level.
4. **Favor clarity over cleverness.** Use boring, durable technology and readable code.
5. **Static-first.** The MVP should not include a CMS, database, authentication, comments, or heavy client-side JavaScript.
6. **Keep the site fast, accessible, and maintainable.** Every page should work well on desktop and mobile.
7. **Do not add dependencies without a clear reason.** If a dependency is introduced, document why.
8. **Use project language consistently.** Read `CONTEXT.md` before naming concepts, routes, components, content collections, or issues.
9. **Capture durable decisions.** Create ADRs only when a decision is hard to reverse, surprising without context, and based on real tradeoffs.
10. **Preserve context between sessions.** Update `PROJECT_STATE.md` and create handoffs under `docs/handoffs/` when useful.

## Content hierarchy

- Home
- Projects
- Field Notes
- About
- Resume

## Read before making changes

Always inspect these files first:

- `README.md`
- `PROJECT_STATE.md`
- `CONTEXT.md`
- `docs/vision.md`
- `docs/architecture.md`
- `docs/confidentiality.md`
- `docs/writing-style.md`
- `docs/design-principles.md`

## Development workflow

1. Clarify the task.
2. Read the relevant guardrail docs.
3. Make the smallest useful change.
4. Keep content and implementation separate where possible.
5. Run available checks before finishing.
6. Update docs, ADRs, issues, or `PROJECT_STATE.md` if the task changes project direction.

## Commit style

Use Conventional Commits:

- `feat(scope): ...`
- `fix(scope): ...`
- `docs(scope): ...`
- `chore(scope): ...`
- `refactor(scope): ...`
- `build(scope): ...`
- `ci(scope): ...`

Commit bodies should explain why the change exists, not just what files changed.

## Compatibility

`AGENTS.md` is the canonical instruction file. Tool-specific files such as `CLAUDE.md` should point here instead of duplicating rules.

## Agent skills

### Issue tracker

Issues and PRDs live in GitHub Issues (`gh` CLI). External PRs are not a triage surface. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical triage roles using default label strings (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
