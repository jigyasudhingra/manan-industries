// import React from 'react'
// import { Box, Button } from '@mui/material'
// import InstagramIcon from '@mui/icons-material/Instagram'
// import LanguageIcon from '@mui/icons-material/Language'
// import Footer from './Footer'
// import MediaQuery from './MediaQuery'
// import NavigationMenu from './NavigationMenu'

// const LandingPage: React.FC = () => {
//   const { isDeviceSm } = MediaQuery()

//   return (
//     <Box
//       sx={{
//         backgroundColor: '#712ad5', // Hex code with transparency
//         minHeight: '100vh',
//         minWidth: '100vw',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         flexWrap: 'wrap',
//       }}
//     >
//       {/* Header Component */}
//       <Box>
//         <NavigationMenu ProductsPage={false} />
//       </Box>
//       {/* Main content */}
//       <Box
//         width="100vw"
//         p={1}
//         pl={isDeviceSm ? 0 : 6}
//         textAlign="left"
//         sx={{ display: 'flex', justifyContent: 'center' }}
//       >
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{
//             margin: '10px',
//             backgroundColor: '#6341d8',
//             fontWeight: 'bold',
//           }}
//           startIcon={<LanguageIcon />}
//           href="/brochure.pdf"
//           download
//         >
//           Download Brochure
//         </Button>

//         <Button
//           variant="contained"
//           color="primary"
//           sx={{
//             margin: '10px',
//             backgroundColor: '#6341d8',
//             fontWeight: 'bold',
//           }}
//           startIcon={<InstagramIcon />}
//           href="https://www.instagram.com/rainbow_coatings/"
//           target="_blank"
//         >
//           Instagram
//         </Button>
//       </Box>
//       <Footer />
//     </Box>
//   )
// }

// export default LandingPage
import React from 'react'
import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'
import NavigationMenu from './NavigationMenu'
import Footer from './Footer'

const LandingPage: React.FC = () => {
  const theme = useTheme()
  const isDeviceSm = useMediaQuery(theme.breakpoints.down('sm')) // For small devices
  const isDeviceMd = useMediaQuery(theme.breakpoints.between('sm', 'md')) // For medium devices

  return (
    <Box
      sx={{
        backgroundColor: '#5f19eb',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: isDeviceSm ? '10px' : '20px',
      }}
    >
      {/* Header */}
      <Box>
        <NavigationMenu ProductsPage />
      </Box>

      {/* Main content */}
      <Box
        width="96.3vw"
        p={1}
        textAlign={isDeviceSm ? 'center' : 'left'}
        sx={{
          display: 'flex',
          flexDirection: isDeviceSm ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {/* Brochure Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            margin: isDeviceSm ? '5px' : '10px',
            backgroundColor: '#6341d8',
            fontWeight: 'bold',
            fontSize: isDeviceSm ? '12px' : '16px',
            width: isDeviceSm ? '80%' : 'auto',
          }}
          startIcon={<LanguageIcon />}
          href="/brochure.pdf"
          download
        >
          Download Brochure
        </Button>

        {/* Instagram Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            margin: isDeviceSm ? '5px' : '10px',
            backgroundColor: '#6341d8',
            fontWeight: 'bold',
            fontSize: isDeviceSm ? '12px' : '16px',
            width: isDeviceSm ? '80%' : 'auto',
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
