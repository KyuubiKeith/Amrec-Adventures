// ==================== Imports =====================//

// NextJS
import type { AppProps } from 'next/app'

// Styling
import '../blerdCorps.scss'

// Animation
import { motion } from 'framer-motion'

//Redux
import { store, persistor } from '..//organisms/context/state/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from '../organisms/layout'

// ==================== Imports =====================//

//

// ==================== Query =====================//
// ==================== Query =====================//

//

// ==================== Render =====================//

function Initium({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
    </Provider>
  )
}

export default Initium

// ==================== Render =====================//
