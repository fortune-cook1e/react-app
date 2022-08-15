import React from 'react'
import styles from './index.module.less'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ComponentsArea from './modules/ComponentsArea'
import CanvasArea from './modules/CanvasArea'
import OptionsArea from './modules/OptionsArea'
const Visual = (): JSX.Element => {
	return (
		<DndProvider backend={HTML5Backend}>
			<div className={styles.visual}>
				<ComponentsArea />
				<CanvasArea />
				<OptionsArea />
			</div>
		</DndProvider>
	)
}

export default Visual
