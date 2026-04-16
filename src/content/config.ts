import { defineCollection, z } from 'astro:content';

export const publications = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    paperurl: z.string().optional(),
    citation: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

export const talks = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['conference', 'seminar', 'invited talk']).optional(),
    venue: z.string(),
    location: z.string().optional(),
  }),
});

export const teaching = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['seminar', 'lecture', 'ta', 'graduate', 'undergraduate']).optional(),
    venue: z.string(),
    location: z.string().optional(),
  }),
});

export const packages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    languages: z.array(z.string()),
    repository: z.string().optional(),
    documentation: z.string().optional(),
    status: z.enum(['draft', 'active', 'maintained', 'archived']).default('active'),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  publications,
  talks,
  teaching,
  packages,
};
