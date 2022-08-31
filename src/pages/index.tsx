// ==================== Imports =====================//

// NextJS
import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

// Contentful
import { Client, TypePagesFields } from '../organisms/context/api/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
// ==================== Imports =====================//

//

// ==================== Query =====================//
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await Client.getEntries({
    content_type: 'pages'
  })
  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      page: items[0]
    },
    revalidate: 1
  }
}
// ==================== Query =====================//

//

// ==================== Render =====================//

const Home: NextPage<TypePagesFields> = ({ page }) => {
  const { slug, title, pageContent } = page.fields
  return (
    <>
      <h1>{title}</h1>
      <h2>{slug}</h2>
      {documentToReactComponents(pageContent as Document)}
      <Link
        href={{
          pathname: `/about-us`
        }}
      >
        <a>all about {title}</a>
      </Link>
      <br />
      <Link
        href={{
          pathname: `/contact-us`
        }}
      >
        <a>contact {title}</a>
      </Link>
    </>
  )
}

export default Home

// ==================== Render =====================//