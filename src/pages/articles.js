import React from "react"
import { graphql } from "gatsby"
import CommonComponent from '../component/common-component';
import Seo from '../component/seo';


const Articles = ({data}) => {
    const Articles = data.allStrapiArticle.nodes;
    const Article = data.strapiArticlePage;
    const {seo} = data.strapiArticlePage;
  return (
    <div key={Article.title}>
      <Seo seo={seo} />
      <div className="Heading-wrapper">
        <h3 className="Heading">{Article.title}</h3>
      <div className="authors-details-description">{Article.description.data.description}</div>
        <CommonComponent data={Articles} PageSLug={Article.pageSlug} />
      </div>
    </div>
  )
}

export default Articles;

export const query = graphql`

query MyQuery {
  strapiArticlePage {
    title
    pageSlug
    seo {
      metaTitle
      metaDescription
    }
    description {
      data {
        description
      }
    }
  }
    allStrapiArticle {
      nodes {
        title
        description {
          data {
            description
          }
        }
        slug
        image {
          url
        }
      }
    }
  }
`
