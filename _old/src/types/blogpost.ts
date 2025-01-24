import { FeaturedImage } from './images'

export interface BlogPostInterface {
    markdownRemark: {
        id: string
        html: string
        fields: {
            slug: string
        }
        frontmatter: {
            date: string
            published: string
            title: string
            description: string
            tags: string[]
            featuredimage: FeaturedImage
        }
    }
}
