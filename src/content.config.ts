import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Shared schema for both collections. Frontmatter describes the document;
// the MDX body holds the content. Keep these fields small and stable
// (see CONTEXT.md "Content Modeling Principle").
const documentSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  draft: z.boolean().default(true),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: documentSchema,
});

const fieldNotes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/field-notes' }),
  schema: documentSchema,
});

export const collections = {
  projects,
  'field-notes': fieldNotes,
};
