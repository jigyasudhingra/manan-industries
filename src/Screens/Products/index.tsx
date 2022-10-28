import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ContactInfo from '../../Components/ContactInfo'
import Categories from './Categories'

const ProductScreen = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Box width="100%">
      <Categories />
      <ContactInfo />
    </Box>
  )
}

export default ProductScreen
