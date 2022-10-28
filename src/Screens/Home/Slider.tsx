import { Box } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React, { useState } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import slider1 from '../../Assets/slider1.jpg'
import slider2 from '../../Assets/slider2.jpg'
import slider3 from '../../Assets/slider3.jpg'
import slider4 from '../../Assets/slider4.jpg'
import slider6 from '../../Assets/slider6.jpg'
import certificate1 from '../../Assets/certificate1.jpg'
import certificate2 from '../../Assets/certificate2.jpg'
import certificate3 from '../../Assets/certificate3.jpg'

import MediaQuery from '../../Components/MediaQuery'

const ImageSlider = () => {
  const { isDeviceSm } = MediaQuery()
  const [imageIndex, setImageIndex] = useState(0)
  const images = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider6,
    certificate1,
    certificate2,
    certificate3,
  ]
  const classes = useStyles()
  return (
    <Box
      p={isDeviceSm ? 3 : 5}
      textAlign="center"
      style={{
        textAlignLast: 'center',
        backgroundColor: 'pink',
        backgroundSize: 'cover',
        position: 'relative',
      }}
      sx={{
        background: `linear-gradient(29deg, rgba(39,0,89,1) 0%, rgba(66,13,140,1) 50%, rgba(39,0,89,1) 100%)`,
        letterSpacing: 0.5,
        color: 'white',
      }}
    >
      <Box py={3}>
        <Slider
          centerPadding="0"
          arrows={false}
          slidesToShow={isDeviceSm ? 2 : 3}
          slidesToScroll={1}
          autoplaySpeed={0}
          infinite
          pauseOnHover={false}
          cssEase="linear"
          autoplay
          speed={7000}
        >
          {images.map((i, idx) => (
            <Box
              key={i}
              className={
                idx === imageIndex ? classes.activeImage : classes.image
              }
            >
              <Box p={isDeviceSm ? 1 : 3} m={isDeviceSm ? 0 : 8}>
                <img
                  src={i}
                  alt={i}
                  width={isDeviceSm ? '90%' : 260}
                  height="auto"
                  style={{ borderRadius: 10 }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}

export default ImageSlider

const useStyles = makeStyles(() =>
  createStyles({
    background: {
      backgroundColor: 'pink',
      backgroundSize: 'cover',
      position: 'relative',
    },
    nextArrow: {
      // left: 500,
    },
    root: {
      // '& .slick-next:before': {
      //   fontSize: 1,
      //   left: 500,
      // },
      // '& .slick-prev:before': {
      //   fontSize: 1,
      // },
      // '& .slick-prev': {
      //   top: 85,
      //   left: '-75px',
      // },
      // '& .slick-arrow': {
      //   top: 85,
      //   left: '-75px',
      // },
      // '& .slick-next': {
      //   top: 85,
      //   paddingLeft: '42px',
      // },
      // '& .slick-list': {
      //   width: 340,
      //   marginLeft: -20,
      // },
      // '& .slick-disabled': {
      //   opacity: 0.5,
      //   pointerEvents: 'none',
      // },
      // height: 10,
      // width: 250,
    },
    activeImage: {
      // transition: 'transform 8000ms',
      // transform: 'scale(0.7)',
      // opacity: 0.5,
    },
    image: {
      // transform: 'scale(1.1)',
      // transition: 'transform 8000ms',
      // opacity: 0.5,
    },
    innerCard: {
      backgroundColor: 'yellow',
      borderRadius: 10,
    },
  })
)
