import React from "react"
import { graphql } from "gatsby"
import CommonComponent from '../component/common-component';


const Authors = ({data}) => {
    const Authors = data.allStrapiAuthor.nodes;
    const Author = data.strapiAuthorPage
  return (
    <div>
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
