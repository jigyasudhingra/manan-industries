import { Box } from '@mui/material'
import React from 'react'
import AboutUs from './AboutUs'
import Rainbow from './Rainbow'
import Testimonials from './Testimonials'
import Welcome from './Welcome'

const Home = () => {
  return (
    <Box width="100%">
      <Welcome />
      <AboutUs />
      <Rainbow />
      <Testimonials />
    </Box>
  )
}

export default Home
