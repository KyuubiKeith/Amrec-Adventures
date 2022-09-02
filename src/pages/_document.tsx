import { Html, Head, Main, NextScript } from 'next/document'
import { themeState } from '../organisms/context/state/slices/themeSlice'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}