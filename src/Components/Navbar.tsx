import React from 'react'

const Navbar = () => {
  return (
    <div style={styles.nav}>
      <a style={styles.a} href="http://localhost:3000/">
        About Us
      </a>
      <a style={styles.a} href="http://localhost:3000/">
        Products
      </a>
      <a style={styles.a} href="http://localhost:3000/">
        Testimonials
      </a>
      <a style={styles.a} href="http://localhost:3000/">
        Contact Us
      </a>
    </div>
  )
}

const styles = {
  nav: {
    maxWidth: '50%',
    display: 'inline-block',
    backgroundColor: '#712ad5',
    padding: 15,
    borderRadius: 40,
    marginTop: 50,
  },
  a: {
    padding: 20,
    color: 'white',
    textDecoration: 'none',
    fontWeight: 600,
  },
}

export default Navbar
