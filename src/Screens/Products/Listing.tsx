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

  if (category === 'coating-powder') LISTING_DETAILS = CoatingPowderDetails
  if (category === 'polyester-powder') LISTING_DETAILS = PolyesterPowderDetails
  if (category === 'metallic-powder') LISTING_DETAILS = MetallicPowderDetails
  if (category === 'structure-powder') LISTING_DETAILS = StructurePowderDetails
  if (category === 'hybrid-powder') LISTING_DETAILS = HybridPowderDetails
  if (category === 'glass-powder') LISTING_DETAILS = GlassPowderDetails
  if (category === 'aluminium-powder') LISTING_DETAILS = AluminiumPowderDetails

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

const CoatingPowderDetails: Array<ProductDetails> = [
  {
    name: 'Colored Coating Powder',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'Purple',
      price: 'Rs 200/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/YF/XH/MY-6124050/powder-coating-products-500x500.jpg',
    id: 'coating',
  },
  {
    name: 'Traffic White PP Powder',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'White',
      price: 'Rs 230/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/AK/DY/MY-6124050/traffic-white-pp-coating-powder-500x500.jpg',
    id: 'coating',
  },
  {
    name: 'Silver Glossy Coating',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'Silver',
      price: 'Rs 240/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/LK/RM/MY-6124050/silver-glossy-coating-powder-500x500.jpg',
    id: 'coating',
  },
  {
    name: 'Black Powder',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'Black',
      price: 'Rs 180/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/DP/JA/MY-6124050/antique-black-coating-powder-500x500.jpg',
    id: 'coating',
  },
  {
    name: 'Rainbow Powder',
    details: {
      packagingSize: 10,
      form: 'Rainbow',
      color: 'White',
      price: 'Rs 180/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/VF/LD/MY-6124050/rainbow-coating-powder-500x500.jpg',
    id: 'coating',
  },
]
const PolyesterPowderDetails: Array<ProductDetails> = [
  {
    name: 'RAL 9010 Epoxy Polyester',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'White',
      price: 'Rs 230/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/NC/DL/MY-6124050/ral-9010-epoxy-polyester-powder-coatings-500x500.jpg',
    id: 'polyester',
  },
  {
    name: 'RAL 9016 Epoxy Polyester',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'Black',
      price: 'Rs 250/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/RI/JN/MY-6124050/ral-9016-epoxy-polyester-powder-coatings-500x500.jpg',
    id: 'polyester',
  },
  {
    name: 'RAL 2001 Epoxy Polyester',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'Orange',
      price: 'Rs 200/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/BJ/UQ/MY-6124050/ral-2001-epoxy-polyester-coating-powder-500x500.jpg',
    id: 'hybrid',
  },
  {
    name: 'Orange Epoxy Polyester',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'Orange',
      price: 'Rs 200/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/UH/CS/MY-6124050/light-orange-epoxy-coating-powder-500x500.jpg',
    id: 'hybrid',
  },
]
const MetallicPowderDetails: Array<ProductDetails> = [
  {
    name: 'Metallic Powder',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'Purple',
      price: 'Rs 200/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/SL/HG/MY-6124050/metallic-coating-powder-500x500.jpg',
    id: 'metallic',
  },
  {
    name: 'Black Metallic Power',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'Black',
      price: 'Rs 160/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/NG/HA/MY-6124050/metallic-black-coating-powder-500x500.jpg',
    id: 'metallic',
  },
]
const StructurePowderDetails: Array<ProductDetails> = [
  {
    name: 'Structure Powder',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'Red',
      price: 'Rs 180/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/MR/AY/MY-6124050/structure-coating-powder-500x500.jpg',
    id: 'structure',
  },
]
const HybridPowderDetails: Array<ProductDetails> = [
  {
    name: 'Hybrid Power',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'White',
      price: 'Rs 230/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/YA/BB/MY-6124050/hybrid-coating-powder-500x500.jpg',
    id: 'hybrid',
  },
]
const GlassPowderDetails: Array<ProductDetails> = [
  {
    name: 'Glass Coating Powder',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'White',
      price: 'Rs 600/L',
    },
    imageUrl:
      'https://5.imimg.com/data5/FH/BG/MY-6124050/glass-coating-powder-500x500.jpg',
    id: 'glass',
  },
]
const AluminiumPowderDetails: Array<ProductDetails> = [
  {
    name: 'Aluminium Powder',
    details: {
      packagingSize: 10,
      form: 'Powder',
      color: 'Multiple Options',
      price: 'Rs 250/Kg',
    },
    imageUrl:
      'https://5.imimg.com/data5/OR/SU/MY-6124050/aluminium-coating-powder-500x500.jpg',
    id: 'aluminium',
  },
]
