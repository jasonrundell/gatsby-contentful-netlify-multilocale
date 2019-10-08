import React from 'react'
import { Global, css } from '@emotion/core'

export default () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
    `}
  />
)
