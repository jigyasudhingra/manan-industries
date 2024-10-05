import React from 'react'
import { Box, Button } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'
import Footer from './Footer'
import MediaQuery from './MediaQuery'
import NavigationMenu from './NavigationMenu'

const LandingPage: React.FC = () => {
  const { isDeviceSm } = MediaQuery()

  return (
    <Box
      sx={{
        backgroundColor: '#712ad5', // Hex code with transparency
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {/* Header Component */}
      <Box>
        <NavigationMenu ProductsPage={false} />
      </Box>
      {/* Main content */}
      <Box
        width="100vw"
        p={1}
        pl={isDeviceSm ? 0 : 6}
        textAlign="left"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            margin: '10px',
            backgroundColor: '#6341d8',
            fontWeight: 'bold',
          }}
          startIcon={<LanguageIcon />}
          href="/brochure.pdf"
          download
        >
          Download Brochure
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{
            margin: '10px',
            backgroundColor: '#6341d8',
            fontWeight: 'bold',
          }}
          startIcon={<InstagramIcon />}
          href="https://www.instagram.com/rainbow_coatings/"
          target="_blank"
        >
          Instagram
        </Button>
      </Box>
      {/* Footer */}
      <Footer />
    </Box>
  )
}

export default LandingPage
