import { Icon } from '@iconify/react'
import { Box } from '@mui/material'
import React from 'react'
import MediaQuery from './MediaQuery'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactInfo = () => {
  const { isDeviceSm } = MediaQuery()
  return (
    <Box
      sx={{
        background:
          'linear-gradient(29deg, rgba(72,2,131,1) 0%, rgba(34,1,77,1) 59%, rgba(72,2,131,1) 100%)',
        color: 'white',
      }}
      pt={isDeviceSm ? 5 : 7}
      pl={isDeviceSm ? 5 : 35}
      pr={isDeviceSm ? 5 : 35}
      pb={isDeviceSm ? 5 : 7}
    >
      <Box
        display={!isDeviceSm ? 'flex' : ''}
        p={5}
        sx={{ backgroundColor: '#420d8c', borderRadius: 6 }}
      >
        <Box
          width={isDeviceSm ? '100%' : '50%'}
          p={1}
          pl={isDeviceSm ? 0 : 6}
          textAlign="left"
        >
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
          {!isDeviceSm && <br />}
          <Box
            width="fit-content"
            sx={{
              backgroundColor: '#5f19eb',
              color: 'white',
              borderRadius: 5,
              marginTop: 4,
              padding: 1,
              fontSize: 14,
              pl: isDeviceSm ? 2 : 3,
              pr: isDeviceSm ? 2 : 3,
            }}
          >
            <Box display="flex" alignItems="center">
              {!isDeviceSm && (
                <Icon
                  icon="icomoon-free:mail4"
                  color="white"
                  style={{ fontSize: 25, marginBottom: 2 }}
                />
              )}
              <Box ml={1}>rainbow_coat@yahoo.com</Box>
            </Box>
          </Box>
        </Box>
        <Box
          width={isDeviceSm ? '100%' : '50%'}
          p={1}
          pl={isDeviceSm ? 0 : 6}
          borderLeft={!isDeviceSm ? '1px solid white' : ''}
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
              pl: isDeviceSm ? 2 : 3,
              pr: isDeviceSm ? 2 : 3,
            }}
          >
            <Box display="flex" alignItems="center">
              {!isDeviceSm && (
                <Icon icon="mdi:web" color="white" style={{ fontSize: 28 }} />
              )}
              <Box ml={1}>www.mananindustries.in</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactInfo
