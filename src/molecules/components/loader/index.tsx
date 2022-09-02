// ==================== Imports =====================//

// React
import React, { useEffect } from 'react'

// NextJS
import Image from '../image'

// Framer Motion
import { motion } from 'framer-motion'

// ==================== Imports =====================//

//

// ==================== Variants =====================//
const container = {
  show: {
    transition: {
      staggerChildren: 0.35
    }
  }
}

const item = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8
    }
  }
}

const itemMain = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6
    }
  }
}
// ==================== Variants =====================//

//

// ==================== Render =====================//
// ==================== Render =====================//

const Loader = ({ setLoading }: any) => {
  return (
    <div className="loader">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
        onAnimationComplete={() => setLoading(false)}
      >
        <ImageBlock
          variants={item}
          id="image-1"
        />
        <motion.div
          variants={itemMain}
          className="transition-image"
          layoutId='banner'
        >
          <Image
            alt="BlerdCorps | HavoxWorx Brand Icon"
            src={'/Images/portrait.jpeg'}
            width={100}
            height={100}
            className="brandMark"
          />
        </motion.div>
        <ImageBlock
          variants={item}
          id="image-3"
        />
        <ImageBlock
          variants={item}
          id="image-4"
        />
        <ImageBlock
          variants={item}
          id="image-5"
        />
      </motion.div>
    </div>
  )
}

export const ImageBlock = ({ id, variants }: any) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
    >
      <Image
        src={'/Images/logo.svg'}
        fallback={'/Images/logo.svg'}
        alt="BlerdCorps | HavoxWorx Brand Icon"
      />
    </motion.div>
  )
}
export default Loader
