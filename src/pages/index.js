import React from "react"
import '../style/global.scss';
import { graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet';
import CommonComponent from '../component/common-component';

export default function Home({data}) {
const { title,description } = data.strapiHomepage;
const genres = data.allStrapiGenre.nodes;
const seo = data.site.siteMetadata;
  return(
    <>
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Helmet><div className="main">
        <h2 className="main-title">{title}</h2>
        <div className="main-description">{description.data.description}</div>
        <div className="Heading-wrapper container">
          <Link to='/genres' className="Heading-Link">
            <h3 className="Heading">Genres</h3>
          </Link>
          <CommonComponent data={genres} PageSLug="genres" />
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
    allStrapiAuthor {
      nodes {
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
    allStrapiGenre {
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
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`