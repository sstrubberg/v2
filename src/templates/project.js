import React from 'react'
import { graphql } from 'gatsby'
import Content from '../components/templates/Content'
import Hero from '../components/general/Hero'

const ProjectTemplate = ({ pageContext }) => {
  const { title, content, cover } = pageContext

  // console.log(pageContext)
  // const previous = pageContext.prev
  // const next = pageContext.next

  return (
    <>
      <Hero image={cover} />
      <div>{title}</div>
      <Content markdown={content} />
    </>
  )
}

export default ProjectTemplate
