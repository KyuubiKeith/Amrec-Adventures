// ==================== Imports =====================//

// NextJS
import type { AppProps } from 'next/app'

// Styling
import '../blerdCorps.scss'

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

function Initium({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default Initium

// ==================== Render =====================//
