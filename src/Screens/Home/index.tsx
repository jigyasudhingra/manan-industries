import { Box } from '@mui/material'
import React from 'react'
import ContactForm from '../../Components/ContactForm'
import ContactInfo from '../../Components/ContactInfo'
import NavigationMenu from '../../Components/NavigationMenu'
import AboutUs from './AboutUs'
import Rainbow from './Rainbow'
import Testimonials from './Testimonials'
import Welcome from './Welcome'

const Home = () => {
  return (
    <Box width="100%">
      <NavigationMenu ProductsPage={false} />
      <Welcome />
      <AboutUs />
      <Rainbow />
      <Testimonials />
      <ContactForm />
      <ContactInfo />
    </Box>
  )
}

export default Home
