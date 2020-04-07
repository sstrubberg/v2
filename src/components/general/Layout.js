import React from 'react'
import styled from '@emotion/styled'
import Helmet from 'react-helmet'
import Menu from './Menu'

const Root = styled.div`
  padding-top: 60px;
`

const Layout = ({ children }) => {
  function handleFirstTab() {}
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Menu />
        <div {...children}>
          <Root>{children}</Root>
        </div>
      </div>
    </>
  )
}

export default Layout
