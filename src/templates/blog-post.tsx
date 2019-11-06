import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/Layout'
import { Content, HTMLContent, ContentProps } from '../components/Content'
import { BlogPostInterface } from '../types/blogpost'

interface BlogPostTemplateProps {
    content: React.ReactNode
    contentComponent: React.FunctionComponent<ContentProps>
    description: string
    tags: string[]
    title: string
    helmet: React.ReactNode
}
export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
}) => {
    const PostContent = contentComponent || Content

    return (
        <section>
            {helmet || ''}
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <PostContent content={content} />
                {tags && tags.length && (
                    <div style={{ marginTop: `4rem` }}>
                        <h4>Tags</h4>
                        <ul>
                            {tags.map(tag => (
                                <li key={tag + `tag`}>
                                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    )
}

const BlogPost = ({ data }: { data: BlogPostInterface }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta name="description" content={`${post.frontmatter.description}`} />
                    </Helmet>
                }
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
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
            }
        }
    }
`
