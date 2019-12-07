module.exports = {
  siteMetadata: {
    title: `inputsenpai`,
    description: `Helping you accomplish your Japanese learning goals through exposure to high-quality input-based resources. Let's get fluent together!`,
    author: `@inputsenpai`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `inputsenpai`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/book.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
