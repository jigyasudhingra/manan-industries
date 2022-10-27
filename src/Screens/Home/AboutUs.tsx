import { Box } from '@mui/material'
import React from 'react'
import sectionImage from '../../Assets/section2.png'
import sectionTwo from '../../Assets/sectionTwo.jpg'

const AboutUs = () => {
  return (
    <Box
      width="100%"
      style={{
        backgroundImage: `url(${sectionTwo})`,
        backgroundSize: 'cover',
        color: 'white',
      }}
    >
      <Box display="flex">
        <Box
          width="100%"
          style={{ textAlignLast: 'left' }}
          textAlign="left"
          p={10}
          pl="10%"
        >
          <h1
            style={{
              fontWeight: 700,
              letterSpacing: 1.1,
              paddingBottom: 8,
            }}
          >
            ABOUT US
          </h1>
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
