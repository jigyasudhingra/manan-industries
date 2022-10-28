import React from 'react'
import { Box } from '@mui/material'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ProductScreen from './Screens/Products'
import './App.css'
import Home from './Screens/Home'
import Listing from './Screens/Products/Listing'
import ContactUs from './Screens/ContactUs'

const App = () => {
  return (
    <HashRouter>
      <Box className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductScreen />} />
          <Route path="/products/:category" element={<Listing />} />
          <Route path="/contact-us/" element={<ContactUs />} />
        </Routes>
      </Box>
    </HashRouter>
  )
}

export default App
