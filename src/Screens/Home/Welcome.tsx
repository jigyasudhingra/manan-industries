import { Box, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
import homepagePic from '../../Assets/homepage2.jpg'
import logoPic from '../../Assets/logoo.jpg'
import strike from '../../Assets/strike.png'
import MediaQuery from '../../Components/MediaQuery'

const Welcome = () => {
  const classes = useStyles()
  const { isDeviceSm } = MediaQuery()
  return (
    <Box pt={15} className={classes.background} pb={20}>
      <img
        src={logoPic}
        alt="f"
        width={isDeviceSm ? '15%' : '5%'}
        className={classes.logo}
      />
      <div
        style={{
          display: 'relative',
          color: 'white',
          fontSize: isDeviceSm ? 30 : 72,
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        WELCOME TO <br /> MANAN INDUSTRIES
      </div>
      <Box>
        <div
          style={{
            fontWeight: 600,
            fontSize: isDeviceSm ? 20 : 40,
            color: 'white',
            fontFamily: `'Pinyon Script', cursive`,
            letterSpacing: 2,
          }}
        >
          Believe in Quality
        </div>
        <div
          style={{
            marginTop: isDeviceSm ? '-4%' : '-0.8%',
            marginLeft: isDeviceSm ? '-20%' : '-7.8%',
          }}
        >
          <img src={strike} alt="strike" width={isDeviceSm ? '15%' : '10%'} />
        </div>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      color: 'white',
      width: '100%',
      backgroundImage: `url(${homepagePic}) `,
      backgroundSize: 'cover',
    },
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: '#22014D',
    },
    verticalLine: {
      borderLeft: '1px solid #ffffff47',
      height: 75,
    },
    logo: {
      paddingTop: 30,
      paddingBottom: 30,
    },
    welcomeText: {
      display: 'relative',
      color: 'white',
      fontSize: 72,
      fontWeight: 700,
      letterSpacing: 2,
    },
    sloganText: {
      // height: 100,
      // width: 300,
      fontWeight: 600,
      fontSize: 40,
      color: 'white',
      // display: 'inline-block',
      // alignItems: 'center',
      // justifyContent: 'center',
      fontFamily: `'Pinyon Script', cursive`,
      letterSpacing: 2,
    },
  })
)
export default Welcome
