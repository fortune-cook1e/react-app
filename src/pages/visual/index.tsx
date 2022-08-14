import React from 'react'
import styles from './index.module.less'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import ComponentsArea from './modules/ComponentsArea'
import CanvasArea from './modules/CanvasArea'
import OptionsArea from './modules/OptionsArea'

const Visual = (): JSX.Element => {
	const onDragStart = () => {}

	const onDragUpdate = () => {}

	const onDragEnd = (result: DropResult) => {
		console.log(result)
	}

	return (
		<DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
			<div className={styles.visual}>
				<ComponentsArea />
				<CanvasArea />
				<OptionsArea />
			</div>
		</DragDropContext>
	)
}

export default Visual
