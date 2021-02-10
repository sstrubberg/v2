/* eslint react/display-name: 0 */

import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Image from 'gatsby-image'
import useContentfulImage from '../../util/hooks/useContentfulImage'

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    // [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
    //   const imgURL = node.data.target.fields.file['en-US'].url
    //   const altTag = node.data.target.fields.description['en-US']
    //   return <img alt={altTag} src={`https:${imgURL}`} />
    // },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const fluid = useContentfulImage(
        node.data.target.fields.file['en-US'].url
      )
      return (
        <Image title={node.data.target.fields.title['en-US']} fluid={fluid} />
      )
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri}>{children}</a>
    ),
  },
}

const Content = ({ markdown }) => (
  <>{documentToReactComponents(markdown.json, options)}</>
)

export default Content
