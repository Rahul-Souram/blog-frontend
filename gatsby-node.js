const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`./src/pages/aricles/article-details.js`);
  const genreTemplate = path.resolve(`./src/pages/genres/genre-details.js`);
  const authorTemplate = path.resolve(`./src/pages/authors/author-details.js`);

  const resultArticlePage = await graphql(`
    {
      allStrapiArticle {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  const resultGenrePage = await graphql(`
  {
    allStrapiGenre {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`)

const resultAuthorPage = await graphql(`
{
  allStrapiAuthor {
    edges {
      node {
        title
        slug
      }
    }
  }
}
`)

  resultArticlePage.data.allStrapiArticle.edges.forEach(({ node }) => {
    createPage({
      path: `${node.slug}`,
      component: articleTemplate,
      context: {
        slug: node.slug,
      },
    })
  });

  resultGenrePage.data.allStrapiGenre.edges.forEach(({ node }) => {
    createPage({
      path: `${node.slug}`,
      component: genreTemplate,
      context: {
        slug: node.slug,
      },
    })
  });

  resultAuthorPage.data.allStrapiAuthor.edges.forEach(({ node }) => {
    createPage({
      path: `${node.slug}`,
      component: authorTemplate,
      context: {
        slug: node.slug,
      },
    })
  });

}
