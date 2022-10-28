import React from 'react'
import { Button } from '@mui/material'
import rainbowPic from '../../Assets/rainbow.png'
import sectionThree from '../../Assets/sectionThree.jpg'

const Rainbow = () => {
  return (
    <div style={styles.rainbowBody} id="products">
      <div>
        <img src={rainbowPic} alt="" width="70%" />
      </div>
      <br />
      <div style={styles.txt}>
        Rainbow Powder Coating, specialist in RAL and PENTONE Series. Our range
        is highly demanded for its optimum quality. <br />
        Rainbow has been providing its products and services for last 20 years.
        Powder Coating is a type of coating that is applied as a free flowing
        dry powder, unlike conventional liquid paint. Powder coating is
        typically applied electrostatically and then cured under heat and
        ultraviolet light. It is usually used to create a harder finish than
        conventional paint. It is non-toxing and less flamabale, achieves a
        consistent and long lasting colour finish across the metal and prevents
        corrosion, chipping and fading.
      </div>
      <div>
        <Button
          onClick={() => {
            window.location.href = '/products'
          }}
          style={{
            borderRadius: 20,
            backgroundColor: '#5f19eb',
            padding: 7,
            paddingLeft: 30,
            paddingRight: 30,
            color: 'white',
            fontSize: 13,
            letterSpacing: 0.6,
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
