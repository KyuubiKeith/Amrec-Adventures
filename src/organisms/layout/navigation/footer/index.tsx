// ==================== Imports =====================//

// NextJS
import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

// Contentful
import { Client, TypePagesFields } from '../../../context/api/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'

// ==================== Imports =====================//

//

// ==================== Query =====================//

// ==================== Query =====================//

//

// ==================== Render =====================//

const Footer = () => {
  return (
    <footer>
      <h3>Footer Section</h3>
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
    </footer>
  )
}

export default Footer

// ==================== Render =====================//
