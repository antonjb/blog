import { glob } from 'astro/loaders'
import { z, defineCollection } from 'astro:content'

const posts = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/posts' }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        featuredimage: z.string(),
        tags: z.array(z.string()),
    }),
})

export const collections = { posts }
