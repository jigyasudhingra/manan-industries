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
    name: 'Kiara Austen',
    company: 'Brooknew Ltd.',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse blanditiis quos tempore quasi enim!',
  },
  {
    name: 'Kiara Austen',
    company: 'Brooknew Ltd.',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse blanditiis quos tempore quasi enim!',
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
      <div
        style={{
          marginBottom: 50,
          fontSize: '2em',
          fontWeight: 700,
          letterSpacing: 1.1,
        }}
      >
        TESTIMONIALS
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
            <Box textAlign="left" fontSize={14}>
              <p>{i.review}</p>
            </Box>
            <Box textAlign="left" fontSize={16} letterSpacing={1.1}>
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
