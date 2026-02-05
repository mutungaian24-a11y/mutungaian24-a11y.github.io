import React from 'react'
import styles from './Link.module.css'

export interface LinkProps {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'nav' | 'button'
  external?: boolean
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  variant = 'default',
  external = false 
}) => {
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  
  return (
    <a href={href} className={`${styles.link} ${styles[variant]}`} {...props}>
      {children}
    </a>
  )
}

export default Link
