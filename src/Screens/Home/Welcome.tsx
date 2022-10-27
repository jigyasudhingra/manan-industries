import { Box, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
import homepagePic from '../../Assets/homepage2.jpg'
import logoPic from '../../Assets/logoo.jpg'
import MediaQuery from '../../Components/MediaQuery'

const Welcome = () => {
  const classes = useStyles()
  const { isDeviceSm } = MediaQuery()
  return (
    <Box pt={15} className={classes.background} pb={20}>
      <img src={logoPic} alt="f" width="5%" className={classes.logo} />
      <div className={classes.welcomeText}>
        WELCOME TO <br /> MANAN INDUSTRIES
      </div>
      <Box>
        <div className={classes.sloganText}>Believe in Quality</div>
        {/* <div>
          <img src={strike} alt="strike" width="10%" />
        </div> */}
      </Box>
      {/* <Box
        display="flex"
        width="100%"
        pt={6}
        pb={6}
        className="animate__animated animate__bounce animate__infinite animate__slower "
      >
        <Box width="100%" />
        <Box width="100%">
          <Box className={classes.verticalLine} />
        </Box>
      </Box> */}
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
