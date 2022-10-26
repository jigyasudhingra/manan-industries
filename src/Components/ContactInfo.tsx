import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactInfo = () => {
  return (
    <div>
      <div style={styles.heading}>CONTACT US</div>
      <div style={styles.card}>
        <div style={styles.container}>
          <div style={styles.left}>
            MANAN INDUSTIRES
            <div style={styles.address}>
              Plot No. 228, MIE Industrial Area
              <br /> Part - A, Bahadurgarh - 124507
              <br /> Haryana, India
            </div>
            <button type="button" style={styles.btn}>
              {/* <FontAwesomeIcon icon="fa-solid fa-globe" /> */}
              www.mananindustries.com
            </button>
          </div>
          <div style={styles.verticalLine} />
          <div style={styles.right}>
            LALIT AHUJA
            <br />
            <div style={{ fontWeight: 300 }}>1234567899</div>
            <br /> MANAN AHUJA
            <br /> 0123456789
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  heading: {
    color: 'white',
    fontSize: 50,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 50,
  },
  card: {
    display: 'inline-block',
    backgroundColor: '#420d8d',
    color: 'white',
    height: 300,
    width: '70%',
    padding: 30,
    borderRadius: 20,
    margin: 25,
    textAlign: 'justify' as const,
  },
  container: {
    display: 'flex',
    fontSize: 30,
    fontWeight: 600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    margin: 10,
  },
  address: {
    fontSize: 15,
    fontWeight: 400,
  },
  verticalLine: {
    margin: 10,
    borderLeft: '6px solid white',
    height: 200,
  },
  btn: {
    backgroundColor: '#5e17eb',
    color: 'white',
    width: 250,
    borderRadius: 20,
    border: 'none',
    padding: 15,
  },
  right: {
    margin: 10,
  },
}

export default ContactInfo
