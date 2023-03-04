import React from "react"
import '../style/global.scss';
import { graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet';
import CommonComponent from '../component/common-component';

export default function Home({data}) {
const { title,description } = data.strapiHomepage;
const articles = data.allStrapiArticle.nodes;
const genres = data.allStrapiGenre.nodes;
const authors = data.allStrapiAuthor.nodes;
const seo = data.site.siteMetadata;
  return(
    <>
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Helmet><div className="main">
        <h2 className="main-title">{title}</h2>
        <div className="main-description">{description.data.description}</div>
        <div className="Heading-wrapper">
          <Link to='/articles' className="Heading-Link">
            <h3 className="Heading">Movies</h3>
          </Link>
          <CommonComponent data={articles} />
        </div>
        <div className="Heading-wrapper">
          <Link to='/genres' className="Heading-Link">
            <h3 className="Heading">Genres</h3>
          </Link>
          <CommonComponent data={genres} />
        </div>
        <div className="Heading-wrapper">
          <Link to='/authors' className="Heading-Link">
            <h3 className="Heading">Directors</h3>
          </Link>
          <CommonComponent data={authors} />
        </div>
      </div></>
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
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`