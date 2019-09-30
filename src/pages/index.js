import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            title
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Projects" />
      <ol>
        {data.allContentfulProject.edges.map(edge => {
          return (
            <li>
              <Link to={`${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p></p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default IndexPage
