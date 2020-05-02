module.exports = {
    siteMetadata: {
        title: `Tree Style Tab`,
        description: `Tabs are shown like a tree, which allows for quick, easy and straightforward tab management`,
        author: `@suibinhong`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
              // your google analytics tracking id
              trackingId: `G-HJQ2EHW3VH`,
              // Puts tracking script in the head instead of the body
              head: true,
              // enable ip anonymization
              anonymize: true,
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
