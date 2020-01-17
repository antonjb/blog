import React from 'react'
import { Layout } from '../components/Layout'
import BlogRoll from '../components/BlogRoll/BlogRoll'
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../Hooks/UseSiteMetadata'

const IndexPage: React.FC = () => {
    const { siteUrl } = useSiteMetadata()
    const canonicalUrl = `${siteUrl}`

    return (
        <Layout>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:url" content={canonicalUrl} />
            </Helmet>
            <main style={{ marginBottom: '1rem' }}>
                <p>
                    Personal blog of{' '}
                    <a href="https://twitter.com/antonjb" target="_blank" rel="noopener noreferrer">
                        Anton Ball
                    </a>
                </p>
                <BlogRoll />
            </main>
        </Layout>
    )
}

export default IndexPage
