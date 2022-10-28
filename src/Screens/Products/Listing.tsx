import { Box, Grid, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-scroll'
import ContactInfo from '../../Components/ContactInfo'
import MediaQuery from '../../Components/MediaQuery'
import NavigationMenu from '../../Components/NavigationMenu'

export interface ProductDetails {
  name: string
  details: {
    packagingSize: number
    form: string
    color: string
    price: string
  }
  imageUrl: string
  id: string
}

const Listing = () => {
  const classes = useStyles()
  const { isDeviceSm } = MediaQuery()

  const s = window.location.href
  let i = s.length - 1
  for (; i >= 0; i -= 1) {
    if (s[i] === '/') {
      break
    }
  }

  const category = s.substring(i + 1, s.length)
  let LISTING_DETAILS = HybridPowderDetails

  if (category === 'hybrid-powder') LISTING_DETAILS = HybridPowderDetails

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
        <Box />
        <Box
          pl={!isDeviceSm ? 20 : 0}
          pr={!isDeviceSm ? 20 : 0}
          pt={!isDeviceSm ? 5 : 0}
        >
          <Grid
            container
            item
            lg={12}
            spacing={isDeviceSm ? 5 : 12}
            justifyContent="center"
          >
            {LISTING_DETAILS.map((i: any) => (
              <Grid item lg={4} sm={6} xs={12} key={`${i.id}`}>
                <Box className={classes.card} p={2}>
                  <Box>
                    <img
                      src={i.imageUrl}
                      alt={i.id}
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
                    <br />
                    <Box
                      style={{
                        fontSize: 12,
                      }}
                    >
                      <Box display="flex" width="100%">
                        <Box
                          width="60%"
                          pt={0.2}
                          pb={0.2}
                          style={{
                            border: '1px solid white',
                          }}
                        >
                          Packaging Size
                        </Box>
                        <Box
                          width="40%"
                          pt={0.2}
                          pb={0.2}
                          style={{
                            border: '1px solid white',
                          }}
                        >
                          {i.details.packagingSize}
                        </Box>
                      </Box>
                      <Box display="flex" width="100%">
                        <Box
                          width="60%"
                          pt={0.2}
                          pb={0.2}
                          style={{
                            border: '1px solid white',
                          }}
                        >
                          Form
                        </Box>
                        <Box
                          width="40%"
                          pt={0.2}
                          pb={0.2}
                          style={{
                            border: '1px solid white',
                          }}
                        >
                          {i.details.form}
                        </Box>
                      </Box>
                      <Box display="flex" width="100%">
                        <Box
                          width="60%"
                          pt={0.2}
                          pb={0.2}
                          style={{
                            border: '1px solid white',
                          }}
                        >
                          Color
                        </Box>
                        <Box
                          width="40%"
                          pt={0.2}
                          pb={0.2}
                          style={{
                            border: '1px solid white',
                          }}
                        >
                          {i.details.color}
                        </Box>
                      </Box>
                      <Box display="flex" width="100%">
                        <Box
                          width="60%"
                          pt={0.2}
                          pb={0.2}
                          style={{
                            border: '1px solid white',
                          }}
                        >
                          Price
                        </Box>
                        <Box
                          width="40%"
                          pt={0.2}
                          pb={0.2}
                          style={{
                            border: '1px solid white',
                          }}
                        >
                          {i.details.price}
                        </Box>
                      </Box>
                    </Box>
                    <br />
                    <Link
                      to="contact-us"
                      smooth
                      spy
                      duration={1000}
                      style={{
                        fontSize: 12,
                        letterSpacing: 1.1,
                        color: 'pink',
                      }}
                    >
                      CONTACT US
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <ContactInfo />
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

export default Listing

const HybridPowderDetails: Array<ProductDetails> = [
  {
    name: 'Hybrid Power',
    details: {
      packagingSize: 6,
      form: 'solid',
      color: 'White',
      price: 'Rs 200/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/YF/XH/MY-6124050/powder-coating-products-500x500.jpg',
    id: 'hybrid',
  },
  {
    name: 'Hybrid Power',
    details: {
      packagingSize: 6,
      form: 'solid',
      color: 'White',
      price: 'Rs 200/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/KR/YO/MY-6124050/colored-coating-powder-500x500.jpg',
    id: 'hybrid',
  },
  {
    name: 'Hybrid Power',
    details: {
      packagingSize: 6,
      form: 'solid',
      color: 'White',
      price: 'Rs 200/Kg',
    },
    imageUrl: 'https://media-public.canva.com/4P4Ec/MADx0r4P4Ec/1/tl.jpg',
    id: 'hybrid',
  },
  {
    name: 'Hybrid Power',
    details: {
      packagingSize: 6,
      form: 'solid',
      color: 'White',
      price: 'Rs 200/Kg',
    },
    imageUrl: 'https://media-public.canva.com/4P4Ec/MADx0r4P4Ec/1/tl.jpg',
    id: 'hybrid',
  },
  {
    name: 'Hybrid Power',
    details: {
      packagingSize: 6,
      form: 'solid',
      color: 'White',
      price: 'Rs 200/Kg',
    },
    imageUrl: 'https://media-public.canva.com/4P4Ec/MADx0r4P4Ec/1/tl.jpg',
    id: 'hybrid',
  },
]
