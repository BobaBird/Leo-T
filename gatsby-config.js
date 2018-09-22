module.exports = {
  siteMetadata: {
    title: 'Leo-T',
    desc: 'A personal webiste.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Leo-T',
        short_name: 'starter',
        start_url: '/',
        // background_color: '#663399',
        // theme_color: '#663399',
        // display: 'minimal-ui',
        icon: 'src/images/fav-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
