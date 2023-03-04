import React from "react"
import { Link } from "gatsby"
import { truncate } from "../utils/index"
import Anabelle from "../assets/anabelle.jpg"
import Hangover from "../assets/hangover.jpg"
import Chad from "../assets/chad.jpg"
import David from "../assets/david.jpg"
import JamesCameron from "../assets/james-cameron.jpg"
import JohnLeonetti from "../assets/john-leonetti.jpg"
import JohnWick from "../assets/john-wick.jpg"
import Joker from "../assets/joker.jpg"
import LightsOut from "../assets/lights-out.jpg"
import Lokesh from "../assets/lokesh.jpg"
import Titanic from "../assets/titanic.jpg"
import Todd from "../assets/todd-philips.jpg"
import Vikram from "../assets/vikram.jpg"

const CommonComponent = ({ data }) => {
  const characterLimit = 100
  return (
    <div className="component-container">
      {data.map(item => {
        const { title, description, slug, image } = item
        
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
          case "Chad-Stahelski":
            Icon = Chad
            break
          case "David-F-Sandberg":
            Icon = David
            break
          case "james-cameron":
            Icon = JamesCameron
            break
          case "John-R-Leonetti":
            Icon = JohnLeonetti
            break
          case "Todd-Phillips":
            Icon = Todd
            break
          case "Lokesh-Kanagaraj":
            Icon = Lokesh
            break
          default:
            break
        }
        return (
          <Link to={`${slug}`} className="component-container-card">
            <div key={title}>
              <h3 className="component-container-card-title">{title}</h3>
              {image && (
                <div className="component-container-card-image">
                  <img src={Icon} alt={image} />
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
