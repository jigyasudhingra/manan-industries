import React from 'react'
import { ThemeProvider } from '@mui/styles'
import { Box, createTheme, CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/Products'
import './App.css'

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <BrowserRouter>
        <Box className="App">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/products" element={<ProductScreen />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}

const THEME = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        }
      `,
    },
  },
})

export default App
