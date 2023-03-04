import React from "react"
import { graphql } from "gatsby"
import CommonComponent from '../component/common-component';


const Genres = ({data}) => {
    const genres = data.allStrapiGenre.nodes;
    const Genre = data.strapiGenrePage
  return (
    <div>
      <div className="Heading-wrapper">
        <h3 className="Heading">{Genre.title}</h3>
        <CommonComponent data={genres} PageSLug={Genre.pageSlug} />
      </div>
    </div>
  )
}

export default Genres;

export const query = graphql`

query MyQuery {
  strapiGenrePage {
    title
    pageSlug
  }
    allStrapiGenre {
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
