import React from 'react'
// import { useInView } from 'react-intersection-observer'
// import { motion } from 'framer-motion'
// import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Container = styled.div`
  height: 100vw;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-row-gap: 0.5rem;
  padding: 2.5rem 1.5rem;
`

const Paragraph = styled.p`
  grid-row: 4;
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.2rem;
`

const ContactMe = props => (
  <Container>
    <Paragraph>
      Want to learn more? Reach out and{' '}
      <Link style={{ color: '#FFF' }} to="/contact">
        contact
      </Link>{' '}
      me.
    </Paragraph>
  </Container>
)

export default ContactMe
