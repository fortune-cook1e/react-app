import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import RenderComponents from './modules/RenderComponents'
import RenderCanvas from './modules/RenderCanvas'
import Options from './modules/Options'
import styles from './index.module.less'

const Editor = (): JSX.Element => {
	return (
		<DndProvider backend={HTML5Backend}>
			<div className={styles.editor}>
				<RenderComponents />
				<RenderCanvas />
				<Options />
			</div>
		</DndProvider>
	)
}

export default Editor
