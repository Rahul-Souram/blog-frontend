import React from "react";
import { Link, graphql } from "gatsby";
import CommonComponent from '../component/common-component';
import Seo from "../component/seo";

const GenreDetails = ({ data }) => {
  const { title, description } = data.strapiGenre
  const articles = data.strapiGenre.articles;
  const { seo } = data.strapiGlobal;

  return (
    <>
      <Seo seo={seo}/>
      <div className="genre-details-container" key={title}>
      <h3 className="genre-details-title">{title}</h3>
      <div className="genre-details-description">{description.data.description}</div>
      <CommonComponent data={articles} PageSLug="articles"/>
      <div className="home-btn">
      <Link to='/'>Back to Home</Link>
      </div>
    </div>
    </>

  )
}

export default GenreDetails

export const query = graphql`
  query GenreQuery($slug: String!){
    strapiGenre(slug: { eq: $slug }) {
      title
      slug
      description {
        data {
          description
        }
      }
      articles {
        title
        slug
        image {
          url
        }
        description {
          data {
            description
          }
        }
      }
    }
    strapiGlobal {
      seo {
        metaTitle
        metaDescription
      }
    }
  }
`
