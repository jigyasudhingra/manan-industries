import { AppBar, Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import MediaQuery from './MediaQuery'

const NAVIGATION_LINKS: { id: string; url: string; label: string }[] = [
  {
    id: 'about-us',
    url: 'about-us',
    label: 'About Us',
  },
  {
    id: 'products',
    url: 'products',
    label: 'Products',
  },
  {
    id: 'contact-us',
    url: 'contact-us',
    label: 'Contact', // Already exists in the previous code
  },
]

const PRODUCT_NAVIGATION = [
  {
    id: 'home',
    url: '/',
    label: 'Home',
  },
  {
    id: 'products',
    url: '/products',
    label: 'Products',
  },
  {
    id: 'contact-us',
    url: '/contact-us',
    label: 'Contact',
  },
]

interface NavigationProps {
  ProductsPage: boolean
}

const NavigationMenu: React.FC<NavigationProps> = ({ ProductsPage }) => {
  const { isDeviceSm } = MediaQuery()

  return (
    <AppBar color="transparent" elevation={0}>
      <Box
        display="flex"
        flexDirection="row"
        height={100}
        width="auto"
        alignItems="center"
        justifyContent="center"
        padding={isDeviceSm ? 1 : 2} // Adjust padding based on screen size
      >
        <Box
          alignSelf="center"
          width={isDeviceSm ? '90%' : '30%'} // Change width based on screen size
          style={{
            backgroundColor: 'rgba(86, 19, 180, 0.67)',
            borderRadius: 50,
            padding: isDeviceSm ? '10px' : '14px', // Adjust padding for smaller screens
          }}
          flexWrap="wrap"
          display="flex"
          flexDirection={isDeviceSm ? 'column' : 'row'} // Stack links on smaller screens
          justifyContent={isDeviceSm ? 'center' : 'space-around'}
          gap={isDeviceSm ? 1 : 0} // Add gap for smaller screens
        >
          {!ProductsPage
            ? NAVIGATION_LINKS.map((nl) => (
                <Link
                  key={nl.id}
                  to={nl.url}
                  smooth
                  spy
                  duration={1000}
                  style={{
                    color: 'white',
                    fontSize: isDeviceSm ? 12 : 14, // Adjust font size for smaller screens
                    letterSpacing: 0.6,
                    fontWeight: isDeviceSm ? 400 : 600,
                    cursor: 'pointer',
                    textAlign: isDeviceSm ? 'center' : 'left', // Center text on small screens
                    paddingRight: '5px',
                  }}
                >
                  {nl.label}
                </Link>
              ))
            : PRODUCT_NAVIGATION.map((i) => (
                <NavLink
                  key={i.id}
                  to={i.url}
                  style={{
                    color: 'white',
                    fontSize: isDeviceSm ? 12 : 14, // Adjust font size for smaller screens
                    letterSpacing: 0.6,
                    fontWeight: isDeviceSm ? 400 : 600,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    textAlign: isDeviceSm ? 'center' : 'left', // Center text on small screens
                  }}
                >
                  {i.label}
                </NavLink>
              ))}
        </Box>
      </Box>
    </AppBar>
  )
}

export default NavigationMenu
