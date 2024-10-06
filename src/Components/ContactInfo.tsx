import { Box } from '@mui/material'
import React from 'react'

import ContactForm from './ContactForm'
import MediaQuery from './MediaQuery'
import Footer from './Footer'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactInfo = () => {
  const { isDeviceSm } = MediaQuery()
  return (
    <Box
      sx={{
        background: 'rgba(34,1,77,1)',
        color: 'white',
      }}
      // pt={isDeviceSm ? 5 : 7}
      // pl={isDeviceSm ? 5 : 35}
      // pr={isDeviceSm ? 5 : 35}
      // pb={isDeviceSm ? 5 : 7}
    >
      <ContactForm />
      <Footer />
    </Box>
  )
}

export default ContactInfo
