import { listBlogPosts } from '@/utils/file-utils'

export default async function Home() {
	const blogPosts = await listBlogPosts()

	return (
		<main>
			<ol>
				{blogPosts.map((post) => (
					<li key={post.slug}>
						<a href={`/blog/${post.slug}`}>{post.title}</a>
					</li>
				))}
			</ol>
		</main>
	)
}
