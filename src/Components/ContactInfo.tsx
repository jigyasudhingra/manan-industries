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
            <br />
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
            <div style={{ fontWeight: 600, fontSize: 36 }}>LALIT AHUJA</div>
            <div style={{ fontWeight: 300, fontSize: 16 }}>1234567899</div>
            <div style={{ fontWeight: 600, fontSize: 36 }}>MANAN AHUJA</div>
            <div style={{ fontWeight: 300, fontSize: 16 }}>1234567899</div>
            <button type="button" style={styles.btn2}>
              {/* <FontAwesomeIcon icon="fa-solid fa-globe" /> */}
              rainbow_coat@yahoo.com
            </button>
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
    justifyContent: 'space-around',
  },
  left: {
    fontSize: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  address: {
    fontSize: 15,
    fontWeight: 400,
  },
  btn: {
    backgroundColor: '#5e17eb',
    color: 'white',
    width: 250,
    borderRadius: 20,
    border: 'none',
    padding: 15,
    fontSize: 15,
  },
  verticalLine: {
    margin: 10,
    borderLeft: '6px solid white',
    height: 200,
  },
  right: {
    marginLeft: 25,
  },
  btn2: {
    backgroundColor: '#5e17eb',
    color: 'white',
    width: 250,
    borderRadius: 20,
    border: 'none',
    padding: 15,
    fontSize: 15,
  },
}

export default ContactInfo
