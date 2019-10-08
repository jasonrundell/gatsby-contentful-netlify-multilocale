import React from 'react'
import { Global, css } from '@emotion/core'
import { animation, colors, fonts, media } from '../../tokens'

export default () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      body {
        background-color: ${colors.white};
        color: ${colors.black};
      }
    `}
  />
)
