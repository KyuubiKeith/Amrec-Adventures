// ==================== Imports =====================//

// NextJS
import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

// Contentful

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import ThemeToggle from '../../../../molecules/components/toggles/themeToggle'
import BrandMark from '../../../../atoms/abstracts/icons/Logo/brandMark'

// ==================== Imports =====================//

//

//

// ==================== Render =====================//

const Header = () => {
  return (
    // <header>

    //   <BrandMark />
    //   <ThemeToggle />

    //   <Link
    //     href={{
    //       pathname: `/about-us`
    //     }}
    //   >
    //     <a>About Us</a>
    //   </Link>
    //   <br />
    //   <Link
    //     href={{
    //       pathname: `/contact-us`
    //     }}
    //   >
    //     <a>Contact</a>
    //   </Link>

    // </header>

    <div className="header">
      <div className="header-inner">
        <div className="logo">
          <Link
            href={{
              pathname: `/`
            }}
          >
            <a>
              {' '}
              <BrandMark />
            </a>
          </Link>{' '}
        </div>
        <nav className="nav">
          <li>
            <Link
              href={{
                pathname: `/about-us`
              }}
            >
              <a>About</a>
            </Link>{' '}
          </li>
          <li>
            <Link
              href={{
                pathname: `/`
              }}
            >
              <a>Services</a>
            </Link>{' '}
          </li>
          <li>
            <Link
              href={{
                pathname: `/`
              }}
            >
              <a>Blog</a>
            </Link>{' '}
          </li>
          <li>
            <Link
              href={{
                pathname: `/`
              }}
            >
              <a>Gallery</a>
            </Link>{' '}
          </li>

          <li>
            {' '}
            <Link
              href={{
                pathname: `/contact-us`
              }}
            >
              <a>Contact</a>
            </Link>{' '}
          </li>
        </nav>
        <div className="contact">
          <ThemeToggle />
        </div>

        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Header

// ==================== Render =====================//
