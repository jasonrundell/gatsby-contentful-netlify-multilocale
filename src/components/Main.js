import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Container = styled('main')``

const Main = ({ children }) => <Container id="content">{children}</Container>

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Main.defaultProps = {
  className: '',
}

export default Main
