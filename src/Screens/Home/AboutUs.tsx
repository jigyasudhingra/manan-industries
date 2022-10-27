import { Box } from '@mui/material'
import React from 'react'
import sectionImage from '../../Assets/section2.png'

const AboutUs = () => {
  return (
    <Box
      id="about-us"
      width="100%"
      style={{
        // backgroundImage: `url(${sectionTwo})`,
        background: `linear-gradient(29deg, rgba(39,0,89,1) 0%, rgba(66,13,140,1) 50%, rgba(39,0,89,1) 100%)`,
        letterSpacing: 0.5,
        // backgroundSize: 'cover',
        color: 'white',
      }}
    >
      <Box display="flex">
        <Box
          width="100%"
          style={{ textAlignLast: 'left', fontSize: 14 }}
          textAlign="left"
          p={10}
          pt={15}
          pl="10%"
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
          <p>
            Established in the year 2003, Manan Industries is engaged as
            Manufacturer and Wholesaler of Polyester Powder Coating, Structure
            Powder Coating, Metallic Powder Coating, Hybrid Powder Coating, etc.
          </p>
          <p>
            Further, our range is highly demanded in for its optimum quality.
            All the efforts of the company to ensure excellent quality products
            for their customers has enabled them to build long lasting business
            relationships with their clients.
          </p>
        </Box>
        <Box
          width="100%"
          style={{ textAlignLast: 'left' }}
          textAlign="left"
          alignSelf="center"
          p={10}
        >
          <img src={sectionImage} alt="painting" width={420} />
        </Box>
      </Box>
    </Box>
  )
}

export default AboutUs
