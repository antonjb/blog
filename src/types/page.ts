export interface GatsbyPage {
    location: {
        hash: string
        host: string
        hostname: string
        href: string
        key: string
        origin: string
        pathname: string
        port: string
        protocol: string
        // TODO: types?
        // reload
        // replace
        search: string
        state: any
        // toString
    }
    path: string
    url: string
}
