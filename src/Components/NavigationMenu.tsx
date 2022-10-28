import { AppBar, Box, Slide, useScrollTrigger } from '@mui/material'
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
  // {
  //   id: 'testimonials',
  //   url: 'testimonials',
  //   label: 'Testimonials',
  // },
  {
    id: 'contact-us',
    url: 'contact-us',
    label: 'Contact Us',
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
    label: 'Contact Us',
  },
]

interface Props {
  // eslint-disable-next-line react/require-default-props
  window?: () => Window
  children: React.ReactElement
}

export const HideOnScroll = (props: Props) => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

interface NavigationProps {
  ProductsPage: boolean
}

const NavigationMenu = (props: NavigationProps) => {
  const classes = styles as any
  const { isDeviceSm } = MediaQuery()
  const { ProductsPage } = props

  return (
    // <HideOnScroll>
    <AppBar color="transparent" className={classes.header} elevation={0}>
      <Box
        display="flex"
        flexDirection="row"
        height={100}
        width="auto"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          alignSelf="center"
          width={isDeviceSm ? '70%' : '30%'}
          style={{
            backgroundColor: 'rgba(86, 19, 180, 0.67)',
            borderRadius: 50,
            padding: 14,
          }}
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
        >
          {!ProductsPage
            ? NAVIGATION_LINKS.map((nl) => (
                <Link
                  to={nl.url}
                  smooth
                  spy
                  duration={1000}
                  style={{
                    color: 'white',
                    fontSize: isDeviceSm ? 11 : 13,
                    letterSpacing: 0.6,
                    fontWeight: isDeviceSm ? 400 : 600,
                  }}
                >
                  {nl.label}
                </Link>
              ))
            : PRODUCT_NAVIGATION.map((i) => (
                <NavLink
                  to={i.url}
                  style={{
                    color: 'white',
                    fontSize: 13,
                    letterSpacing: 0.6,
                    fontWeight: isDeviceSm ? 400 : 600,
                    textDecoration: 'none',
                  }}
                >
                  {i.label}
                </NavLink>
              ))}
        </Box>
      </Box>
    </AppBar>
    // </HideOnScroll>
  )
}

export default NavigationMenu

const styles = {
  navMenu: {
    textDecoration: 'none ! important ',
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  },
  mobileMenu: {
    textDecoration: 'none ! important ',
    color: 'white',
    fontSize: 14,
    '&:hover': {
      color: 'white',
    },
  },
  activeMenu: {
    color: 'white',
  },
  header: {
    '-webkit-backdrop-filter': `blur(3px)`, // For Safari
    backdropFilter: `blur(3px)`,
  },
}
