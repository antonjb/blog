module.exports = {
    siteMetadata: {
        title: 'Anton Ball',
        description: 'Personal site and blog of Anton Ball',
        siteUrl: 'https://www.antonball.dev/',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typescript',
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 900,
                            linkImagesToOriginal: false,
                            withWebp: true,
                            showCaptions: ['alt'],
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-video',
                        options: {
                            width: 600,
                            height: 'auto',
                            preload: 'auto',
                            muted: true,
                            autoplay: false,
                            playsinline: true,
                            controls: true,
                            loop: false,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-154900334-1',
                anonymize: true,
                respectDNT: true,
            },
        },
        'gatsby-plugin-twitter',
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
}
