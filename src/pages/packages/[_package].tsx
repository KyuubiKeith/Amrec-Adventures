// ==================== Imports =====================//

// NextJS
// NextJS
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

// Contentful Client
import {
  Client,
  TypePackagesFields
} from '../../organisms/context/api/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { EntryCollection } from 'contentful'

// ==================== Imports =====================//

//

// ==================== Query =====================//

/** Generate Individual Page at Build Time **/
export const getStaticPaths: GetStaticPaths = async () => {
  const { items }: EntryCollection<TypePackagesFields> =
    await Client.getEntries({
      content_type: 'packages'
    })

  const paths = items.map((Package) => {
    return {
      params: { _package: Package.fields.slug }
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
    content_type: 'packages',
    'fields.slug': params!._package
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
      _package: items[0]
    },
    revalidate: 1
  }
}

// ==================== Query =====================//

//

// ==================== Render =====================//

const Projects: NextPage<TypePackagesFields> = ({ _package }) => {
  const { Id, slug, title } = _package.fields
  return (
    <>
      {title}
      {slug}
      {Id}
    </>
  )
}

export default Projects
// ==================== Render =====================//
