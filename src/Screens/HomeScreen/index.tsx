import React from 'react'
// import ContactInfo from '../../Components/ContactInfo'
import Welcome from './welcome'
import AboutUs from './aboutUs'
import sectionThree from '../../Assets/sectionThree.jpg'
import sectionFour from '../../Assets/sectionFour.jpg'

import Rainbow from './rainbow'
import Testimonials from './testimonials'
import ContactInfo from '../../Components/ContactInfo'

const HomeScreen = () => {
  return (
    <>
      <Welcome />
      <AboutUs />
      <div style={styles.sectionThreeBody}>
        <Rainbow />
      </div>
      <div style={styles.sectionFourBody}>
        <Testimonials />
      </div>
      <div style={styles.sectionFiveBody}>
        <ContactInfo />
      </div>
    </>
  )
}

const styles = {
  sectionThreeBody: {
    background: `url(${sectionThree}) no-repeat center center fixed`,
    minHeight: 800,
    minWidth: '100%',
    margin: 0,
  },
  sectionFourBody: {
    background: `url(${sectionFour}) no-repeat center center fixed`,
    minHeight: 400,
    minWidth: '100%',
    margin: 0,
  },
  sectionFiveBody: {
    background: `url(${sectionFour}) no-repeat center center fixed`,
    minHeight: 400,
    minWidth: '100%',
    margin: 0,
  },
}

export default HomeScreen
