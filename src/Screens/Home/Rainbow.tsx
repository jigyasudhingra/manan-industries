import React from 'react'
import { Button } from '@mui/material'
import rainbowPic from '../../Assets/rainbow.jpg'
import sectionThree from '../../Assets/homepage2.jpg'

const Rainbow = () => {
  return (
    <div style={styles.rainbowBody}>
      <div>
        <img src={rainbowPic} alt="" width={500} />
      </div>
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
      <div>
        <Button
          style={{
            borderRadius: 20,
            backgroundColor: '#5f19eb',
            padding: 5,
            paddingLeft: 25,
            paddingRight: 25,
            color: 'white',
            fontSize: 13,
            fontFamily: `'Poppins', sans-serif `,
            textTransform: 'capitalize',
          }}
        >
          View More
        </Button>
      </div>
    </div>
  )
}
const styles = {
  rainbowBody: {
    backgroundImage: `url(${sectionThree})`,
    backgroundSize: 'cover',
    color: 'white',
    padding: 50,
  },
  txt: {
    color: 'white',
    textAlign: 'justify' as const,
    fontSize: 16,
    maxWidth: '60%',
    display: 'inline-flex',
    marginBottom: 50,
  },
}
export default Rainbow
