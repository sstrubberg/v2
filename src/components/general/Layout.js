import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import { globalStyles } from '../../styles/globalStyles.js'
import Menu from './Menu'
import Transition from './Transition'
import Footer from './Footer'

const Root = styled.div`
  padding-top: 60px;
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
      <Footer />
    </>
  )
}

export default Layout
