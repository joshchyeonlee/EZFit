import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B2D42'
    },
    secondary: {
      main: '#8d99ae'
    },
    error: {
      main: '#edf2f4'
    },
    warning: {
      main: '#ef233c'
    },
    info: {
      main: '#d90429'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14
  }
})

export default theme
