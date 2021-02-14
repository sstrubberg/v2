const Fluid = `
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
`

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
          cover {
            title
            fluid {
              ${Fluid}
            }
          }
        }
      }
    }
  }
`,
}
