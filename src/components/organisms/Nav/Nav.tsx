import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../../../context/ThemeContext'
import styles from './Nav.module.css'

export const Nav: React.FC<{ onToggleMenu?: () => void }> = ({ onToggleMenu }) => {
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // notify parent toggle if provided
    onToggleMenu?.()
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeMobileMenu()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <div className={styles.nav} ref={dropdownRef}>
      <div className={styles.navLogo}>
        <Link to="/" className={styles.logoLink}><span className="brand-font">Munguti</span></Link>
      </div>

      {/* Desktop nav links */}
      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/projects" className={styles.navLink}>Projects</Link>
        <Link to="/services" className={styles.navLink}>Services</Link>
        <Link to="/blog" className={styles.navLink}>Blog</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
      </div>

      <div className={styles.navActions}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>

        {/* Mobile menu toggle */}
        <button 
          className={styles.menuButton} 
          onClick={toggleMobileMenu} 
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileDropdown}>
          <nav className={styles.mobileNav}>
            <Link to="/" className={styles.mobileNavLink} onClick={closeMobileMenu}>Home</Link>
            <Link to="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>About</Link>
            <Link to="/projects" className={styles.mobileNavLink} onClick={closeMobileMenu}>Projects</Link>
            <Link to="/services" className={styles.mobileNavLink} onClick={closeMobileMenu}>Services</Link>
            <Link to="/blog" className={styles.mobileNavLink} onClick={closeMobileMenu}>Blog</Link>
            <Link to="/contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Nav
