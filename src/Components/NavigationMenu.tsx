import React, { useState } from 'react'
import { AppBar, Box, IconButton, Drawer, List, ListItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu' // Hamburger icon
import CloseIcon from '@mui/icons-material/Close' // Close icon for drawer
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
    label: 'Contact',
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false) // State for mobile menu

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open)
  }

  return (
    <AppBar color="transparent" elevation={0}>
      <Box
        display="flex"
        flexDirection="row"
        height={100}
        width="auto"
        alignItems="center"
        justifyContent="center"
        padding={isDeviceSm ? 1 : 2}
      >
        {/* Desktop and Tablet View */}
        {!isDeviceSm ? (
          <Box
            alignSelf="center"
            width="30%"
            style={{
              backgroundColor: 'rgba(86, 19, 180, 0.67)',
              borderRadius: 50,
              padding: '14px',
            }}
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
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
                      fontSize: 14,
                      letterSpacing: 0.6,
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
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
                      fontSize: 14,
                      letterSpacing: 0.6,
                      fontWeight: 600,
                      textDecoration: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    {i.label}
                  </NavLink>
                ))}
          </Box>
        ) : (
          // Mobile View (Hamburger Icon)
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            style={{ position: 'absolute', left: 20, color: '#fff' }} // Custom orange color
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Drawer for Mobile Navigation */}
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <Box
            role="presentation"
            width={250}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
            padding="20px"
            style={{
              backgroundColor: 'rgba(86, 19, 180, 0.9)',
              height: '100%',
            }}
          >
            {/* Close Button */}
            <IconButton
              style={{ alignSelf: 'flex-end', color: 'white' }}
              onClick={() => toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>

            {/* Links */}
            <List>
              {!ProductsPage
                ? NAVIGATION_LINKS.map((nl) => (
                    <ListItem
                      button
                      key={nl.id}
                      onClick={() => toggleDrawer(false)}
                    >
                      <Link
                        to={nl.url}
                        smooth
                        spy
                        duration={1000}
                        style={{
                          color: 'white',
                          fontSize: 14,
                          letterSpacing: 0.6,
                          fontWeight: 600,
                          cursor: 'pointer',
                          textDecoration: 'none',
                        }}
                      >
                        {nl.label}
                      </Link>
                    </ListItem>
                  ))
                : PRODUCT_NAVIGATION.map((i) => (
                    <ListItem
                      button
                      key={i.id}
                      onClick={() => toggleDrawer(false)}
                    >
                      <NavLink
                        to={i.url}
                        style={{
                          color: 'white',
                          fontSize: 14,
                          letterSpacing: 0.6,
                          fontWeight: 600,
                          textDecoration: 'none',
                        }}
                      >
                        {i.label}
                      </NavLink>
                    </ListItem>
                  ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </AppBar>
  )
}

export default NavigationMenu
