import React from "react"
import { Link, graphql } from "gatsby";
import CommonComponent from '../../component/common-component';

const AuthorDetails = ({ data }) => {
  const { title, description } = data.strapiAuthor;
  const articles = data.strapiAuthor.articles;

  return (
    <div className="authors-details-container">
      <h3 className="authors-details-title">{title}</h3>
      <div className="authors-details-description">{description.data.description}</div>
      <CommonComponent data={articles}/>
      <div className="home-btn">
      <Link to='/'>Back to Home</Link>
      </div>
    </div>
  )
}

export default AuthorDetails

export const query = graphql`
  query AuthorQuery($slug: String!){
    strapiAuthor(slug: { eq: $slug }) {
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
        image
        description {
          data {
            description
          }
        }
      }
    }
  }
`
