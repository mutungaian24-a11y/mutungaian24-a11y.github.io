import React from 'react'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div style={{ width: '100%' }}>
            <Nav onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
