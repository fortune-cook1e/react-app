import { motion } from 'framer-motion'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const AnimationPage = ({ children }: Props): JSX.Element => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimationPage
