import { Box } from '@mui/material'
import React from 'react'
import ContactForm from './ContactForm'
import MediaQuery from './MediaQuery'
import Footer from './Footer'

const ContactInfo = () => {
  const { isDeviceSm } = MediaQuery()
  return (
    <Box
      sx={{
        background: 'rgba(34,1,77,1)',
        color: 'white',
      }}
    >
      <ContactForm />
      <Footer />
    </Box>
  )
}

export default ContactInfo
