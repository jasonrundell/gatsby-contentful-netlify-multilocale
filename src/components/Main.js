import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const main = styled('main')`
  margin: 5rem auto 6rem;
  max-width: 57ch;
`

const Main = ({ children, className }) => (
  <main id="content" className={className}>
    {children}
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Main.defaultProps = {
  className: '',
}

export default Main
