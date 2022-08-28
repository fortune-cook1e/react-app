import React from 'react'
import { Empty } from 'antd'
import styles from '../../index.module.less'
import { useCanvasContext } from '../../context'

const AttributeArea = (): JSX.Element => {
	const { globalCanvas } = useCanvasContext()

	const currentSeletedCmp = globalCanvas.getSelectedCmp()

	return (
		<div className={styles.attribute}>
			{currentSeletedCmp ? (
				<span>ha</span>
			) : (
				<div className={styles.empty}>
					<Empty description='请选择组件' />
				</div>
			)}
		</div>
	)
}

export default AttributeArea
