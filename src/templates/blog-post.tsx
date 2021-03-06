import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { Content, HTMLContent, ContentProps } from '../components/Content'
import { BlogPostInterface } from '../types/blogpost'
import { useSiteMetadata } from '../Hooks/UseSiteMetadata'
import { PreviewCompatibleImage } from '../components/PreviewCompatibleImage'
import { FeaturedImage } from '../types/images'

import 'prismjs/themes/prism-okaidia.css'
import { Tags } from '../components/Tags/Tags'

interface BlogPostTemplateProps {
    content: React.ReactNode
    contentComponent: React.FunctionComponent<ContentProps>
    description: string
    tags: string[]
    title: string
    helmet: React.ReactNode
    featuredImage?: FeaturedImage
}
export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
    content,
    contentComponent,
    tags,
    title,
    helmet,
    featuredImage,
}) => {
    const PostContent = contentComponent || Content

    return (
        <article>
            {helmet || ''}
            {featuredImage && (
                <PreviewCompatibleImage
                    imageInfo={{
                        image: featuredImage,
                        alt: `featured image thumbnail for post ${title}`,
                    }}
                />
            )}
            <h1>{title}</h1>
            <PostContent content={content} />
            <Tags tags={tags} />
        </article>
    )
}

const BlogPost = ({ data }: { data: BlogPostInterface }) => {
    const { markdownRemark: post } = data
    const { title, siteUrl } = useSiteMetadata()
    const canonicalUrl = `${siteUrl}${post.fields.slug}`

    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate={`%s | ${title}`}>
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta name="description" content={post.frontmatter.description} />
                        <link rel="canonical" href={canonicalUrl} />
                        <meta property="og:url" content={canonicalUrl} />
                        <meta
                            property="og:title"
                            content={`${post.frontmatter.title} | ${title}`}
                        />
                        <meta property="og:type" content="article" />
                        <meta
                            property="article:published_time"
                            content={post.frontmatter.published}
                        />
                        <meta property="article:tag" content={post.frontmatter.tags.join(',')} />
                    </Helmet>
                }
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                featuredImage={post.frontmatter.featuredimage}
            />
        </Layout>
    )
}

export default BlogPost

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            fields {
                slug
            }
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                published: date(formatString: "YYYY-MM-DD")
                title
                description
                tags
                featuredimage {
                    childImageSharp {
                        fluid(maxWidth: 900, quality: 85) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
