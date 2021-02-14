import React from 'react'
import Img from 'gatsby-image'

const Hero = props => {
  const { image } = props
  return image ? (
    <>
      <Img
        fluid={{
          ...image.fluid,
          aspectRatio: 3 / 2,
        }}
      />
    </>
  ) : null
}

export default Hero
