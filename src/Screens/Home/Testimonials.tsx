import { Box } from '@mui/material'
import React from 'react'
import ImageSlider from './Slider'

const Details = [
  {
    name: 'Mini Metro',
    company: '',
    review: '',
  },
  {
    name: ' Micron Coating Pvt Ltd.',
    company: '',
    review: '',
  },
  {
    name: 'Shyam Powder Coatings',
    company: '',
    review: '',
  },
  {
    name: 'RSS Steel Company',
    company: '',
    review: '',
  },
  {
    name: 'Shyam Powder Coatings',
    company: '',
    review: '',
  },
]

const Testimonials = () => {
  return (
    <Box
      p={7}
      sx={{
        background: `linear-gradient(29deg, rgba(39,0,89,1) 0%, rgba(66,13,140,1) 50%, rgba(39,0,89,1) 100%)`,
        letterSpacing: 0.5,
        color: 'white',
      }}
      pl={22}
      pr={22}
      id="testimonials"
    >
      <ImageSlider />
      <div
        style={{
          fontSize: 40,
          fontWeight: 700,
          letterSpacing: 1.5,
        }}
      >
        TESTIMONIALS
      </div>
      <div
        style={{
          marginBottom: 36,
          fontSize: 12,
          letterSpacing: 1.1,
          color: 'pink',
          textTransform: 'uppercase',
        }}
      >
        What Our Clients Have To Say
      </div>
      <Box display="flex" width="100%" justifyContent="space-between">
        {Details.map((i, ind) => (
          <Box
            id={i.name}
            borderRadius={7}
            mr={ind === Details.length - 1 ? 0 : 10}
            p={4}
            style={{
              backgroundColor: '#270059',
            }}
          >
            <Box textAlign="left" fontSize={13} mb={2}>
              {i.review}
            </Box>
            <Box textAlign="left" fontSize={13} letterSpacing={0.6}>
              <b>{i.name}</b>
              <br />
              {i.company}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Testimonials
