import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background};
  /* padding: 0 1.5rem 2rem; */
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    /* padding: 0 3rem 2rem; */
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 0.75rem;
  }
`

const ScrollingVideo = styled.video`
  width: 100%;
  pointer-events: none;
  border: 2px solid ${props => props.theme.colors.secondary};

  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    grid-column: 2 / span 14;
  }
`

const Video = props => {
  const { video } = props
  return (
    <Wrapper>
      <ScrollingVideo
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        src={video[0].file.url}
      />
    </Wrapper>
  )
}

export default Video
