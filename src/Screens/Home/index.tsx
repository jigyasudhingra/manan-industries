import { Box } from '@mui/material'
import React from 'react'
import ContactInfo from '../../Components/ContactInfo'
import NavigationMenu from '../../Components/NavigationMenu'
import AboutUs from './AboutUs'
import Rainbow from './Rainbow'
import Welcome from './Welcome'

const Home = () => {
  return (
    <Box width="100%">
      <NavigationMenu ProductsPage={false} />
      <Welcome />
      <AboutUs />
      <Rainbow />
      {/* <Testimonials /> */}
      <ContactInfo />
    </Box>
  )
}

export default Home
