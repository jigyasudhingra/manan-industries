import React from 'react'

const testimonials = () => {
  return (
    <div>
      <div style={styles.heading}>What Our Clients Say...</div>
      <div style={styles.card}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque
        at harum consectetur doloribus tempore totam dolore delectus, error
        exercitationem minus quisquam amet iusto, labore sint sunt blanditiis
        asperiores facilis.
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
    backgroundColor: '#e6d1ff',
    height: 300,
    width: '25%',
    padding: 30,
    borderRadius: 20,
    margin: 25,
    textAlign: 'justify' as const,
  },
}

export default testimonials
