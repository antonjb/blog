import { graphql, useStaticQuery } from 'gatsby'
import { SiteMeta } from '../types/frontmatter'

interface SiteMetaDataQueryProps {
    site: {
        siteMetadata: SiteMeta
    }
}

export const useSiteMetadata = () => {
    const { site } = useStaticQuery<SiteMetaDataQueryProps>(
        graphql`
            query SITE_METADATA_QUERY {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `,
    )

    return site.siteMetadata
}
