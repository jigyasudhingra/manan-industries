import React from 'react'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ProductScreen from './Screens/Products'
import './App.css'
import Home from './Screens/Home'
import Listing from './Screens/Products/Listing'
import ContactUs from './Screens/ContactUs'
import LandingPage from './Components/LandingPage'

const App = () => {
  return (
    <Router>
      <Box className="App">
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/products/:category" element={<Listing />} />
            <Route path="/contact-us/" element={<ContactUs />} />
            <Route path="/landing/" element={<LandingPage />} />
          </Routes>
        </HelmetProvider>
      </Box>
    </Router>
  )
}

export default App
