import React from 'react'

import { StoreState } from 'store'

import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

interface ContentProps {
  noRetreatScroll?: boolean
}

const Content: React.FC<ContentProps> = ({ children, noRetreatScroll = false }) => {
  const open = useSelector<StoreState, boolean>(({ sidebar }) => sidebar.open)

  const content = {
    animateOpen: {
      x: '210px',
      width: noRetreatScroll ? 'calc(100vw - 210px)' : 'calc(100vw - 210px - 15px)',
      transition: {
        type: 'tween',
        duration: 0.31,
      },
    },
    animateClosed: {
      x: '72px',
      width: noRetreatScroll ? 'calc(100vw - 72px)' : 'calc(100vw - 72px - 15px)',
      transition: {
        type: 'tween',
        duration: 0.19,
      },
    },
  }

  return (
    <motion.section
      variants={content}
      animate={open ? 'animateOpen' : 'animateClosed'}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.section>
  )
}

export default Content
