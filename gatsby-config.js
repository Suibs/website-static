module.exports = {
    siteMetadata: {
        title: `Tree Style Tab`,
        description: `Tabs are shown like a tree, which allows for quick, easy and straightforward tab management`,
        author: `@suibinhong`,
    },
    plugins: [
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "G-1H3QGQJ70R",

                // Include GTM in development.
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                // Defaults to null
                defaultDataLayer: { platform: "gatsby" },

                // Specify optional GTM environment details.
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `white`,
                theme_color: `black`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/tst.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Inter', 'Roboto'],
                }
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
