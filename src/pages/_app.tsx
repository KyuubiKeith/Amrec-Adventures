// ==================== Imports =====================//

// NextJS
import type { AppProps } from 'next/app'

// Styling
import '../blerdCorps.scss'

// Animation
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

//Redux
import { store, persistor } from '..//organisms/context/state/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from '../organisms/layout'
import Loader from '../molecules/components/loader'
import { useEffect, useState } from 'react'
import { themeState } from '../organisms/context/state/slices/themeSlice'

// ==================== Imports =====================//

//

// ==================== Query =====================//
// ==================== Query =====================//

//

// ==================== Render =====================//

function Initium({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading
      ? document.body.classList.add('loading')
      : document.body.classList.remove('loading')
  }, [loading])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AnimateSharedLayout>
          <AnimatePresence>
            {loading ? (
              <motion.div key={'loader'}>
                <Loader setLoading={setLoading} />
              </motion.div>
            ) : (
              <Layout>
                <motion.div
                  key={router.route}
                  initial="pageInitial"
                  animate="pageAnimate"
                  variants={{
                    pageInitial: { opacity: 0 },
                    pageAnimate: { opacity: 1 }
                  }}
                >
                  <Component {...pageProps} />
                </motion.div>
              </Layout>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </PersistGate>
    </Provider>
  )
}

export default Initium

// ==================== Render =====================//
