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

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#712ad5',
    padding: '15px 30px',
    borderRadius: '40px',
    marginTop: '50px',
    flexWrap: 'wrap', // Ensures the items wrap on small screens
    maxWidth: '100%',
    boxSizing: 'border-box', // Type assertion for boxSizing
  },
  a: {
    padding: '10px 20px',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
}

export default Navbar
