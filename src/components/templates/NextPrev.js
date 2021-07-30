import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Grid = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.muted};

  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    padding: 2.5rem 3rem;
  }
`

const PrevContainer = styled.div`
  display: inline-block;
  padding: 1rem;
  width: 25%;
`

const NextContainer = styled.div`
  display: inline-block;
  padding: 1rem;
  width: 25%;
`

const Text = styled.p`
  color: white;
  font-family: ${props => props.theme.fonts.body};
`

const StyledImg = styled(Img)``

const StyledLink = styled(Link)`
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
  }
`

const NextPrev = props => {
  const { next, prev } = props

  return (
    <>
      <Grid>
        {prev && (
          <PrevContainer>
            <StyledLink to={`/portfolio/${prev.slug}`}>
              <div>Previous</div>
              <Text>{prev.title}</Text>

              <StyledImg
                fluid={{
                  ...prev.cover.fluid,
                  aspectRatio: 2 / 1,
                }}
              />
            </StyledLink>
          </PrevContainer>
        )}
        {next && (
          <NextContainer>
            <StyledLink to={`/portfolio/${next.slug}`}>
              <Img
                fluid={{
                  ...next.cover.fluid,
                  aspectRatio: 2 / 1,
                }}
              />
              <div>Next</div>
              <Text>{next.title}</Text>
            </StyledLink>
          </NextContainer>
        )}
      </Grid>
    </>
  )
}

export default NextPrev
