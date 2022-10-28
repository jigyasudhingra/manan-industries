import React from 'react'
import { Box, Button, Grid, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import MediaQuery from '../../Components/MediaQuery'
import HYBRID_IMG from '../../Assets/hybrid.jpeg'
import NavigationMenu from '../../Components/NavigationMenu'

const CategoryDetails = [
  {
    name: 'Hybrid Power',
    products: 6,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur inventore quibusdam reiciendis. Consequatur, vitae',
    imgURL: HYBRID_IMG,
    url: 'hybrid-powder',
  },
  {
    name: 'Hybrid Power',
    products: 6,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur inventore quibusdam reiciendis. Consequatur, vitae',
    imgURL: 'https://media-public.canva.com/4P4Ec/MADx0r4P4Ec/1/tl.jpg',
    url: 'powder',
  },
  {
    name: 'Hybrid Power',
    products: 6,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur inventore quibusdam reiciendis. Consequatur, vitae',
    imgURL: 'https://media-public.canva.com/4P4Ec/MADx0r4P4Ec/1/tl.jpg',
    url: 'hybrid-powder',
  },
  {
    name: 'Hybrid Power',
    products: 6,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur inventore quibusdam reiciendis. Consequatur, vitae',
    imgURL: HYBRID_IMG,
    url: 'hybrid-powder',
  },
  {
    name: 'Hybrid Power',
    products: 6,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur inventore quibusdam reiciendis. Consequatur, vitae',
    imgURL: HYBRID_IMG,
    url: 'hybrid-powder',
  },
  {
    name: 'Hybrid Power',
    products: 6,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur inventore quibusdam reiciendis. Consequatur, vitae',
    imgURL: HYBRID_IMG,
    url: 'hybrid-powder',
  },
  {
    name: 'Hybrid Power',
    products: 6,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur inventore quibusdam reiciendis. Consequatur, vitae',
    imgURL: HYBRID_IMG,
    url: 'hybrid-powder',
  },
  {
    name: 'Hybrid Power',
    products: 6,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur inventore quibusdam reiciendis. Consequatur, vitae',
    imgURL: HYBRID_IMG,
    url: 'hybrid-powder',
  },
]

const Categories = () => {
  const classes = useStyles()
  const { isDeviceSm } = MediaQuery()

  return (
    <Box>
      <NavigationMenu ProductsPage />
      <Box
        p={isDeviceSm ? 7 : 10}
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
        <Box
          pl={!isDeviceSm ? 20 : 0}
          pr={!isDeviceSm ? 20 : 0}
          pt={!isDeviceSm ? 5 : 0}
        >
          <Grid
            container
            item
            lg={12}
            spacing={isDeviceSm ? 5 : 10}
            justifyContent="center"
          >
            {CategoryDetails.map((i) => (
              <Grid item lg={4} sm={6} xs={12} key={`${i.url}`}>
                <Box className={classes.card} p={3}>
                  <Box>
                    <img
                      src={i.imgURL}
                      alt={i.url}
                      width="100%"
                      style={{
                        borderRadius: 10,
                      }}
                    />
                  </Box>
                  <Box>
                    <div
                      style={{
                        fontSize: 14,
                        textTransform: 'uppercase',
                        letterSpacing: 1.5,
                        fontWeight: 700,
                        color: '#D1CECE',
                      }}
                    >
                      {i.name}
                    </div>
                    <div
                      style={{
                        color: 'pink',
                        fontSize: 12,
                        marginTop: 4,
                      }}
                    >
                      {i.products} products
                    </div>
                    <br />
                    <div
                      style={{
                        fontSize: 12,
                        color: '#D1CECE',
                      }}
                    >
                      {i.description}
                    </div>
                    <br />
                    <Button
                      onClick={() => {
                        window.location.href = `/products/${i.url}`
                      }}
                      style={{
                        color: 'pink',
                        fontSize: 12,
                        letterSpacing: 1.1,
                        fontFamily: `'Poppins', sans-serif `,
                      }}
                    >
                      VIEW PRODUCTS
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
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
      borderRadius: 15,
      cursor: 'pointer',
      backgroundColor: '#420d8c',
    },
  })
)

export default Categories
