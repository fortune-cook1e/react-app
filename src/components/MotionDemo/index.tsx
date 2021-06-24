import React, { useEffect, CSSProperties } from 'react'
import { useIsPresent, Variants, motion, usePresence } from 'framer-motion'

type Props = {
	visible?: boolean
}

const style: CSSProperties = {
	background: 'lightgreen',
	borderRadius: '8px',
	width: '150px',
	height: '150px'
}

const variants: Variants = {
	initial: (props: any) => {
		console.log({ props })
		const { position } = props

		const dir = ['top', 'bottom'].includes(position) ? 'y' : 'x'

		let factor = ['top-right', 'bottom-right'].includes(position) ? 1 : -1
		if (position === 'bottom') factor = 1

		return {
			opacity: 0,
			[dir]: factor * 24
		}
	},
	animate: {
		opacity: 1,
		y: 0,
		x: 0,
		scale: 1,
		transition: {
			duration: 0.4,
			ease: [0.4, 0, 0.2, 1]
		}
	},
	exit: {
		opacity: 0,
		scale: 0.85,
		transition: {
			duration: 0.2,
			ease: [0.4, 0, 1, 1]
		}
	}
}

const MotionDemo: React.FC<Props> = ({ visible }) => {
	// const isPresent = useIsPresent()
	const [isPresent, safeToRemove] = usePresence()
	console.log({ safeToRemove })

	useEffect(() => {
		console.log({ isPresent })
		// !isPresent && setTimeout(safeToRemove, 1000)
	}, [isPresent])

	return (
		<motion.div
			variants={variants}
			// key={key}
			initial='initial'
			animate='animate'
			exit='exit'
			style={style}
			onHoverStart={() => console.log('Hover starts')}
			onHoverEnd={() => console.log('Hover ends')}
			custom={{ position: 'bottom' }}
			// animate={{ rotate: 360, x: 200 }}
			transition={{ ease: 'easeOut', duration: 0.5 }}
		/>
	)
}

export default MotionDemo
