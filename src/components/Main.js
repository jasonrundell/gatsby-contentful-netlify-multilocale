import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'

const Container = styled('main')``

const Main = ({ theme, children }) => (
  <Container
    id="content"
    sx={{
      // this uses the value from `theme.space[4]`
      padding: 4,
      // these use values from `theme.colors`
      color: 'white',
      backgroundColor: 'white',
    }}
  >
    {children}
  </Container>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Main.defaultProps = {
  className: '',
}

export default Main
