/* eslint react/display-name: 0 */

import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Img from 'gatsby-image'

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const imgURL = node.data.target.fields.file['en-US'].url
      const altTag = node.data.target.fields.description['en-US']
      console.log()
      return <img alt={altTag} src={`https:${imgURL}`} />
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
