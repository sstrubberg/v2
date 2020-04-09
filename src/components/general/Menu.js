import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Header = styled.header``

const Nav = styled.nav``

const UnOrderedList = styled.ul``

const ListItem = styled.li``

const Toggle = styled.button``

const Menu = () => (
  <Header>
    <Nav>
      <Toggle></Toggle>
      <UnOrderedList>
        <ListItem>
          <Link to="/">Scott Strubberg</Link>
        </ListItem>
        <ListItem>
          <Link to="/portfolio">Portfolio</Link>
        </ListItem>
        <ListItem>
          <Link to="/contact">Contact</Link>
        </ListItem>
      </UnOrderedList>
    </Nav>
  </Header>
)

export default Menu
