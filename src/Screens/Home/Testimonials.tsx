import { Box } from '@mui/material'
import React from 'react'

const Details = [
  {
    name: 'Kiara Austen',
    company: 'Brooknew Ltd.',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse blanditiis quos tempore quasi enim!',
  },
  {
    name: 'abc',
    company: 'xyz',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse blanditiis quos tempore quasi enim!',
  },
  {
    name: 'abc',
    company: 'xyz',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse blanditiis quos tempore quasi enim!',
  },
]

const Testimonials = () => {
  return (
    <Box
      p={10}
      sx={{ backgroundColor: '#270059' }}
      pl={22}
      pr={22}
      id="testimonials"
    >
      <Box display="flex" width="100%" justifyContent="space-between">
        {Details.map((i, ind) => (
          <Box
            borderRadius={7}
            mr={ind === Details.length - 1 ? 0 : 10}
            p={4}
            style={{
              backgroundColor: 'rgba(230, 209, 255, 0.3)',
              color: 'white',
            }}
          >
            <Box textAlign="left" fontSize={16}>
              <p>{i.review}</p>
            </Box>
            <Box textAlign="left" fontSize={14} letterSpacing={1.1}>
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
