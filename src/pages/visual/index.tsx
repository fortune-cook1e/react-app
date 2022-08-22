import React, { useEffect } from 'react'
import styles from './index.module.less'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import HeaderArea from './modules/HeaderArea'
import ComponentsArea from './modules/ComponentsArea'
import CanvasArea from './modules/CanvasArea'
import OptionsArea from './modules/OptionsArea'
import { CanvasContext } from './context'
import { useCanvas } from './hooks/useCanvas'
import { useForceUpdate } from '@/hooks/useForceUpdate'

const Visual = (): JSX.Element => {
	const globalCanvas = useCanvas()
	const forceUpdate = useForceUpdate()

	useEffect(() => {
		// 订阅数据源的改变
		const unsubscribe = globalCanvas.subscribe(() => {
			forceUpdate()
		})

		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<CanvasContext.Provider value={{ globalCanvas }}>
			<DndProvider backend={HTML5Backend}>
				<div className={styles.visual}>
					<HeaderArea />
					<div className={styles.visual__content}>
						<ComponentsArea />
						<CanvasArea />
						<OptionsArea />
					</div>
				</div>
			</DndProvider>
		</CanvasContext.Provider>
	)
}

export default Visual
