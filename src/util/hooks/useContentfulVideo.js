import { graphql, useStaticQuery } from 'gatsby'

export default assetUrl => {
  const { allContentfulAsset } = useStaticQuery(
    graphql`
      query CONTENTFUL_VIDEO_QUERY {
        allContentfulAsset {
          nodes {
            file {
              url
            }
          }
        }
      }
    `
  )
  return allContentfulAsset.nodes.find(n => n.file.url === assetUrl)
}
