import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
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
    description,
    tags,
    title,
    helmet,
    featuredImage,
}) => {
    const PostContent = contentComponent || Content

    return (
        <section>
            {helmet || ''}
            <div>
                {featuredImage && (
                    <div>
                        <PreviewCompatibleImage
                            imageInfo={{
                                image: featuredImage,
                                alt: `featured image thumbnail for post ${title}`,
                            }}
                        />
                    </div>
                )}
                <h1>{title}</h1>
                <p>{description}</p>
                <PostContent content={content} />
                <Tags tags={tags} />
            </div>
        </section>
    )
}

const BlogPost = ({ data }: { data: BlogPostInterface }) => {
    const { markdownRemark: post } = data
    const { title } = useSiteMetadata()

    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate={`%s | ${title}`}>
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta name="description" content={`${post.frontmatter.description}`} />
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
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
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
