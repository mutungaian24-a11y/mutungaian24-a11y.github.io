import React from 'react'
import styles from './Button.module.css'

export interface ButtonProps {
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[variant] || ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
