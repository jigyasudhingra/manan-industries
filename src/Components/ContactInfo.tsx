import { Box } from '@mui/material'
import React from 'react'
import ContactForm from './ContactForm'
import MediaQuery from './MediaQuery'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactInfo = () => {
  const { isDeviceSm } = MediaQuery()
  return (
    <Box
      sx={{
        background: 'rgba(34,1,77,1)',
        color: 'white',
      }}
      // pt={isDeviceSm ? 5 : 7}
      // pl={isDeviceSm ? 5 : 35}
      // pr={isDeviceSm ? 5 : 35}
      // pb={isDeviceSm ? 5 : 7}
    >
      <ContactForm />
      <Box
        display={!isDeviceSm ? 'flex' : ''}
        p={5}
        sx={{
          backgroundColor: '#420d8c',
          borderRadius: 0,
          textAlignLast: isDeviceSm ? 'center' : '',
        }}
        pl={!isDeviceSm ? '17%' : 5}
        pr={!isDeviceSm ? '17%' : 5}
      >
        <Box
          width={isDeviceSm ? '100%' : '50%'}
          p={1}
          pl={isDeviceSm ? 0 : 6}
          textAlign="left"
        >
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: 1.1 }}>
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
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: 1.1 }}>
            EMAIL
          </div>
          <div style={{ fontSize: 12 }}>
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href="mailto:rainbow_coat@yahoo.com"
            >
              rainbow_coat@yahoo.com
            </a>
            <br />
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href="mailto:mananahuja77@gmail.com"
            >
              mananahuja77@gmail.com
            </a>
          </div>
          {/* <Box
            width="fit-content"
            ml={isDeviceSm ? -1 : 0}
            sx={{
              backgroundColor: '#5f19eb',
              color: 'white',
              borderRadius: 5,
              padding: 1,
              marginTop: isDeviceSm ? 1 : 4,
              fontSize: isDeviceSm ? 12 : 14,
              pl: isDeviceSm ? 1 : 3,
              pr: isDeviceSm ? 2 : 3,
            }}
          >
            <Box display="flex" alignItems="center">
              <Icon
                icon="icomoon-free:mail4"
                color="white"
                style={{
                  fontSize: isDeviceSm ? 20 : 28,
                }}
              />
              <Box ml={1}>rainbow_coat@yahoo.com</Box>
            </Box>
          </Box> */}
        </Box>
        <Box
          width={isDeviceSm ? '100%' : '50%'}
          p={1}
          pl={isDeviceSm ? 0 : 6}
          pt={isDeviceSm ? 2.5 : 1}
          // borderLeft={!isDeviceSm ? '1px solid white' : ''}
          textAlign="left"
        >
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: 1.1 }}>
            LALIT AHUJA
          </div>
          <div style={{ fontSize: 12 }}>+91-9312891429 , +91-9215891429</div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 1.1,
              marginTop: 8,
            }}
          >
            MANAN AHUJA
          </div>
          <div style={{ fontSize: 12 }}>+91-9599666058</div>
          {/* <Box
            width="fit-content"
            ml={isDeviceSm ? -1 : 0}
            sx={{
              backgroundColor: '#5f19eb',
              color: 'white',
              borderRadius: 5,
              padding: 1,
              marginTop: isDeviceSm ? 1 : 4,
              fontSize: isDeviceSm ? 12 : 14,
              pl: isDeviceSm ? 1 : 3,
              pr: isDeviceSm ? 2 : 3,
            }}
          >
            <Box display="flex" alignItems="center">
              <Icon
                icon="mdi:web"
                color="white"
                style={{ fontSize: isDeviceSm ? 20 : 28 }}
              />
              <Box ml={1}>www.mananindustries.in</Box>
            </Box>
          </Box> */}
          {!isDeviceSm && (
            <>
              <br />
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: 1.1,
                  justifyContent: 'center',
                }}
              >
                HELPFUL LINK
              </div>
              <div style={{ fontSize: 12, display: 'flex', color: 'white' }}>
                <div>
                  <a style={{ color: 'white' }} href="/products">
                    Products
                  </a>
                </div>
                <div style={{ marginLeft: 10 }}>
                  <a style={{ color: 'white' }} href="/contact-us">
                    Contact Us
                  </a>
                </div>
              </div>
            </>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default ContactInfo
