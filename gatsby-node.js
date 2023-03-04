const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`./src/templates/article-details.js`);
  const genreTemplate = path.resolve(`./src/templates/genre-details.js`);
  const authorTemplate = path.resolve(`./src/templates/author-details.js`);
  const articlePageTemplate = path.resolve(`./src/pages/articles.js`);
  const authorPageTemplate = path.resolve(`./src/pages/authors.js`);  
  const genrePageTemplate = path.resolve(`./src/pages/articles.js`);

  const pages = [];

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

const resultArticles = await graphql(`
query {
  strapiArticlePage {
    pageSlug
    title
  }
}
`);

const resultAuthors = await graphql(`
query {
  strapiAuthorPage {
    pageSlug
    title
  }
}
`);

const resultGenres = await graphql(`
query {
  strapiGenrePage {
    title
    pageSlug
  }
}
`);

pages.push({
  slug: resultArticles.data.strapiArticlePage.pageSlug,
  title: resultArticles.data.strapiArticlePage.title,
  template: articlePageTemplate,
});

pages.push({
  slug: resultAuthors.data.strapiAuthorPage.pageSlug,
  title: resultAuthors.data.strapiAuthorPage.title,
  template: authorPageTemplate,
});

pages.push({
  slug: resultGenres.data.strapiGenrePage.pageSlug,
  title: resultGenres.data.strapiGenrePage.title,
  template: genrePageTemplate,
});

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
