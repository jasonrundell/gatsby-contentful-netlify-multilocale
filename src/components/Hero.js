import React from 'react'
import Img from 'gatsby-image'

export default ({ image, imageAltText }) => (
  <>
    <Img alt={imageAltText} fluid={image.fluid} />
  </>
)
