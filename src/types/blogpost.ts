export interface BlogPostInterface {
    markdownRemark: {
        id: string
        html: string
        frontmatter: {
            date: string
            title: string
            description: string
            tags: string[]
        }
    }
}
