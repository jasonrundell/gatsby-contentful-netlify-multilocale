import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled('main')`
  margin: 0 auto;
  max-width: 57ch;
`

const Container = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Container.defaultProps = {
  className: '',
}

export default Container
