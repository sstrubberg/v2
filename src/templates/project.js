import React from 'react'
import { graphql } from 'gatsby'
import Content from '../components/templates/Content'
import Hero from '../components/templates/Hero'

const ProjectTemplate = ({ pageContext }) => {
  const { title, content, cover, video, summary } = pageContext

  // const previous = pageContext.prev
  // const next = pageContext.next

  return (
    <>
      <Hero image={cover} title={title} />
      {summary && <Summary summary={summary}></Summary>}
      {video && <Video video={video} />}
      <Content markdown={content} />
    </>
  )
}

export default ProjectTemplate
