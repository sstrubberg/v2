import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import { globalStyles } from '../../styles/globalStyles.js'
import Menu from './Menu'
import Transition from './Transition'

const Root = styled.div`
  padding-top: 60px;
`

const Footer = styled.footer`
  left: 0;
  bottom: 0;
`

const Layout = props => {
  const { children } = props
  function handleFirstTab() {}
  return (
    <>
      <Global styles={globalStyles} />
      <Helmet />
      <Menu />
      <Transition {...props}>
        <Root>{children}</Root>
      </Transition>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </>
  )
}

export default Layout
