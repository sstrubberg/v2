import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import '../styles/global.scss'
import SEO from '../components/general/SEO'

const H2 = styled.h2`
  color: white;
`

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
            title
            date(formatString: "MMMM Do, YYYY")
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
          <li key={edge.node.slug}>
            <Link to={`${edge.node.slug}`}>
              <H2>{edge.node.title}</H2>
              <p></p>
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}

export default PortfolioPage
