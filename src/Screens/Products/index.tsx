import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ContactInfo from '../../Components/ContactInfo'
import MetaTag from '../../Components/MetaTag'
import Categories from './Categories'

const ProductScreen = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Box width="100%">
      <MetaTag
        title="Product Categories | Rainbow Powder Coatings"
        ogDescription="Rainbow Powder Coatings has 3 types of coating: Pure polyester powder, Pure epoxy powder, Hybrid coating powder"
      />
      <Categories />
      <ContactInfo />
    </Box>
  )
}

export default ProductScreen
