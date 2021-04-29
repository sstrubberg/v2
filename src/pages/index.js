import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

// import Image from "../components/image"
import '../styles/global.scss'
import SEO from '../components/general/SEO'
import Intro from '../components/index/Intro'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Intro />
  </>
)

export default IndexPage
