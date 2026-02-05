import React from 'react'
import Nav from '../Nav/Nav'
import styles from './Hero.module.css'

export const Hero: React.FC = () => {
  React.useEffect(() => {
    console.log('Hero mounted')
  }, [])

  return (
    <section className={styles.hero}>
      <Nav />

      {/* Central Visual Focus */}
      <div className={styles.heroCenter}>
        <h1 className={styles.headline}>
          Building What's <span className={`${styles.accent} ${styles.spaceage}`}>Next</span>
        </h1>
      </div>

      {/* Brand Anchors */}
      <div className={styles.heroBrand}>
        <span className="brand-font">Munguti</span> Enterprises
      </div>
      
      <div className={styles.heroMeta}>
        Many Ventures. One Standard.
      </div>
    </section>
  )
}

export default Hero
