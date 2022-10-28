import { Box } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import Slider from 'react-slick'
import rainbowPic from '../../Assets/hybrid.jpeg'
import rainbow from '../../Assets/rainbow.png'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import MediaQuery from '../../Components/MediaQuery'

const ImageSlider = () => {
  const { isDeviceSm } = MediaQuery()
  const [imageIndex, setImageIndex] = useState(0)
  const images = [rainbowPic, rainbow, rainbowPic, rainbow, rainbowPic]
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
      <Box py={isDeviceSm ? 8 : 3}>
        <Slider
          centerPadding="0"
          arrows={false}
          slidesToShow={3}
          slidesToScroll={1}
          dots
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
