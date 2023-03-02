import React from "react"
import '../style/global.scss';
import { graphql } from "gatsby"
import CommonComponent from '../component/common-component';

export default function Home({data}) {
const { title,description } = data.strapiHomepage;
const articles = data.allStrapiArticle.nodes;
const genres = data.allStrapiGenre.nodes;
const authors = data.allStrapiAuthor.nodes;

  return(
    <div className="main">
      <h2 className="main-title">{title}</h2>
      <div className="main-description">{description.data.description}</div>
      <div className="Heading-wrapper">
      <h3 className="Heading">Movies</h3>
      <CommonComponent data={articles}/>
      </div>
      <div className="Heading-wrapper">
      <h3 className="Heading">Genres</h3>
      <CommonComponent data={genres}/>
      </div>
      <div className="Heading-wrapper">
      <h3 className="Heading">Directors</h3>
      <CommonComponent data={authors}/>
      </div>
   </div>
  ) 
}

export const query = graphql`
  query {
    strapiHomepage {
      title
      description {
        data {
          description
        }
      }
    }
    allStrapiArticle {
        nodes {
          title
          slug
          image
          description {
            data {
              description
            }
        }
      }
    }
    allStrapiAuthor {
      nodes {
        title
        slug
        image
        description {
          data {
            description
          }
        }
      }
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