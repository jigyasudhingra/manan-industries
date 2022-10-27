import React from 'react'
import sectionTwo from '../../Assets/sectionTwo.jpg'

const aboutUs = () => {
  return (
    <div style={styles.aboutUsBody} id="about">
      <div style={styles.text}>
        <h1 style={styles.heading}>ABOUT US</h1>
        <p style={styles.para}>
          Established in the year 2003, Manan Industries is engaged as
          Manufacturer and Wholesaler of Polyester Powder Coating, Structure
          Powder Coating, Metallic Powder Coating, Hybrid Powder Coating, etc.
          <br /> <br />
          Further, our range is highly demanded in for its optimum quality. All
          the efforts of the company to ensure excellent quality products for
          their customers has enabled them to build long lasting business
          relationships with their clients.
        </p>
      </div>
      <div style={styles.pic} />
    </div>
  )
}

const styles = {
  aboutUsBody: {
    backgroundImage: `url(${sectionTwo})`,
    backgroundSize: 'cover',
    display: 'flex',
  },
  text: {
    width: '50%',
    color: 'white',
    marginLeft: 30,
    marginTop: 50,
    fontSize: 25,
  },
  heading: {
    textAlign: 'left' as const,
  },
  para: {
    display: 'inline-block',
    textAlign: 'justify' as const,
    justifyContent: 'left',
  },
  pic: {
    height: 100,
  },
}

export default aboutUs
