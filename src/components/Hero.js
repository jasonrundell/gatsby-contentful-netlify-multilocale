import React from 'react'
import Img from 'gatsby-image'

export default ({ image, imageAltText }) => (
  <div>
    <Img alt={imageAltText} fluid={image.fluid} />
  </div>
)
