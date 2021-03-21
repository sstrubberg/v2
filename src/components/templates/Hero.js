import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'
import { scale } from '../../util/utils'

const Cover = styled(motion.div)`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: -2;
  transform-origin: center bottom;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    height: 100%;
    max-height: 70vh;
  }
`

const Height = styled.div`
  display: block;
  padding-bottom: 66.67%;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    height: 70vh;
    padding: 0;
  }
`

const BgImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100%;
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1.5rem;
  /* width: 100%; */
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-gap: 0.75rem;
    align-items: center;
    justify-items: start;
  }
`
const Text = styled.div`
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    grid-column: 3 / span 14;
  }
  @media screen and (min-width: ${props => props.theme.responsive.lg}) {
    grid-column: 4 / span 12;
  }
  @media screen and (min-width: ${props => props.theme.responsive.xl}) {
    grid-column: 5 / span 10;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
`

const Hero = props => {
  const { image, title } = props

  return image ? (
    <>
      <ScrollAnimation
        render={({ progress }) => {
          const zoom = scale(progress, 1, 1.05)
          return (
            <>
              <Height />
              <Cover
                style={{
                  scale: zoom,
                }}
              >
                <BgImg
                  fluid={{
                    ...props.image.fluid,
                    aspectRatio: 3 / 2,
                  }}
                  alt={props.image.title}
                />
              </Cover>
            </>
          )
        }}
      />
      <Wrapper>
        <Text>
          <Title>{title}</Title>
        </Text>
      </Wrapper>
    </>
  ) : null
}

export default Hero
