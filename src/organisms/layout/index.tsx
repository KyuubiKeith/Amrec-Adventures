// ==================== Imports =====================//

// React
import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'

// NextJs
import type { GetStaticProps } from 'next'
import Image from 'next/image'

// State
import { useAppSelector } from '../context/state/hooks'

// Content
import { TypePagesFields } from '../context/api/contentful'

import Header from './navigation/header'
import Content from './content'
import Footer from './navigation/footer'
import Loader from '../../molecules/components/loader'
import BrandMark from '../../atoms/abstracts/icons/Logo/brandMark'
import { motion } from 'framer-motion'

// ==================== Imports =====================//

//

// ==================== Query =====================//
// ==================== Query =====================//

//

// ==================== Render =====================//

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { themeState } = useAppSelector((state: { theme: any }) => state.theme)
  const loading = useState(false)

  return (
    <section
      id="📋"
      className={themeState ? '🌑' : '☀️'}
    >
      <Header />
      <Content>{children}</Content>
      <Footer />
      {!loading && (
        <motion.div
          className="transition-image final"
          layoutId="banner"
        >
          <Image
            alt="BlerdCorps | HavoxWorx Brand Icon"
            src={'/Images/portrait.jpeg'}
            width={100}
            height={100}
            className="brandMark"
          />
        </motion.div>
      )}
    </section>
  )
}

export default Layout
// ==================== Render =====================//
