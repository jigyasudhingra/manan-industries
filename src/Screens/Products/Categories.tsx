import React from 'react'
import { Box, Grid, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { Link } from 'react-scroll'
import MediaQuery from '../../Components/MediaQuery'
import Typo from '../../Components/Typo'

const details = [
  'Music',
  'Drama',
  'Art & Craft',
  'Dance',
  'Fashion',
  'Literary',
  'Photography',
  'Gaming',
  'Quiz',
]

const Categories = () => {
  const classes = useStyles()
  const { isDeviceSm } = MediaQuery()
  return (
    <>
      <Box>Hello</Box>
      <p>Hello</p>
      <Box
        p={10}
        className={classes.background}
        textAlign="center"
        style={{ textAlignLast: '-webkit-center' as any }}
      >
        <Box />
        <Box>
          <Grid
            container
            item
            spacing={isDeviceSm ? 2 : 3}
            justifyContent="center"
          >
            {Array.from(details).map((i) => (
              <Grid item lg={4} sm={6} xs={6} key={`${i}`}>
                <Link to={i} smooth spy duration={1000}>
                  <Box className={classes.card}>
                    <Typo variant="body2">{i}</Typo>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      backgroundColor: 'blue',
      color: 'white',
    },
    card: {
      borderRadius: 10,
      padding: 11,
      backgroundColor: 'white',
      cursor: 'pointer',
    },
  })
)

export default Categories
