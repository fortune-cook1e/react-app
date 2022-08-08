import React from 'react'
import styles from '../../index.module.less'
import Button from '../../components/Button'
import { useDrop } from 'react-dnd'

const RenderComponents = (): JSX.Element => {
	return (
		<div className={styles.components}>
			<Button />
		</div>
	)
}

export default RenderComponents
