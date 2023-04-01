import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const ArticleDetails = ({ data }) => {
  const { title, description, author, image } = data.strapiArticle
  const Authortitle = author.title
  const AuthorImage = author.image

  console.log(image)

  return (
    <div className="article-details-container" key={title}>
      <div className="article-details-image">
        <img src={image?.url} alt={image} />
      </div>
      <h3 className="article-details-title">{title}</h3>
      <div className="article-details-description">
        <ReactMarkdown>{description.data.description}</ReactMarkdown>
      </div>
      <div className="article-details-authors-card">
        <div className="article-details-authors-card-image">
          <img src={AuthorImage.url} alt={Authortitle} />
        </div>
        <div className="article-details-authors-card-director">{Authortitle}</div>
      </div>
      <div className="home-btn">
      <Link to='/'>Back to Home</Link>
      </div>
    </div>
  )
}

export default ArticleDetails

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      title
      slug
      description {
        data {
          description
        }
      }
      image {
        url
      }
      author {
        title
        image {
          url
        }
      }
    }
  }
`
