import { FeaturedImage } from './images'

export interface BlogPostInterface {
    markdownRemark: {
        id: string
        html: string
        frontmatter: {
            date: string
            title: string
            description: string
            tags: string[]
            featuredimage: FeaturedImage
        }
    }
}
