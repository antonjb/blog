import React from 'react'
import { Layout } from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

const IndexPage: React.FC = () => (
    <Layout>
        <main style={{ marginBottom: '1rem' }}>
            <p>
                Personal blog of{' '}
                <a href="https://twitter.com/antonjb" target="_blank" rel="noopener noreferrer">
                    Anton Ball
                </a>
            </p>
        </main>
        <BlogRoll />
    </Layout>
)

export default IndexPage
