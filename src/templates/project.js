import React from 'react'
import { graphql } from 'gatsby'
import Content from '../components/templates/Content'
import Hero from '../components/templates/Hero'

const ProjectTemplate = ({ pageContext }) => {
  const { title, content, cover } = pageContext

  // console.log(pageContext)
  // const previous = pageContext.prev
  // const next = pageContext.next

  return (
    <>
      <Hero image={cover} title={title} />
      <Content markdown={content} />
    </>
  )
}

export default ProjectTemplate
