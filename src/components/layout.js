/* eslint-disable react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import GlobalStyles from './GlobalStyles'

export default ({ children, title }) => [
  <Helmet key="app-head" titleTemplate="%s">
    <html lang="en" />

    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>{title}</title>

    <meta
      name="apple-mobile-web-app-title"
      content="Gatsby, Contentful, Netlify Demo"
    />
    <meta name="application-name" content="Gatsby, Contentful, Netlify Demo" />
    <meta name="theme-color" content="#222222" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222222" />
  </Helmet>,
  <GlobalStyles key="global-styles" />,
  <Header key="app-header" />,
  <Main key="app-main">{children}</Main>,
  <Footer key="app-footer" />,
]
