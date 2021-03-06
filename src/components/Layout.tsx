import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../Hooks/UseSiteMetadata'
import './style.css'
import { Link, withPrefix } from 'gatsby'
import { Logo } from './Logo/Logo'

export const Layout: React.FC = ({ children }) => {
    const { title, description, siteUrl } = useSiteMetadata()

    return (
        <div style={{ width: '60%', minWidth: 300, maxWidth: 900, margin: '0 auto' }}>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix('/')}img/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-16x16.png`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
                    color="#ff4400"
                />
                <meta name="theme-color" content="#f47100" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`${withPrefix('/')}img/ogimage.png`} />
                <meta property="og:image:alt" content="Anton Ball dot dev" />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:creator" content="@antonjb" />
            </Helmet>
            <header style={{ padding: '1rem' }}>
                <h1>
                    <Link
                        style={{ display: 'block', maxWidth: 338, margin: '0 auto' }}
                        className="logo"
                        to="/"
                    >
                        <Logo />
                    </Link>
                </h1>
            </header>
            <Fragment>{children}</Fragment>
        </div>
    )
}
