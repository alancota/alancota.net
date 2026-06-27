# Architecture

## Technology direction

The site should be built as a static, content-first website.

Recommended stack:

- Astro
- TypeScript
- Tailwind CSS
- MDX
- Cloudflare Pages

## Architectural principles

- Static-first
- Markdown/MDX as the source of truth for content
- No CMS for MVP
- No database
- No authentication
- Minimal JavaScript by default
- Fast page loads
- Accessible typography and navigation
- Easy local development
- Easy Cloudflare Pages deployment

## Proposed content structure

```text
src/
  content/
    projects/
    field-notes/
  components/
  layouts/
  pages/
public/
  resume/
  images/
docs/
```

## Content types

### Projects

Project pages should be written as anonymized case studies.

Suggested structure:

- Problem
- Context
- Approach
- Architecture Concept
- Tradeoffs
- Outcome
- Lessons Learned
- Confidentiality Note

### Field Notes

Field Notes are shorter technical articles focused on observations, patterns, and practical thinking.

Suggested structure:

- Observation
- Why it matters
- Practical implications
- Takeaways

## Confidentiality model

For internal or employer-related work, do not publish:

- Customer names
- Internal product names
- Source code
- Proprietary architecture diagrams
- Internal screenshots
- Internal metrics
- Roadmap details
- Anything that would expose confidential business or customer information

Instead, generalize the problem, solution pattern, tradeoffs, and lessons learned.

## Deployment model

```text
Local development → GitHub → Cloudflare Pages → alancota.net
```

Cloudflare Pages should build from the main branch once the initial Astro project is ready.
