import { CodeBlock } from '@/components/code-block/code-block'
import { listBlogPosts, loadBlogPost } from '@/utils/file-utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { ResolvingMetadata } from 'next/types'
import Image from 'next/image'

type PageProps = {
	params: {
		slug: string
	}
}

// Prevent dynamic routes not exposed by generateStaticParams
export const dynamicParams = false

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata) {
	const postContent = await loadBlogPost(params.slug)
	const parentMetadata = await parent

	return {
		title: `${postContent.metadata.title} - ${parentMetadata.title?.absolute}`,
		description: postContent.metadata.description,
	}
}

export default async function Blog({ params }: PageProps) {
	const postContent = await loadBlogPost(params.slug)

	return (
		<article>
			<MDXRemote
				// options={{
				// 	mdxOptions: {
				// 		// https://mmazzarolo.com/blog/2023-07-29-nextjs-mdx-image-size/
				// 		rehypePlugins,
				// 	},
				// }}
				source={postContent.content}
				components={{
					pre: CodeBlock,
					img: ({ width, height, src, alt = '', ...rest }) => {
						if (src) {
							console.log(width, height)
							return (
								<Image
									width={100}
									height={200}
									src={src}
									alt={alt ?? ''}
									{...rest}
								/>
							)
						}

						return null
					},
				}}
			/>
		</article>
	)
}

export async function generateStaticParams() {
	const allPosts = await listBlogPosts()

	return allPosts
}
