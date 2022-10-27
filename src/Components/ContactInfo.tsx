import { Box } from '@mui/material'
import { Icon } from '@iconify/react'
import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactInfo = () => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(29deg, rgba(72,2,131,1) 0%, rgba(34,1,77,1) 59%, rgba(72,2,131,1) 100%)',
        color: 'white',
      }}
      id="contact-us"
      pt={5}
      pl={35}
      pr={35}
      pb={10}
    >
      <div
        style={{
          fontSize: '2em',
          fontWeight: 700,
          letterSpacing: 1.1,
        }}
      >
        CONTACT US
      </div>
      <div
        style={{
          fontSize: 13,
          letterSpacing: 1.1,
          marginBottom: 40,
          color: 'pink',
        }}
      >
        Feel free to reach out
      </div>
      <Box
        display="flex"
        p={5}
        sx={{ backgroundColor: '#420d8c', borderRadius: 6 }}
      >
        <Box width="50%" p={3} textAlign="left">
          <div style={{ fontSize: 23, fontWeight: 700, letterSpacing: 1.1 }}>
            MANAN INDUSTRIES
          </div>
          <div style={{ fontSize: 12 }}>
            Plot No. 228, MIE Industrial Area
            <br />
            Part - A, Bahadurgarh - 124507
            <br />
            Haryana, India
          </div>
          <br />
          <Box
            width="fit-content"
            sx={{
              backgroundColor: '#5f19eb',
              color: 'white',
              borderRadius: 5,
              marginTop: 4,
              padding: 1,
              fontSize: 14,
              pl: 2,
              pr: 3,
            }}
          >
            <Box display="flex" alignItems="center">
              <Icon
                icon="icomoon-free:mail4"
                color="white"
                style={{ fontSize: 25, marginBottom: 2 }}
              />
              <Box ml={1}>rainbow_coat@yahoo.com</Box>
            </Box>
          </Box>
        </Box>
        <Box
          width="50%"
          p={3}
          pl={6}
          borderLeft="1px solid white"
          textAlign="left"
        >
          <div style={{ fontSize: 23, fontWeight: 700, letterSpacing: 1.1 }}>
            LALIT AHUJA
          </div>
          <div style={{ fontSize: 12 }}>Plot No. 228, MIE Industrial Area</div>
          <div
            style={{
              fontSize: 23,
              fontWeight: 700,
              letterSpacing: 1.1,
              marginTop: 8,
            }}
          >
            MANAN AHUJA
          </div>
          <div style={{ fontSize: 12 }}>Plot No. 228, MIE Industrial Area</div>
          <Box
            width="fit-content"
            sx={{
              backgroundColor: '#5f19eb',
              color: 'white',
              borderRadius: 5,
              marginTop: 4,
              padding: 1,
              fontSize: 14,
              pl: 2,
              pr: 3,
            }}
          >
            <Box display="flex" alignItems="center">
              <Icon icon="mdi:web" color="white" style={{ fontSize: 28 }} />
              <Box ml={1}>www.mananindustries.in</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactInfo
