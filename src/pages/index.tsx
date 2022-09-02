// ==================== Imports =====================//

// NextJS
import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

// Contentful
import { Client, TypePagesFields } from '../organisms/context/api/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'

// Animation
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
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
        <span className="row-message">Saying Yes to New Adventures</span>
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


const Home: NextPage<TypePagesFields> = ({ page }) => {
  const { slug, title, pageContent } = page.fields
    const [playMarquee, setPlayMarquee] = useState(false)

    useEffect(() => {
      setPlayMarquee(true)
    }, [])

  return (
    // <>
    //   <motion.h1
    //     initial="hidden"
    //     animate="visible"
    //     variants={{
    //       hidden: {
    //         scale: 0.8,
    //         opacity: 0
    //       },
    //       visible: {
    //         scale: 1,
    //         opacity: 1,
    //         transition: {
    //           delay: 0.4
    //         }
    //       }
    //     }}
    //   >
    //     {title}
    //   </motion.h1>
    //   {documentToReactComponents(pageContent as Document)}
    //   <Link
    //     href={{
    //       pathname: `/about-us`
    //     }}
    //   >
    //     <a>all about {title}</a>
    //   </Link>
    //   <br />
    //   <Link
    //     href={{
    //       pathname: `/contact-us`
    //     }}
    //   >
    //     <a>contact {title}</a>
    //   </Link>
    // </>
    <div className="banner">
      <BannerRowTop title={title} />
      <BannerRowCenter
        title={slug}
        playMarquee={playMarquee}
      />
      <BannerRowBottom title={title} />
    </div>
  )
}

export default Home

// ==================== Render =====================//