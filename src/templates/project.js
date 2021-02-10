import React from 'react'
import { graphql } from 'gatsby'
import Content from '../components/templates/Content'

const ProjectTemplate = ({ pageContext }) => {
  const { title, content } = pageContext

  // const previous = pageContext.prev
  // const next = pageContext.next

  return (
    <>
      <div>{title}</div>
      <Content markdown={content} />
    </>
  )
}

export default ProjectTemplate
