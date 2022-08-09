import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ComponentsArea from './modules/ComponentsArea'
import CanvasArea from './modules/CanvasArea'
import Options from './modules/Options'
import styles from './index.module.less'

const Editor = (): JSX.Element => {
	return (
		<DndProvider backend={HTML5Backend}>
			<div className={styles.editor}>
				<ComponentsArea />
				<CanvasArea />
				<Options />
			</div>
		</DndProvider>
	)
}

export default Editor
