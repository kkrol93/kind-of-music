module.exports = {
  siteMetadata: {
    title: `Kind of Music`,
    description: `Portfolio/Blog o muzyce i programowaniu`,
    author: `Krzysztof Król`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-layout',
    'hard-source-webpack-plugin',
    'gatsby-plugin-mdx',
    'gatsby-plugin-fontawesome-css',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hobbies`,
        path: `${__dirname}/src/data/hobbies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/data/portfolio`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kind of Music`,
        short_name: `KOM`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            variants: ['300', '400', '600', '700'],
          },
          {
            family: 'Courgette',
            variants: ['400'],
          },
          {
            family: 'Metal Mania',
            variants: ['400'],
          },
        ],
      },
    },
  ],
};
