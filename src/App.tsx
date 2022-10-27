import React from 'react'
import { Box } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductScreen from './Screens/Products'
import './App.css'
import NavigationMenu from './Components/NavigationMenu'
import Home from './Screens/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Box className="App">
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductScreen />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
