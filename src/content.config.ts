import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Minutes, shown on the card and the article header. */
    readingTime: z.number().optional(),
    /** Short label shown as a chip, e.g. "Guide". */
    category: z.string().optional(),
    /** Shown under the article header and as the card thumbnail. */
    heroImage: image().optional(),
    heroAlt: z.string().optional(),
    /** Photographer credit, e.g. "Richard Bell on Unsplash". */
    heroCredit: z.string().optional(),
    heroCreditUrl: z.string().url().optional(),
  }),
});

export const collections = { blog };
