// ==================== Imports =====================//

// React
import { FC, PropsWithChildren, ReactNode } from 'react'

// NextJs
import type { GetStaticProps } from 'next'

// State
import { useAppSelector } from '../context/state/hooks'

// Content
import { TypePagesFields } from '../context/api/contentful'

import Header from './navigation/header'
import Content  from './content'
import Footer from './navigation/footer'


// ==================== Imports =====================//


//

// ==================== Query =====================//
// ==================== Query =====================//

//

// ==================== Render =====================//

const Layout: FC<PropsWithChildren> = ({children}) => {
  const { themeState } = useAppSelector((state: { theme: any }) => state.theme)

  return (
    <section
      id="📋"
      className={themeState ? '🌑' : '☀️'}
    >
      <Header />
      <Content>{children}</Content>
      <Footer />
    </section>
  )
}

export default Layout;
// ==================== Render =====================//