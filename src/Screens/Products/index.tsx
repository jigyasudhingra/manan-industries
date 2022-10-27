import { Box } from '@mui/material'
import React from 'react'
import ContactInfo from '../../Components/ContactInfo'
import Categories from './Categories'

const ProductScreen = () => {
  return (
    <Box width="100%">
      <Categories />
      <ContactInfo />
    </Box>
  )
}

export default ProductScreen
