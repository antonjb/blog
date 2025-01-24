import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'
import React from 'react'
import { z } from 'zod'

const POST_DIR = '/posts'

export const PostMetadata = z.object({
	title: z.string(),
	description: z.string(),
	date: z.date(),
	featuredImage: z.string().optional(),
	tags: z.string().array(),
})

export const loadBlogPost = React.cache(async function loadBlogPost(slug: string) {
	const data = await readMDXFile(`${slug}.mdx`)
	return data
})

export const listBlogPosts = React.cache(async function listBlogPosts() {
	const dirPosts = await fs.readdir(path.join(process.cwd(), POST_DIR), {
		withFileTypes: true,
	})
	const allPosts = []

	for (let file of dirPosts) {
		try {
			if (file.isFile() && file.name.endsWith('.mdx')) {
				const { slug, metadata } = await readMDXFile(file.name)

				allPosts.push({
					slug,
					...metadata,
				})
			}
		} catch (err) {
			console.error(`Error reading: ${file.name}`)
		}
	}

	return allPosts
})

async function readMDXFile(filePath: string) {
	const rawContent = await fs.readFile(
		path.join(process.cwd(), `${POST_DIR}/${filePath}`),
		'utf8',
	)
	const { content, data: metadata } = matter(rawContent)
	const parsedMetadata = PostMetadata.parse(metadata)

	return {
		slug: filePath.replace('.mdx', ''),
		content,
		metadata: parsedMetadata,
	}
}
