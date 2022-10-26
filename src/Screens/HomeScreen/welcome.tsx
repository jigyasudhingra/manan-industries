import React from 'react'

import logoPic from '../../Assets/logoo.jpg'
import strike from '../../Assets/strike.png'

const welcome = () => {
  return (
    <div style={styles.welcomeBody}>
      <div style={styles.logo} />
      <div style={styles.welcomeText}>
        WELCOME TO <br /> MANAN INDUSTRIES
      </div>
      <div style={styles.sloganText}>Believe in Quality</div>
      <div style={styles.strike} />
    </div>
  )
}

const styles = {
  welcomeBody: {
    display: 'relative',
  },
  logo: {
    background: `url(${logoPic})`,
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    height: 210,
    width: 210,
    borderRadius: '50%',
    marginTop: 50,
    marginBottom: 50,
    border: '5px solid white',
    boxShadow: '0px 0px 10px 10px #712ad5',
  },
  welcomeText: {
    display: 'relative',
    color: 'white',
    fontSize: 60,
    fontWeight: 600,
  },
  sloganText: {
    height: 100,
    width: 300,
    fontWeight: 600,
    fontSize: 25,
    color: 'white',
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Pinyon-script',
  },
  strike: {
    background: `url(${strike})`,
    backgroundRepeat: 'no-repeat',
    height: 30,
    width: 200,
    display: 'flex',
    marginTop: -75,
    marginLeft: '44%',
  },
}
export default welcome
