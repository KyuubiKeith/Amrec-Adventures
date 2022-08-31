// ==================== Imports =====================//

// NextJS
import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

// Contentful

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import ThemeToggle from '../../../../molecules/components/toggles/themeToggle'
// import BrandMark from '../../../../atoms/abstracts/icons/Logo/brandMark'

// ==================== Imports =====================//

//

//

// ==================== Render =====================//

const Header = () => {
  return (
    <header>
      <h3>Header Section</h3>

      {/* <BrandMark />*/}

      <ThemeToggle />

      <Link
        href={{
          pathname: `/about-us`
        }}
      >
        <a>About Us</a>
      </Link>
      <br />
      <Link
        href={{
          pathname: `/contact-us`
        }}
      >
        <a>Contact</a>
      </Link>
    </header>
  )
}

export default Header

// ==================== Render =====================//
