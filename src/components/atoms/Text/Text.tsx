import React from 'react'

export interface TextProps {
  as?: 'p' | 'span' | 'div'
  children?: React.ReactNode
}

export const Text: React.FC<TextProps> = ({ as = 'p', children }) => {
  const Component: React.ElementType = as
  return <Component>{children}</Component>
}

export default Text
