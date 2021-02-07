module.exports.data = {
  projects: `
  {
    allContentfulProject(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          content {
            json
          }
        }
      }
    }
  }
`,
}
