import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Header = styled.header`
  font-family: ${props => props.theme.fonts.body};
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 3rem;
    padding-left: 3rem;
    display: block;
  }
`

const UnOrderedList = styled.ul``

const ListItem = styled.li``

const Toggle = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1.5rem;
  width: 1.5rem;
  height: 60px;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    display: none;
  }
`

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
