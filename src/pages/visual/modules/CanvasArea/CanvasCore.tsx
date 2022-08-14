import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import styles from '../../index.module.less'

const CanvasCore = (): JSX.Element => (
	<Droppable droppableId='canvasCore'>
		{provided => (
			<div ref={provided.innerRef} className={styles.canvas__core} {...provided.droppableProps}>
				gaga
			</div>
		)}
	</Droppable>
)

export default CanvasCore
