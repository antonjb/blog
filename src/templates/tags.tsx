import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { SiteMeta } from '../types/frontmatter'
import { GatsbyPage } from '../types/page'

interface TagRouteProps extends GatsbyPage {
    data: {
        allMarkdownRemark: {
            totalCount: number
            edges: [
                {
                    node: {
                        fields: {
                            slug: string
                        }
                        frontmatter: {
                            title: string
                        }
                    }
                },
            ]
        }
        site: {
            siteMetadata: Pick<SiteMeta, 'title' | 'siteUrl'>
        }
    }
    pageContext: {
        tag: string
    }
}

const TagRoute: React.FC<TagRouteProps> = props => {
    const posts = props.data.allMarkdownRemark.edges
    const tag = props.pageContext.tag
    const title = props.data.site.siteMetadata.title
    const totalCount = props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with “${tag}”`
    const canonicalUrl = `${props.data.site.siteMetadata.siteUrl}${props.location.pathname}`

    return (
        <Layout>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:url" content={canonicalUrl} />
            </Helmet>
            <section>
                <Helmet title={`${tag} | ${title}`} />
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <ul className="taglist">
                    {posts.map(post => (
                        <li key={post.node.fields.slug}>
                            <Link to={post.node.fields.slug}>
                                <h2>{post.node.frontmatter.title}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
                <p>
                    <Link to="/tags/">Browse all tags</Link>
                </p>
            </section>
        </Layout>
    )
}

export default TagRoute

export const tagPageQuery = graphql`
    query TagPage($tag: String) {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`
