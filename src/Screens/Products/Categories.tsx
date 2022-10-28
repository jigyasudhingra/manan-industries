import React from 'react'
import { Box, Button, Grid, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import MediaQuery from '../../Components/MediaQuery'
import HYBRID_IMG from '../../Assets/hybrid.jpeg'
import NavigationMenu from '../../Components/NavigationMenu'

const CategoryDetails = [
  {
    name: 'Coating Powder',
    products: 5,
    description:
      'We are a leading Manufacturer of Traffic White PP Coating Powder and many more....',
    imgURL: HYBRID_IMG,
    url: 'coating-powder',
  },
  {
    name: 'Polyester Powder',
    products: 4,
    description:
      'Our product range includes a wide range of Ral Epoxy Polyester Coating Powder...',
    imgURL: 'https://media-public.canva.com/4P4Ec/MADx0r4P4Ec/1/tl.jpg',
    url: 'polyester-powder',
  },
  {
    name: 'Metallic Coating Powder',
    products: 2,
    description:
      'Our range of products include Metallic Coating Powder and Black Metallic Coating Powder.',
    imgURL: 'https://media-public.canva.com/4P4Ec/MADx0r4P4Ec/1/tl.jpg',
    url: 'metallic-powder',
  },
  {
    name: 'Structure Coating Power',
    products: 1,
    description:
      'Providing you the best range of Structure Coating Powder with effective & timely delivery.',
    imgURL: HYBRID_IMG,
    url: 'structure-powder',
  },
  {
    name: 'Hybrid Coating Powder',
    products: 1,
    description:
      'Manufacturer of a wide range of products which include Hybrid Coating Powder.',
    imgURL: HYBRID_IMG,
    url: 'hybrid-powder',
  },
  {
    name: 'Glass Coating Powder',
    products: 1,
    description:
      'We are a leading Manufacturer of Glass Coating Powder from Bahadurgarh, India.',
    imgURL: HYBRID_IMG,
    url: 'glass-powder',
  },
  {
    name: 'Aluminium Coating Power',
    products: 1,
    description:
      "Leading Manufacturer of Aluminium Coating Powder from Bahadurgarh. Click 'View Products'",
    imgURL: HYBRID_IMG,
    url: 'aluminum-powder',
  },
  // {
  //   name: 'Hybrid Power',
  //   products: 6,
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur inventore quibusdam reiciendis. Consequatur, vitae',
  //   imgURL: HYBRID_IMG,
  //   url: 'hybrid-powder',
  // },
]

const Categories = () => {
  const classes = useStyles()
  const { isDeviceSm } = MediaQuery()

  return (
    <Box>
      <NavigationMenu ProductsPage />
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
                      {i.products} product(s)
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
