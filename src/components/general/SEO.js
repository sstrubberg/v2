import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            author
            description
            github
            linkedIn
            siteUrl
            title
            image
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || site.siteMetadata.url + site.siteMetadata.image

  return (
    <Helmet
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <html lang="en" />
      <title>{title}</title>

      {/* Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="image" content={image} />

      {/* Open Graph */}
      <meta property="og:image" content={metaImage} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
    </Helmet>
  )
}

export default SEO
