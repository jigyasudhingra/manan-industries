import React from 'react'

import rainbowPic from '../../Assets/rainbow.jpg'

const rainbow = () => {
  return (
    <div style={styles.rainbowBody}>
      <img src={rainbowPic} alt="" />
      <br />
      <div style={styles.txt}>
        Established in the year 2003, Manan Industries is engaged as
        Manufacturer and Wholesaler of Polyester Powder Coating, Structure
        Powder Coating, Metallic Powder Coating, Hybrid Powder Coating, etc.
        <br />
        <br />
        Further, our range is highly demanded in for its optimum quality. All
        the efforts of the company to ensure excellent quality products for
        their customers has enabled them to build long lasting business
        relationships with their clients.
      </div>
    </div>
  )
}

const styles = {
  rainbowBody: {
    display: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  txt: {
    color: 'white',
    textAlign: 'justify' as const,
    fontSize: 25,
    maxWidth: '60%',
    display: 'inline-flex',
    marginTop: 50,
    marginBottom: 50,
  },
}

export default rainbow
