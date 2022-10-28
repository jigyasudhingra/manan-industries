import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ContactInfo from '../Components/ContactInfo'
import NavigationMenu from '../Components/NavigationMenu'

const ContactUs = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
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
