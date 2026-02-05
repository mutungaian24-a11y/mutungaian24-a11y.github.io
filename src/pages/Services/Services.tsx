import React from 'react'
import styles from './Services.module.css'

export const Services: React.FC = () => {
  return (
    <div className={styles.services}>
      <section className="section">
        <div className="container">
          <h1>Services</h1>
          <p>Services offered across our ventures will be listed here.</p>
        </div>
      </section>
    </div>
  )
}

export default Services
