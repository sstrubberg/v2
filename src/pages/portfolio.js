import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import SEO from '../components/general/SEO'
import PortfolioList from '../components/templates/PortfolioList'

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
            title
            date(formatString: "MMMM Do, YYYY")
            content {
              json
            }
            cover {
              title
              fluid(maxWidth: 1000) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allContentfulProject.edges

  return (
    <>
      <SEO title="Portfolio" />
      <PortfolioList projects={projects} />
    </>
  )
}

export default PortfolioPage
