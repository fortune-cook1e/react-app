import React from 'react'
import styles from './index.module.less'
import { useDrag } from 'react-dnd'

const Button = (): JSX.Element => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'button',
		item: { id: 'button', component: 'Button' },
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	}))
	return (
		<div
			ref={drag}
			className={styles.button}
			style={{ border: isDragging ? '2px solid #000' : 'none' }}
		>
			Button
		</div>
	)
}

export default Button
