const path = require('path')
const query = require('../data/query')

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create a page for each project
  const projectsQuery = await graphql(query.data.projects)
  const projects = projectsQuery.data.allContentfulProject.edges
  projects.forEach((project, i) => {
    const selected = project.node
    // const next = i === 0 ? null : projects[i - 1].node
    // console.log(next)
    createPage({
      path: `/portfolio/${project.node.slug}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        ...selected,
        // next,
      },
    })
  })
}
