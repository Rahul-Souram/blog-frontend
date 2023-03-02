import React from "react"
import { Link, graphql } from "gatsby"
import Anabelle from "../../assets/anabelle.jpg"
import Hangover from "../../assets/hangover.jpg"
import Chad from "../../assets/chad.jpg"
import David from "../../assets/david.jpg"
import JamesCameron from "../../assets/james-cameron.jpg"
import JohnLeonetti from "../../assets/john-leonetti.jpg"
import JohnWick from "../../assets/john-wick.jpg"
import Joker from "../../assets/joker.jpg"
import LightsOut from "../../assets/lights-out.jpg"
import Lokesh from "../../assets/lokesh.jpg"
import Titanic from "../../assets/titanic.jpg"
import Todd from "../../assets/todd-philips.jpg"
import Vikram from "../../assets/vikram.jpg"
import ReactMarkdown from "react-markdown"

const ArticleDetails = ({ data }) => {
  const { title, description, author, image } = data.strapiArticle
  const Authortitle = author.title
  const AuthorImage = author.image

  console.log(image)

  let Icon
  switch (image) {
    case "Annabelle":
      Icon = Anabelle
      break
    case "Hangover":
      Icon = Hangover
      break
    case "John-Wick":
      Icon = JohnWick
      break
    case "Joker":
      Icon = Joker
      break
    case "Titanic":
      Icon = Titanic
      break
    case "Vikram":
      Icon = Vikram
      break
    case "Lights-Out":
      Icon = LightsOut
      break

    default:
      break
  }
  let AuthorIcon
  switch (AuthorImage) {
    case "Chad-Stahelski":
      AuthorIcon = Chad
      break
    case "David-F-Sandberg":
      AuthorIcon = David
      break
    case "james-cameron":
      AuthorIcon = JamesCameron
      break
    case "John-R-Leonetti":
      AuthorIcon = JohnLeonetti
      break
    case "Todd-Phillips":
      AuthorIcon = Todd
      break
    case "Lokesh-Kanagaraj":
      AuthorIcon = Lokesh
      break
    default:
      break
  }

  return (
    <div className="article-details-container">
      <div className="article-details-image">
        <img src={Icon} alt={image} />
      </div>
      <h3 className="article-details-title">{title}</h3>
      <div className="article-details-description">
        <ReactMarkdown>{description.data.description}</ReactMarkdown>
      </div>
      <div className="article-details-authors-card">
        <div className="article-details-authors-card-image">
          <img src={AuthorIcon} alt={AuthorImage} />
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
      image
      author {
        title
        image
      }
    }
  }
`
