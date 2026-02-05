import React from 'react'
import styles from './Icon.module.css'

export interface IconProps {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const IconSVGs: Record<string, JSX.Element> = {
  craftsmanship: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2L15 8l6 .5-4.5 3.5L19 20l-7-4-7 4 2.5-8-4.5-3.5L9 8 12 2z" />
    </svg>
  ),
  integrity: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 1a9 9 0 100 18 9 9 0 000-18zm1 13h-2v-2h2v2zm0-4h-2V5h2v5z" />
    </svg>
  ),
  innovation: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M11 2v2.07A7 7 0 005 11c0 3.87 3.13 7 7 7s7-3.13 7-7a7 7 0 00-6-6.93V2h-2zM7 20l5-3 5 3v1H7v-1z" />
    </svg>
  ),
  legacy: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2l3 6h6l-5 4 2 7-6-4-6 4 2-7-5-4h6z" />
    </svg>
  ),
}

export const Icon: React.FC<IconProps> = ({ name, size = 'md', className = '' }) => {
  const svg = IconSVGs[name] ?? (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="12" r="10" />
    </svg>
  )

  return (
    <span className={`${styles.icon} ${styles[size]} ${className}`} aria-hidden="true">
      {svg}
    </span>
  )
}

export default Icon
