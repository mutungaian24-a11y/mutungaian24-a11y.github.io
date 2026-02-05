import React from 'react'
import styles from './Card.module.css'

export interface CardProps {
  title: string
  children?: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <article className={`${styles.card} ${className ?? ''}`}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>{children}</div>
    </article>
  )
}

export default Card
