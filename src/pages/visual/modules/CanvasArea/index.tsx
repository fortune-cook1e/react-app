import React from 'react'
import styles from '../../index.module.less'
import CanvasCore from './CanvasCore'

const CanvasArea = (): JSX.Element => {
	return (
		<div className={styles.canvas}>
			<CanvasCore />
		</div>
	)
}

export default CanvasArea
