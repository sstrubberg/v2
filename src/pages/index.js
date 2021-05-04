import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import '../styles/global.scss'
import SEO from '../components/general/SEO'
import Intro from '../components/index/Intro'
import WhatImWorkingOn from '../components/index/WhatImWorkingOn'

export const query = graphql`
  query INDEX_PAGE {
    allContentfulProject(limit: 1, sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          cover {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const latestProject = data.allContentfulProject.edges[0].node

  return (
    <>
      <SEO title="Home" />
      <Intro />
      <WhatImWorkingOn latestProject={latestProject} />
    </>
  )
}

export default IndexPage
