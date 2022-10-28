import React from 'react'

import rainbowPic from '../../Assets/rainbow.jpg'

const rainbow = () => {
  return (
    <div style={styles.rainbowBody}>
      <img src={rainbowPic} alt="" />
      <br />
      <div style={styles.txt}>
        {/* Established in the year 2003, Manan Industries is engaged as
        Manufacturer and Wholesaler of Polyester Powder Coating, Structure
        Powder Coating, Metallic Powder Coating, Hybrid Powder Coating, etc.
        <br />
        <br />
        Further, our range is highly demanded in for its optimum quality. All
        the efforts of the company to ensure excellent quality products for
        their customers has enabled them to build long lasting business
        relationships with their clients. */}
        Rainbow Powder Coating, specialist in RAL and PENTONE Series. Our range
        is highly demanded for it\'s optimum quality. <br />
        Rainbow has been providing it\'s products and services for last 20
        years. Powder Coating is a type of coating that is applied as a free
        flowing dry powder, unlike conventional liquid paint. Powder coating is
        typically applied electrostatically and then cured under heat and
        ultraviolet light. It is usually used to create a harder finish than
        conventional paint
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
