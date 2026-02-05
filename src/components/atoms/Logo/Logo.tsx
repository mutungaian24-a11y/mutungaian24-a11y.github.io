import React from 'react'
import styles from './Logo.module.css'

export interface LogoProps {
  variant?: 'enterprise' | 'labs'
  size?: 'sm' | 'md' | 'lg'
}

export const Logo: React.FC<LogoProps> = ({ variant = 'enterprise', size = 'md' }) => {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      {variant === 'enterprise' ? (
        <span className={styles.logoText}>
          <span className={styles.munguti}>Munguti</span>
          <span className={styles.enterprises}>Enterprises</span>
        </span>
      ) : (
        <span className={styles.logoText}>
          <span className={styles.munguti}>Munguti</span>
          <span className={styles.labs}>Labs</span>
        </span>
      )}
    </div>
  )
}

export default Logo
