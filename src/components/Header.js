/* global tw */
import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import Navigation from './Navigation'
import logo from '../images/logo.svg'
import { animation, colors, fonts, media } from '../tokens'

const Header = styled('header')``

const SkipToContent = styled('a')`
  transition: none;

  :focus,
  :active,
  :hover {
    clip: auto;
    width: auto;
    height: auto;
    background-color: ${colors.black};
    border: 2px solid ${colors.black};
    border-radius: 0;
    color: ${colors.black};
    padding: 0.5rem 1rem;
    z-index: 5000;
  }
`

const NavLink = styled(Link)``

const LogoLink = styled(NavLink)``

const Logo = styled('img')``

const topLevelNav = [
  {
    href: '/en-CA/',
    label: 'Home',
  },
  {
    href: '/en-CA/about/',
    label: 'About',
  },
]

export default ({ children }) => (
  <Header role="banner">
    <SkipToContent
      href="#content"
      id="skip-navigation"
      className="screen-reader-text"
    >
      Skip to Content
    </SkipToContent>
    <Navigation />
    {children}
  </Header>
)
