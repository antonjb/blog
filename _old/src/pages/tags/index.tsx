import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { Layout } from '../../components/Layout'
import { SiteMeta } from '../../types/frontmatter'
import { GatsbyPage } from '../../types/page'

interface TagsPageProps extends GatsbyPage {
    data: {
        allMarkdownRemark: {
            group: {
                fieldValue: string
                totalCount: number
            }[]
        }
        site: {
            siteMetadata: Pick<SiteMeta, 'title' | 'siteUrl'>
        }
    }
}

const TagsPage: React.FC<TagsPageProps> = ({
    location,
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title, siteUrl },
        },
    },
}) => {
    const canonicalUrl = `${siteUrl}${location.pathname}`

    return (
        <Layout>
            <section>
                <Helmet title={`Tags | ${title}`}>
                    <link rel="canonical" href={canonicalUrl} />
                    <meta property="og:url" content={canonicalUrl} />
                </Helmet>
                <h1>Tags</h1>
                <ul>
                    {group.map(tag => (
                        <li key={tag.fieldValue}>
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} ({tag.totalCount})
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export default TagsPage

export const tagPageQuery = graphql`
    query TagsQuery {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`
