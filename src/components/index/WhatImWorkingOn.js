import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const WhatImWorkingOn = props => {
  const { latestProject } = props

  const [ref, isVisible] = useInView({ threshold: 0.7 })
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  }

  const Container = styled.div`
    height: 100vh;
  `
  return (
    <div style={{ height: '100vh' }}>
      <motion.div
        ref={ref}
        variants={variants}
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ marginLeft: '50px' }}
      >
        <h1>Hey I'm on the screen</h1>
        <Img
          style={{ borderRadius: '30px' }}
          alt={latestProject.description}
          fluid={{ ...latestProject.cover.fluid }}
        />
      </motion.div>
    </div>
  )
}

export default WhatImWorkingOn
