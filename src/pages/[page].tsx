// ==================== Imports =====================//

// React
import { useState, useEffect } from 'react'

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

const AnimatedLetters = ({ title }: any) => (
  <span className="row-title">
    {[...title].map((letter, index) => (
      <span
        className="row-letter"
        key={index}
      >
        {letter}
      </span>
    ))}
  </span>
)

const BannerRowTop = ({ title }: any) => {
  return (
    <div className={'banner-row'}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <div className="row-col">
        <span className="row-message">
        Saying Yes to New Adventures
        </span>
      </div>
    </div>
  )
}

const BannerRowBottom = ({ title }: any) => {
  return (
    <div className={'banner-row center'}>
      <div className="scroll">
        <span>scroll</span>
        <span>down</span>
      </div>
      <AnimatedLetters title={title} />
    </div>
  )
}

const BannerRowCenter = ({ title, playMarquee }: any) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && 'animate'}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
      </div>
    </div>
  )
}

const Page: NextPage<TypePagesFields> = ({ page }) => {
  const { slug, title, pageContent } = page.fields

  const [playMarquee, setPlayMarquee] = useState(false)

  useEffect(() => {
    setPlayMarquee(true)
  }, [])

  return (
    <>
      <div className="banner">
        <BannerRowTop title={title} />
        <BannerRowCenter
          title={slug}
          playMarquee={playMarquee}
        />
        <BannerRowBottom title={title} />
      </div>
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
