import React from 'react'

import { Layout } from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll/BlogRoll'
import { GatsbyPage } from '../../types/page'
import { useSiteMetadata } from '../../Hooks/UseSiteMetadata'
import Helmet from 'react-helmet'

const BlogIndexPage: React.FC<GatsbyPage> = ({ location }) => {
    const { siteUrl } = useSiteMetadata()
    const canonicalUrl = `${siteUrl}${location.pathname}`

    return (
        <Layout>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:url" content={canonicalUrl} />
            </Helmet>
            <h1>Latest Stories</h1>
            <BlogRoll />
        </Layout>
    )
}

export default BlogIndexPage
