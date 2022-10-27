import React from 'react'
import { Box, Grid, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { Link } from 'react-scroll'
import MediaQuery from '../../Components/MediaQuery'

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

const testimonials = [
  {
    name: 'abc',
    company: 'xyz',
    review: 'ers',
  },
  {
    name: 'abc',
    company: 'xyz',
    review: 'ers',
  },
  {
    name: 'abc',
    company: 'xyz',
    review: 'ers',
  },
]

const Categories = () => {
  const classes = useStyles()
  const { isDeviceSm } = MediaQuery()

  return (
    <Box
      p={10}
      pt={15}
      sx={{
        background: `linear-gradient(29deg, rgba(72,2,131,1) 0%, rgba(34,1,77,1) 59%, rgba(72,2,131,1) 100%)`,
        letterSpacing: 0.5,
        color: 'white',
      }}
      className={classes.background}
      textAlign="center"
      style={{ textAlignLast: '-webkit-center' as any }}
    >
      <Box />
      <Box>
        <Grid
          container
          item
          spacing={isDeviceSm ? 1 : 3}
          justifyContent="center"
        >
          {Array.from(details).map((i) => (
            <Grid item lg={4} sm={6} xs={12} key={`${i}`}>
              <Link to={i} smooth duration={1000}>
                <Box className={classes.card}>
                  <Box fontSize={12}>{i}</Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
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
      cursor: 'pointer',
      backgroundColor: '#420d8c',
    },
  })
)

export default Categories
