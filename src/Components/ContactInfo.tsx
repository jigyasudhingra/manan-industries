import { Box } from '@mui/material'
import { Icon } from '@iconify/react'
import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactInfo = () => {
  return (
    <Box
      sx={{ backgroundColor: '#270059', color: 'white' }}
      id="contact-us"
      pt={5}
      pl={35}
      pr={35}
      pb={10}
    >
      <div
        style={{
          marginBottom: 50,
          fontSize: '2em',
          fontWeight: 700,
          letterSpacing: 1.1,
        }}
      >
        CONTACT US
      </div>
      <Box
        display="flex"
        p={5}
        sx={{ backgroundColor: '#420d8c', borderRadius: 6 }}
      >
        <Box width="50%" p={3} textAlign="left">
          <div style={{ fontSize: 25, fontWeight: 700, letterSpacing: 1.1 }}>
            MANAN INDUSTRIES
          </div>
          <div style={{ fontSize: 13 }}>
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
                style={{ fontSize: 28 }}
              />
              <Box ml={1}>www.mananindustries.in</Box>
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
          <div style={{ fontSize: 25, fontWeight: 700, letterSpacing: 1.1 }}>
            LALIT AHUJA
          </div>
          <div style={{ fontSize: 13 }}>Plot No. 228, MIE Industrial Area</div>
          <div
            style={{
              fontSize: 25,
              fontWeight: 700,
              letterSpacing: 1.1,
              marginTop: 8,
            }}
          >
            MANAN AHUJA
          </div>
          <div style={{ fontSize: 13 }}>Plot No. 228, MIE Industrial Area</div>
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
