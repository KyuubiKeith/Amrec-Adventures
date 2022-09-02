// ==================== Imports =====================//

// NextJS
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

// Contentful Client
import { Client, TypePagesFields } from '../organisms/context/api/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { EntryCollection } from 'contentful'

// Animation
import { motion } from 'framer-motion'

// ==================== Imports =====================//

//

// ==================== Query =====================//

/** Generate Individual Page at Build Time **/
export const getStaticPaths: GetStaticPaths = async () => {
  const { items }: EntryCollection<TypePagesFields> = await Client.getEntries({
    content_type: 'pages'
  })

  const paths = items.map((Page) => {
    return {
      params: { page: Page.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

/** Generate Individual Page Data **/
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await Client.getEntries({
    content_type: 'pages',
    'fields.slug': params!.page
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
const Page: NextPage<TypePagesFields> = ({ page }) => {
  const { slug, title, pageContent } = page.fields

  return (
    <>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4
            }
          }
        }}
      >
        {title}
      </motion.h1>
      <Link
        // href={`/projects/${project.slug}`}
        href={{
          pathname: `/packages`
        }}
        as={`/packages`}
      >
        <a>Browse Packages</a>
      </Link>
      {documentToReactComponents(pageContent as Document)}
    </>
  )
}

export default Page
// ==================== Render =====================//
