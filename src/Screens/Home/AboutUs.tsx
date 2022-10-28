import { Box } from '@mui/material'
import React from 'react'
import sectionImage from '../../Assets/section2.png'
import MediaQuery from '../../Components/MediaQuery'

const AboutUs = () => {
  const { isDeviceSm } = MediaQuery()
  return (
    <Box
      id="about-us"
      width="100%"
      style={{
        background: `linear-gradient(29deg, rgba(39,0,89,1) 0%, rgba(66,13,140,1) 50%, rgba(39,0,89,1) 100%)`,
        letterSpacing: 0.5,
        color: 'white',
      }}
    >
      <Box display={isDeviceSm ? '' : 'flex'}>
        <Box
          width={!isDeviceSm ? '100%' : '80%'}
          style={{
            // textAlignLast: isDeviceSm ? 'center' : 'left',
            fontSize: 14,
          }}
          textAlign={isDeviceSm ? 'center' : 'left'}
          p={isDeviceSm ? 2 : 10}
          pt={isDeviceSm ? 5 : 15}
          pl="10%"
          pr={isDeviceSm ? '10%' : 2}
        >
          <div
            style={{
              fontWeight: 700,
              letterSpacing: 1.5,
              paddingBottom: 8,
              fontSize: 36,
            }}
          >
            ABOUT US
          </div>
          <div
            style={{
              marginTop: 10,
              marginBottom: 10,
              textAlign: 'justify',
              textJustify: 'inter-word',
            }}
          >
            Established in the year 2003, Manan Industries is engaged as
            Manufacturer and Wholesaler of Polyester Powder Coating, Structure
            Powder Coating, Metallic Powder Coating, Hybrid Powder Coating, etc.
            <br />
            <br />
            Further, our range is highly demanded in for its optimum quality.
            All the efforts of the company to ensure excellent quality products
            for their customers has enabled them to build long lasting business
            relationships with their clients.
          </div>
        </Box>
        <Box
          width="100%"
          style={{ textAlignLast: isDeviceSm ? 'center' : 'left' }}
          textAlign={isDeviceSm ? 'center' : 'left'}
          alignSelf="center"
          p={isDeviceSm ? 0 : 10}
          pb={isDeviceSm ? 4 : 10}
        >
          <img
            src={sectionImage}
            alt="painting"
            width={isDeviceSm ? 250 : 420}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default AboutUs
