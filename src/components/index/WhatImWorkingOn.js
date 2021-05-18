import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Container = styled(motion.div)`
  /* display: grid; */
  /* grid-template-rows: repeat(4, 1fr); */
  /* grid-row-gap: 0.5rem; */
  padding: 2.5rem 1.5rem;
  height: 90vh;
  min-height: 50vh;

  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.5rem;
  }
  @media screen and (min-width: ${props => props.theme.responsive.lg}) {
    grid-template-columns: repeat(6, 1fr);
    padding: 2.5rem 3rem;
  }
`

const StyledLink = styled(Link)`
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    grid-column: 3 / span 2;
  }
  @media screen and (min-width: ${props => props.theme.responsive.lg}) {
    grid-column: 4 / span 3;
  }
`

const Image = styled(Img)`
  /* grid-column: 2 / span 6; */
  /* grid-row: 2; */
  /* padding: 2.5rem 1.5rem; */
`

const ProjectsParagraph = styled.p`
  grid-column: 1 / span 2;
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.2rem;
  padding-top: 2rem;
  grid-row: 1;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    padding-top: 0rem;
  }
`

const WhatImWorkingOn = props => {
  const { latestProject } = props

  const [ref, isVisible] = useInView({ threshold: 0.7 })
  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 1,
    },
  }

  return (
    <Container
      ref={ref}
      variants={variants}
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <StyledLink to={`/portfolio/${latestProject.slug}`}>
        <Image
          alt={latestProject.description}
          fluid={{ ...latestProject.cover.fluid, aspectRatio: 1 / 1 }}
        />
      </StyledLink>
      <ProjectsParagraph>
        Checkout my{' '}
        <Link style={{ color: '#FFF' }} to={`/portfolio/${latestProject.slug}`}>
          latest project.
        </Link>{' '}
        <br />
        <br />
        <p>
          You can also take a look at my entire{' '}
          <Link style={{ color: '#FFF' }} to="/portfolio">
            portfolio
          </Link>{' '}
          of work.
        </p>
      </ProjectsParagraph>
    </Container>
  )
}

export default WhatImWorkingOn
