/* eslint react/display-name: 0 */

import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import useContentfulImage from '../../util/hooks/useContentfulImage'
import useContentfulVideo from '../../util/hooks/useContentfulVideo'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.fonts.body};
  margin: 0 auto;
  padding: 2.5rem 1.5rem;

  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    /* padding: 2.5em 3em; */
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-column-gap: 0.75rem;
    > * {
      grid-column: 3 / span 12;
    }
  }

  // Break points for copy
  @media screen and (min-width: ${props => props.theme.responsive.lg}) {
    > * {
      /* padding: 2.5rem 2rem; */

      grid-column: 4 / span 10;
    }
  }

  @media screen and (min-width: ${props => props.theme.responsive.xl}) {
    > * {
      /* padding: 2.5rem 2rem; */

      grid-column: 5 / span 8;
    }
  }

  // Break points for images
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    > *.gatsby-image-wrapper {
      grid-column: 1 / span 16;
    }
  }

  @media screen and (min-width: ${props => props.theme.responsive.lg}) {
    > *.gatsby-image-wrapper {
      grid-column: 2 / span 14;
    }
  }

  h1,
  h2 {
    font-size: 2rem;
    padding-top: 1rem;
  }
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${props => props.theme.fontWeights.medium};
    line-height: 1.15;
    margin: 0 0 1.25rem;
  }

  h1 {
    font-size: 1.866rem;
    @media screen and (min-width: ${props => props.theme.responsive.md}) {
      font-size: 2.488rem;
    }
  }

  p {
    margin-bottom: 1.25rem;
    font-size: 1.266rem;
    font-weight: ${props => props.theme.fontWeights.light};
  }

  a {
    color: ${props => props.theme.colors.text};
    transition: color 0.3s;
    &:hover {
      color: ${props => props.theme.colors.hover};
    }
  }

  video {
    width: 100%;
    pointer-events: none;
    border: 2px solid ${props => props.theme.colors.secondary};
    background: ${props => props.theme.colors.muted};

    @media screen and (min-width: ${props => props.theme.responsive.md}) {
      grid-column: 2 / span 14;
    }
  }
`

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const fluid = useContentfulImage(
        node.data.target.fields.file['en-US'].url
      )
      const video = useContentfulVideo(
        node.data.target.fields.file['en-US'].url
      )

      if (fluid) {
        return (
          <Img title={node.data.target.fields.title['en-US']} fluid={fluid} />
        )
      }
      if (video) {
        return (
          <video
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            src={video.file.url}
          />
        )
      }
      return undefined
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri}>{children}</a>
    ),
  },
}

const Content = props => {
  const { markdown } = props
  return markdown ? (
    <>
      <Wrapper>{documentToReactComponents(markdown.json, options)}</Wrapper>
    </>
  ) : null
}

export default Content
