import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import '../styles/global.scss'
import SEO from '../components/seo'

const PortfolioPage = () => {
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
    <>
      <SEO title="Portfolio" />
      <ol>
        {data.allContentfulProject.edges.map(edge => (
          <li>
            <Link to={`${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p></p>
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}

export default PortfolioPage
