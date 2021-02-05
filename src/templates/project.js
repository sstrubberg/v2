import React from 'react'
import { graphql } from 'gatsby'

const ProjectTemplate = ({ pageContext }) => {
  const { title } = pageContext
  console.log(pageContext)

  // const previous = pageContext.prev
  // const next = pageContext.next

  return (
    <>
      <div>{title}</div>
      <div>test</div>
    </>
  )
}

export default ProjectTemplate
