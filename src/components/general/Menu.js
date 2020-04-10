import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Header = styled.header`
  font-family: ${props => props.theme.fonts.body};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  /* max-height: ${props => (props.open ? '100%' : '60px')}; */
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 3rem;
    padding-left: 3rem;
    display: block;
  }
`

const UnOrderedList = styled.ul`
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0.75rem;
    justify-items: end;
  }
`

const ListItem = styled(motion.li)`
  display: flex;
  justify-content: center;
`

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

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
  }

  const listItemVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  }

  return (
    <Header>
      <Nav>
        <Toggle onClick={toggle} aria-label="Toggle Menu"></Toggle>
        <UnOrderedList>
          <ListItem
            initial={false}
            variants={listItemVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
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
}

export default Menu
