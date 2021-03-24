import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

const PortfolioList = props => {
  const { projects } = props
  console.log(projects)
  return (
    <ol>
      {projects.map(({ node: project }) => (
        <li key={project.slug}>
          <Link to={`${project.slug}`}>
            <Img
              alt={project.cover.title}
              sizes={{ ...project.cover.fluid, aspectRatio: 1 / 1 }}
            />
            <h2>{project.title}</h2>
          </Link>
        </li>
      ))}
    </ol>
  )
}

export default PortfolioList
