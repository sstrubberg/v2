import React from 'react'
import { graphql } from 'gatsby'
import Content from '../components/templates/Content'
import Hero from '../components/templates/Hero'
import NextPrev from '../components/templates/NextPrev'

const ProjectTemplate = ({ pageContext }) => {
  const { title, content, cover, prev, next, slug } = pageContext
  // console.log(pageContext)
  return (
    <>
      <Hero image={cover} title={title} />
      <Content markdown={content} />
      <NextPrev prev={prev} next={next} currentPage={slug} />
    </>
  )
}

export default ProjectTemplate
