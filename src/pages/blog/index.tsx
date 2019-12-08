import React from 'react'

import { Layout } from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll/BlogRoll'

const BlogIndexPage: React.FC = () => (
    <Layout>
        <h1>Latest Stories</h1>
        <BlogRoll />
    </Layout>
)

export default BlogIndexPage
