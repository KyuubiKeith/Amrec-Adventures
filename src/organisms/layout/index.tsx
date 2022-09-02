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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading
      ? document.body.classList.add('loading')
      : document.body.classList.remove('loading'),
      themeState
        ? document.body.classList.add('🌑')
        : document.body.classList.add('☀️')
  }, [loading, themeState])

  return (
    <section
      id="📋"
      className={themeState ? '🌑' : '☀️'}
    >
      {loading ? (
        <motion.div key={'loader'}>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Header />
          <Content>{children}</Content>
          <Footer />
          {!loading && (
            <div className="transition-image final">
              <BrandMark />
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default Layout
// ==================== Render =====================//
