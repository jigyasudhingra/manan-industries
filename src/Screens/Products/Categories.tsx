import React from 'react'
import { Box, Grid, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
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
            {/* {Array.from(details).map((i) => (
              <Grid item lg={4} sm={6} xs={6} key={`${i}`}>
                <Link to={i} smooth spy duration={1000}>
                  <Box className={classes.card}>
                    <Typo variant="body2">{i}</Typo>
                  </Box>
                </Link>
              </Grid>
            ))} */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}
            >
              {testimonials.map((i) => (
                <div>
                  <div>{i.company}</div>
                  <div>{i.name}</div>
                  <div>{i.review}</div>
                </div>
              ))}
            </div>
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
