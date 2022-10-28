import React from 'react'
import { Box, Grid, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { Link } from 'react-scroll'
import MediaQuery from '../../Components/MediaQuery'
import NavigationMenu from '../../Components/NavigationMenu'
import rainbowPic from '../../Assets/rainbow.jpg'
import pureEpoxy from '../../Assets/pureEpoxy.jpg'
import purePolyester from '../../Assets/purePolyester.jpg'
import hybridImg from '../../Assets/hybrid.jpg'
import sectionThree from '../../Assets/sectionThree.jpg'

const CategoryDetails = [
  {
    name: 'Pure Polyester Powder',
    products: 4,
    description:
      'Polyester powder coating is recommended for exterior coating due to its high durability against UV rays',
    imgURL: purePolyester,
    url: 'polyester-powder',
  },
  {
    name: 'Pure Epoxy Powder',
    products: 1,
    description:
      'Epoxy powder coating is a thermoset polymer coating that is majorly used in Auto Mobile Industries due to excellent adhesion.',
    imgURL: pureEpoxy,
    url: 'epoxy-powder',
  },
  {
    name: 'Hybrid Coating Powder',
    products: 1,
    description:
      'These hybrid powder coatings represent a compromise between the performance of epoxies as',
    imgURL: hybridImg,
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
          // background: `linear-gradient(29deg, rgba(72,2,131,1) 0%, rgba(34,1,77,1) 59%, rgba(72,2,131,1) 100%)`,
          // backgroundColor: 'rgba(34,1,77,1)',
          backgroundImage: `url(${sectionThree})`,
          backgroundSize: 'cover',
          letterSpacing: 0.5,
          color: 'white',
        }}
        className={classes.background}
        textAlign="center"
        style={{ textAlignLast: '-webkit-center' as any }}
      >
        <div>
          <img src={rainbowPic} alt="" width={isDeviceSm ? '100%' : '50%'} />
        </div>
        <Box
          pl={!isDeviceSm ? 20 : 0}
          pr={!isDeviceSm ? 20 : 0}
          pt={!isDeviceSm ? 5 : 3}
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
                        marginTop: 10,
                        color: '#D1CECE',
                      }}
                    >
                      {i.name}
                    </div>
                    {/* <div
                      style={{
                        color: 'pink',
                        fontSize: 12,
                        marginTop: 4,
                      }}
                    >
                      {i.products} product(s)
                    </div> */}
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
                    {/* <Button
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
                    </Button> */}
                    <Link
                      to={i.url}
                      smooth
                      spy
                      duration={1000}
                      style={{
                        color: 'pink',
                        fontSize: 12,
                        letterSpacing: 1.1,
                        fontFamily: `'Poppins', sans-serif `,
                      }}
                    >
                      KNOW MORE
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: 'rgba(72,2,131,1)',
          color: 'white',
          fontSize: 12,
        }}
        p={8}
        pl={isDeviceSm ? '10%' : '25%'}
        pr={isDeviceSm ? '10%' : '25%'}
        id="polyester-powder"
      >
        <div
          style={{
            fontSize: isDeviceSm ? 25 : 36,
            fontWeight: 700,
            letterSpacing: 1.5,
          }}
        >
          PURE POLYESTER POWDER
        </div>
        <br />
        <div
          style={{
            textAlign: 'justify',
            textJustify: 'inter-word',
          }}
        >
          Pure Polyester Powder Coatings are based on carboxyl terminated
          polyester resin and TGIC mainly used for exterior purpose and external
          application with the excellent outdoor durability and good chemical
          resistance with very good adhesion properties.The two most widely used
          types of polyester powder are TGIC (tri glycidyl isocyanurate) and non
          TGIC, which is also known as TGIC free called Primid Technology. Both
          TGIC and TGIC-free polyesters offer good mechanical resistance,
          including great flexibility, impact resistance, good chemical
          resistance and very good outdoor durability.
          <br /> <br />
          Polyesters will also provide good over bake resistance to yellowing,
          which makes them really easy to use and Standard industrial Grade
          Polyesters will offer five years of good UV and weather resistance,
          thats why these are work well for all interior and some exterior
          applications. A huge advantage of standard pure polyesters is the
          enormous choice of colors, gloss levels and special effects theyre
          available in. Its almost limitless! Polyesters have all important
          properties and are a common choice for many applications.
          <br /> <br />
          TGIC-free polyesters offer all the advantages as TGIC Polyesters.They
          can also give a higher first pass transfer efficiency, but are more
          sensitive to excess film thickness. LED Street Lights, Canopies,
          French Doors, Agricultural Equipments, Architectural Extrusions,
          Window Frames, Garden Furniture, Leisure Equipments, Outdoor Lighting
          Posts, Shades And Signs, Bicycle And Cycle Frames, Garage Doors,
          Luminaire Fittings And Motor Car Components: Radiators, Wheels,
          Bumpers, Window Fittings, Wiper Blades are its uses.
        </div>
      </Box>
      <Box
        sx={{
          backgroundColor: 'rgba(34,1,77,1)',
          color: 'white',
          fontSize: 12,
        }}
        p={8}
        pl={isDeviceSm ? '10%' : '25%'}
        pr={isDeviceSm ? '10%' : '25%'}
        id="epoxy-powder"
      >
        <div
          style={{
            fontSize: isDeviceSm ? 25 : 36,
            fontWeight: 700,
            letterSpacing: 1.5,
          }}
        >
          PURE EPOXY POWDER
        </div>
        <br />
        <div
          style={{
            textAlign: 'justify',
            textJustify: 'inter-word',
          }}
        >
          Epoxy powder Coating are suitable to provide optimal hardness and a
          protective chemical resistance to your products. Epoxy powder Coating
          are suggested for products that need to have excellent resistance to
          chemicals and corrosion. Mostly these Coating are recommended for
          items like water immersed merchandise, laundry machines, chemical
          pipelines, and others.
          <br />
          <br />
          Fortunecoat is a reputed company that manufactures and supplies these
          Epoxy powder Coating. The products manufactured by us give a durable
          finish to the products and they are able to stay protected from
          chemicals impact and other damages. These Coating have smart static
          charging properties and potency to transfer comfortably. It is
          recommended for industrial parts and equipment that need a spherical
          coating. This epoxy powder coating usually gives good protection
          against the impact of corrosion and abrasion.
          <br />
          <br />
          The perfect combination of its physical, chemical, mechanical, and
          thermal properties is what makes Epoxy a perfect solution to be used
          as a protection for different types of products. They are very
          durable, offer excellent hardness and have arguably the best chemical
          and corrosion resistance of all available powders. Another plus of
          this type of powder is its ease of use and a wide range of cure
          schedules. Epoxies adhere to metals extremely well, with various
          pretreatments of the metal providing excellent adhesion, including
          phosphate coating and sandblasting.
          <br />
          <br />
          Epoxies is that many primers are epoxies due to their adhesion
          strength and corrosion resistance. Since they do not handle the sun
          well, their use as a pre-coat underneath another paint type utilizes
          their strengths while covering their weaknesses.
        </div>
      </Box>
      <Box
        sx={{
          backgroundColor: 'rgba(72,2,131,1)',
          color: 'white',
          fontSize: 12,
        }}
        p={8}
        pl={isDeviceSm ? '10%' : '25%'}
        pr={isDeviceSm ? '10%' : '25%'}
        id="hybrid-powder"
      >
        <div
          style={{
            fontSize: isDeviceSm ? 25 : 36,
            fontWeight: 700,
            letterSpacing: 1.5,
          }}
        >
          HYBRID COATING POWDER
        </div>
        <br />
        <div
          style={{
            textAlign: 'justify',
            textJustify: 'inter-word',
          }}
        >
          These powder coatings are based on polyester and epoxy resins. Due to
          their excellent all-round properties, our hybrid powder coatings are
          the most used powder coatings in the coatings sector. They are
          versatile in use and meet many requirements for indoor goods. These
          are the widely used powder Coating.
          <br /> <br />
          They offer excellent hardness and have the best chemical and corrosion
          resistance of all available powders.Metal office furniture, shelves,
          household appliances, stoves and kitchen hoods, camping articles,
          radiators, heating plates, water heaters, household articles,
          machinery, computer cabinets and any metal object for indoor can be
          powder-coated
        </div>
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
      backgroundColor: 'rgba(72,2,131,1)',
    },
  })
)

export default Categories
