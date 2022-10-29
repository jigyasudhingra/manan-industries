import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ContactInfo from '../../Components/ContactInfo'
import MetaTag from '../../Components/MetaTag'
import NavigationMenu from '../../Components/NavigationMenu'
import AboutUs from './AboutUs'
import Rainbow from './Rainbow'
import ImageSlider from './Slider'
import Welcome from './Welcome'

const Home = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Box width="100%">
      <MetaTag
        title="Rainbow Powder Coatings | MananIndustries.in"
        ogDescription="Rainbow Powder Coating, specialist in RAL and PENTONE Series. Our range
        is highly demanded for its optimum quality from last 20 years"
      />
      <NavigationMenu ProductsPage={false} />
      <Welcome />
      <AboutUs />
      <Rainbow />
      <ImageSlider />
      <ContactInfo />
    </Box>
  )
}

export default Home
