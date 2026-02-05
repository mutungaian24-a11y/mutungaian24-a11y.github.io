import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../organisms/Header/Header'
import Footer from '../../organisms/Footer/Footer'

export const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div>
      {!isHome && <Header />}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
