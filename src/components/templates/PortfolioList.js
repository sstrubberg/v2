import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Truncate from 'react-truncate'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  padding: 2.5rem 1.5rem;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    padding: 2.5rem 3rem;
  }
`

const List = styled.ul`
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.75rem;
  }
  @media screen and (min-width: ${props => props.theme.responsive.lg}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1.5rem;
  }
`

const ListItem = styled.li`
  margin-bottom: 2rem;
`

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  &:hover {
    h2 {
      color: ${props => props.theme.colors.hover};
    }
    span > span > span > span {
      opacity: 0.7;
    }
  }

  // Hacky way to style the summary with ellipses
  span > span > span > span {
    font-family: ${props => props.theme.fonts.body};
    transition: 0.3s opacity;
  }
  //
`

const H2 = styled.h2`
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.5rem;
  padding-top: 0.8rem;
  padding-bottom: 0.5rem;
  transition: 0.3s color;
`

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
}

const PortfolioList = props => {
  const { projects } = props
  return (
    <Wrapper>
      <List>
        {projects.map(({ node: project }) => (
          <ListItem key={project.slug}>
            <ProjectLink to={`${project.slug}`}>
              <Img
                alt={project.cover.title}
                fluid={{ ...project.cover.fluid, aspectRatio: 1 / 1 }}
              />
              <H2>{project.title}</H2>
              <Truncate
                lines={1}
                width={1000}
                ellipsis="&hellip;"
                trimWhitespace
              >
                {documentToReactComponents(project.content.json, options)}
              </Truncate>
            </ProjectLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

export default PortfolioList
