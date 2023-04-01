import React from "react"
import { Link } from "gatsby"
import { truncate } from "../utils/index"

const CommonComponent = ({ data, PageSLug}) => {
  const characterLimit = 100
  return (
    <div className="component-container">
      {data.map(item => {
        const { title, description, slug, image } = item;
        return (
          <Link to={`/${PageSLug}${slug}`} className="component-container-card">
            <div key={title} className="component-container-card-wrapper">
              <h3 className="component-container-card-title">{title}</h3>
              {image && (
                <div className="component-container-card-image">
                  <img src={image.url} alt={title} />
                </div>
              )}
              <div className="component-container-card-description">
                {truncate(description.data.description, characterLimit)}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default CommonComponent
