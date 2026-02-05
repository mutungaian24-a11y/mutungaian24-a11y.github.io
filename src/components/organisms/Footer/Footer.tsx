import React from 'react'
import Logo from '../../atoms/Logo/Logo'
import Link from '../../atoms/Link/Link'
import styles from './Footer.module.css'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <Logo variant="enterprise" />
            <p className={styles.brandMeta}>Nairobi, Kenya</p>
          </div>

          <div className={styles.centerContact}>
            <span className={styles.talkLabel}>LET'S TALK</span>
            <a href="mailto:hello@munguti.com" className={styles.contactEmail}>hello@munguti.com</a>
            <p className={styles.centerHint}>Available for select projects</p>
            <span className={styles.ctaButton}>
              <Link href="/contact" variant="button">Discuss a project</Link>
            </span>

            <div className={styles.socialIcons} aria-label="Social links">
              <a href="https://tiktok.com" aria-label="TikTok" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v7.2A4.8 4.8 0 0 0 16.8 14H18a6 6 0 1 1-6-6V2z"/></svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zM18.5 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.7c0-2.2 1.3-3.4 3.3-3.4.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.9c-.6.3-1.2.5-1.9.6.7-.4 1.2-1.1 1.4-1.9-.7.4-1.4.6-2.2.8A3.9 3.9 0 0 0 12 8.3c0 .3 0 .6.1.9A11 11 0 0 1 3 5.1c-.4.7-.6 1.6-.4 2.4.5 1.7 2 2.8 3.7 3-.5.1-1 .1-1.5.1-.4 0-.7 0-1-.1.7 2.1 2.6 3.5 4.8 3.5A7.9 7.9 0 0 1 2 19.5c1.6 1.1 3.5 1.7 5.6 1.7 6.7 0 10.3-5.6 10.3-10.4v-.5c.7-.5 1.2-1.1 1.6-1.8-.6.3-1.2.5-1.9.6z"/></svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM10 15.5V8.5l6 3.5-6 3.5z"/></svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5 2.5 2.5 0 0 0 4.98 3.5zM3 9h4v12H3zM9 9h3.6v1.6h.1c.5-.9 1.6-1.9 3.3-1.9 3.5 0 4.2 2.3 4.2 5.3V21h-4v-5.2c0-1.2 0-2.8-1.8-2.8-1.8 0-2 1.4-2 2.7V21H9z"/></svg>
              </a>
            </div>
          </div>

          <nav className={styles.links} aria-label="Footer navigation">
            <Link href="/projects" variant="default">Work</Link>
            <Link href="/services" variant="default">Services</Link>
            <Link href="/about" variant="default">About</Link>
            <Link href="/pricing" variant="default">Pricing</Link>
            <Link href="/process" variant="default">Process</Link>
            <Link href="/contact" variant="default">Contact</Link>
          </nav>
        </div>

        <div className={styles.legal}>
          <hr className={styles.divider} />
          <div className={styles.legalInner}>
            <p className={styles.copyright}>© {new Date().getFullYear()} Munguti Enterprises. All rights reserved.</p>
            <div className={styles.legalLinks}>
              <Link href="/privacy" variant="default">Privacy Policy</Link>
              <Link href="/terms" variant="default">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
