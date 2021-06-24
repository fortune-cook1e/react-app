import React, { useEffect } from 'react'
import { useIsPresent, motion, Variants } from 'framer-motion'
import styles from './index.module.less'
import classnames from 'classnames'

import { Position, ToasterOptions } from './toaster.type'
import IconFont from '@/components/IconFont'

type Props = ToasterOptions

const variants: Variants = {
	initial: (position: Position) => {
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

const Toaster: React.FC<Props> = ({
	id,
	message,
	icon = 'success',
	position,
	onClose,
	duration
}) => {
	const isPresent = useIsPresent()

	useEffect(() => {
		isPresent &&
			setTimeout(() => {
				onClose()
			}, duration)
	}, [isPresent, onClose, duration])

	return (
		<motion.div
			className={classnames(styles.toast, styles[`toast_${position}`])}
			initial='initial'
			animate='animate'
			exit='exit'
			variants={variants}
			custom={position}
		>
			<IconFont className={styles.icon} icon={icon} />
			<p className={styles.message}>
				{message}-{id}
			</p>
		</motion.div>
	)
}

export default Toaster
