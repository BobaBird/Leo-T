module.exports = {
  siteMetadata: {
    title: 'Leo-T',
    desc: 'A personal webiste.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Leo-T',
    //     short_name: 'Leo-T',
    //     start_url: '/',
    //     // background_color: '#663399',
    //     // theme_color: '#663399',
    //     display: 'minimal-ui',
    //     icon: 'src/images/fav-icon.png', // This path is relative to the root of the site.
    //   },
    // },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-remove-serviceworker',
  ],
}
