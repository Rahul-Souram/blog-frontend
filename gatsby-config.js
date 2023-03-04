/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`,
});
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN ,
  collectionTypes: ['article', 'genre', 'author', 'page'],
  singleTypes: ['homepage', 'article-page', 'author-page', 'genre-page'],
};
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'MovieBlog',
    description: 'A website to demontrate how the blogs works',
},
  plugins: [`gatsby-plugin-sass`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-strapi`,
    options: strapiConfig,
  },
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/Layout/index.js`),
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      icon: `src/images/movieblog.png`, // This path is relative to the root of the site.
    },
  },
],
}
