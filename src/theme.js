const darkTheme = {
  colors: {
    white: '#000000',
    light: '#1c304a',
    bright: '#b3efff',
    medium: '#046b99',
    dark: '#00cfff',
    black: '#ffffff',
    error: '#00CFFF',
  },
}

export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#609',
    modes: {
      dark: {
        text: '#fff',
        background: '#222',
        primary: '#0cf',
        secondary: '#90c',
      },
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      color: 'text',
      bg: 'background',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
  },
}
