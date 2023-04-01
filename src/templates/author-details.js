import React from "react"
import { Link, graphql } from "gatsby"
import CommonComponent from "../component/common-component"
import Seo from "../component/seo";

const AuthorDetails = ({ data }) => {
  const { title, description } = data.strapiAuthor
  const articles = data.strapiAuthor.articles
  const { seo } = data.strapiGlobal
  return (
    <>
      <Seo seo={seo} />
      <div className="authors-details-container" key={title}>
        <h3 className="authors-details-title">{title}</h3>
        <div className="authors-details-description">
          {description.data.description}
        </div>
        <CommonComponent data={articles} PageSLug="articles" />
        <div className="home-btn">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </>
  )
}

export default AuthorDetails

export const query = graphql`
  query AuthorQuery($slug: String!) {
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
