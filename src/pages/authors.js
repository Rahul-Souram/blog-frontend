import React from "react"
import { graphql } from "gatsby"
import CommonComponent from '../component/common-component';
import Seo from '../component/seo';


const Authors = ({data}) => {
    const Authors = data.allStrapiAuthor.nodes;
    const Author = data.strapiAuthorPage;
    const { seo } = data.strapiAuthorPage;

  return (
    <div>
      <Seo seo={seo}/>
      <div className="Heading-wrapper">
        <h3 className="Heading">{Author.title}</h3>
      <div className="authors-details-description">{Author.description.data.description}</div>
        <CommonComponent data={Authors} PageSLug={Author.pageSlug} />
      </div>
    </div>
  )
}

export default Authors;

export const query = graphql`

query MyQuery {
  strapiAuthorPage {
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
    allStrapiAuthor {
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
