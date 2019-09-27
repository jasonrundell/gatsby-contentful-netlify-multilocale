import React from "react"
import Img from "gatsby-image"

import styles from "./hero.module.css"

export default ({ image, imageAltText }) => (
  <div>
    <Img alt={imageAltText} fluid={image.fluid} />
  </div>
)
