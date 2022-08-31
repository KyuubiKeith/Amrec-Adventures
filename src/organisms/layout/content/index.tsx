// ==================== Imports =====================//

// React
import { FC, PropsWithChildren, ReactNode } from 'react'

// NextJs
import type { GetStaticProps } from 'next'

// ==================== Imports =====================//

//

// ==================== Query =====================//
// ==================== Query =====================//

//

// ==================== Render =====================//

type _Content = {
  children: ReactNode
}

const Content: FC<PropsWithChildren> = ({ children }) => {
  return <section>{children}</section>
}

export default Content
// ==================== Render =====================//
