import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
  }),
});

const gallery = defineCollection({
  type: 'content',
  schema: z.object({
    image: z.string(),
    title: z.string().optional(),
    style: z.string().optional(),
    barber: z.string().optional(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

export const collections = { blog, gallery };
