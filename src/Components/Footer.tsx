import { Box } from '@mui/material'
import React from 'react'
import { Icon } from '@iconify/react'
import MediaQuery from './MediaQuery'

const Footer = () => {
  const { isDeviceSm } = MediaQuery()

  return (
    <Box
      display={!isDeviceSm ? 'flex' : ''}
      p={5}
      sx={{
        backgroundColor: '#420d8c',
        borderRadius: 0,
        textAlignLast: isDeviceSm ? 'center' : '',
        color: 'white',
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
      </Box>
      <Box
        width={isDeviceSm ? '100%' : '50%'}
        p={1}
        pl={isDeviceSm ? 0 : 6}
        pt={isDeviceSm ? 2.5 : 1}
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
        <>
          <br />
          <div
            style={{
              fontSize: 12,
              display: 'flex',
              color: 'white',
              justifyContent: isDeviceSm ? 'center' : '',
            }}
          >
            <div style={{ marginRight: isDeviceSm ? 0 : 10 }}>
              <a href="https://instagram.com/rainbow_coatings/">
                <Icon
                  icon="akar-icons:instagram-fill"
                  color="white"
                  style={{
                    fontSize: isDeviceSm ? 25 : 38,
                    marginBottom: -7,
                  }}
                />
              </a>
              <span
                style={{
                  marginLeft: 5,
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                rainbow_coatings
              </span>
            </div>
          </div>
        </>
      </Box>
    </Box>
  )
}
export default Footer
