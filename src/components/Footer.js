import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, media } from '../tokens'

const Footer = styled('footer')``

const Copyright = styled('span')``

const FooterLink = styled(Link)``

export default () => (
  <Footer>
    <FooterLink to="/en-CA/">Home</FooterLink>
    <FooterLink to="/en-CA/about/">About</FooterLink>
    <Copyright>All content © Author</Copyright>
  </Footer>
)
