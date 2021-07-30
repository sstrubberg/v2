import React from 'react'
import styled from '@emotion/styled'

import SEO from '../components/general/SEO'

const Wrapper = styled.div`
  height: 83vh;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1.5rem;
`

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.body};
  font-size: 1rem;

  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: ${props => props.theme.responsive.lg}) {
    font-size: 2rem;
  }
`

const StyledLink = styled.a`
  color: ${props => props.theme.colors.text};
  transition: color 0.3s;
  :hover {
    color: ${props => props.theme.colors.hover};
  }
`

const Contact = () => (
  <>
    <SEO title="Contact" />
    <Wrapper>
      <H1>
        This will eventually be a form 💌. Until then{' '}
        <StyledLink
          alt="Send an email to Scott"
          href="mailto:sstrubberg@protonmail.com"
        >
          send me a note
        </StyledLink>
        .
      </H1>
    </Wrapper>
  </>
)

export default Contact
