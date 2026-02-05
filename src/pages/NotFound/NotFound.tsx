import React from 'react'
import Button from '../../components/atoms/Button/Button'
import Link from '../../components/atoms/Link/Link'
import styles from './NotFound.module.css'

export const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.code}>404</h1>
          <h2>Page Not Found</h2>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <div className={styles.actions}>
            <Link href="/" variant="button">Go Home</Link>
            <Button variant="secondary">View Projects</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
