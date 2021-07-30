const path = require('path')
const query = require('../data/query')

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create a page for each project
  const projectsQuery = await graphql(query.data.projects)
  const projects = projectsQuery.data.allContentfulProject.edges
  projects.forEach((project, index) => {
    const selected = project.node
    const next = index === projects.length - 1 ? null : projects[index + 1].node
    const prev = index === 0 ? null : projects[index - 1].node

    createPage({
      path: `/portfolio/${project.node.slug}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        ...selected,
        prev,
        next,
      },
    })
  })
}
