import React from 'react'
import styled from '@emotion/styled'

import SEO from '../components/general/SEO'

const Wrapper = styled.div`
  height: 90vh;
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
  /* text-decoration: none; */
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
        <StyledLink href="mailto:sstrubberg@protonmail.com">
          send me note
        </StyledLink>
        .
      </H1>
    </Wrapper>
  </>
)

export default Contact
