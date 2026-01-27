import { glob, file } from 'astro/loaders'
import { z, defineCollection } from 'astro:content'

const dateFormatter = new Intl.DateTimeFormat('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
})

const posts = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md(x)?', base: './src/posts' }),
    schema: ({ image }) =>
        z
            .object({
                title: z.string(),
                date: z.date(),
                description: z.string(),
                heroImage: image().optional(),
                tags: z.array(z.string()),
            })
            .transform((data) => {
                return {
                    ...data,
                    formattedDate: dateFormatter.format(data.date),
                }
            }
            ),
})

const talks = defineCollection({
    loader: file('./src/talks/talks.json'),
    schema: () =>
        z.object({
            title: z.string(),
            date: z.string().transform((date) => new Date(date)),
            conference: z.string(),
            videoUrl: z.string().url().optional(),
            location: z.string(),
        }),
})

export const collections = { posts, talks }
