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
      }
    }
  }
`
