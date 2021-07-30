import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import cx from 'classnames'

const Header = styled.header`
  font-family: ${props => props.theme.fonts.body};
  background: ${props => props.theme.colors.background};
  transition: 0.4s ease-out;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  max-height: ${props => (props.open ? '100%' : '60px')};
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    display: block;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 3rem;
    padding-left: 3rem;
  }
`

const UnOrderedList = styled.ul`
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1.75rem;
    justify-items: center;
  }
`

const ListItem = styled(motion.li)`
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    opacity: 1 !important;
    pointer-events: auto;
  }
  &:first-of-type {
    text-align: left;
    position: fixed;
    left: 1.5rem;
    top: 0;
    pointer-events: auto;
    opacity: 1 !important;
    @media screen and (min-width: ${props => props.theme.responsive.md}) {
      position: relative;
      left: 0rem;
      grid-column: 1 / span 9;
      justify-self: start;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    transition: color 0.3s;
    :hover {
      color: ${props => props.theme.colors.hover};
    }
  }
`

const BurgerWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
`

const Burger = styled.button`
  cursor: pointer;
  @media screen and (min-width: ${props => props.theme.responsive.md}) {
    display: none;
  }
`

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const close = () => {
    setIsOpen(false)
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
    <Header open={isOpen}>
      <Nav>
        <BurgerWrapper>
          <Burger
            open={isOpen}
            onClick={toggle}
            className={cx('hamburger hamburger--collapse', [
              isOpen ? 'is-active' : null,
            ])}
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </Burger>
        </BurgerWrapper>
        <UnOrderedList open={isOpen}>
          <ListItem
            initial={false}
            variants={listItemVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
            <Link to="/">Scott Strubberg</Link>
          </ListItem>
          <ListItem
            initial={false}
            variants={listItemVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
            <Link to="/portfolio" onClick={close}>
              Portfolio
            </Link>
          </ListItem>
          <ListItem
            initial={false}
            variants={listItemVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
            <Link to="/uses" onClick={close}>
              Uses
            </Link>
          </ListItem>
          <ListItem
            initial={false}
            variants={listItemVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
            <Link to="/contact" onClick={close}>
              Contact
            </Link>
          </ListItem>
        </UnOrderedList>
      </Nav>
    </Header>
  )
}

export default Menu
