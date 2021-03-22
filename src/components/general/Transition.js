import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Transition = ({ children, location }) => {
  const time = 0.5

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: time,
        delay: time,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: time,
      },
    },
  }
  return (
    <AnimatePresence>
      <motion.main
        key={location.key}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default Transition
