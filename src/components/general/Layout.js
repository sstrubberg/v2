import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import { globalStyles } from '../../styles/globalStyles.js'
import Menu from './Menu'

const Root = styled.div`
  padding-top: 60px;
`

const Layout = ({ children, props }) => {
  function handleFirstTab() {}
  return (
    <>
      <Global styles={globalStyles} />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Menu />
      <div {...props}>
        <Root>{children}</Root>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
