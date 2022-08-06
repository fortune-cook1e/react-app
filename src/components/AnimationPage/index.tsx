import React from 'react'
import { motion } from 'framer-motion'

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
