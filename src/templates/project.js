import React from "react"
import { graphql } from "gatsby"

const ProjectTemplate = ({ data, pageContext }) => {
  const { title } = data.contentfulProject

  // const previous = pageContext.prev
  // const next = pageContext.next

  return (
    <>
      <div>{title}</div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      title
      publishedDate(formatString: "MMMM Do, YYYY")
    }
  }
`

export default ProjectTemplate
