import { Box } from '@mui/material'
import React from 'react'
import ContactInfo from '../Components/ContactInfo'
import NavigationMenu from '../Components/NavigationMenu'

const ContactUs = () => {
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: 'rgba(34,1,77,1)',
      }}
    >
      <NavigationMenu ProductsPage />
      <Box pt={8}>
        <ContactInfo />
      </Box>
    </Box>
  )
}

export default ContactUs
