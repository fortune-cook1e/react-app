import React, { useEffect } from 'react'
import styles from './index.module.less'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import HeaderArea from './modules/HeaderArea'
import ComponentsArea from './modules/ComponentsArea'
import AttributeArea from './modules/AttributeArea'
import Engine from './modules/Engine'
import { EngineContext } from './context'
import { useEngine } from './hooks/useEngine'
import { useForceUpdate } from '@/hooks/useForceUpdate'
import useEventEmitter from '@/hooks/useEventEmitter'

const Visual = (): JSX.Element => {
	const globalEngine = useEngine()
	const forceUpdate = useForceUpdate()
	const eventEmitter = useEventEmitter()

	useEffect(() => {
		// 订阅数据源的改变
		const unsubscribe = globalEngine.subscribe(() => {
			forceUpdate()
		})

		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<EngineContext.Provider value={{ globalEngine, eventEmitter }}>
			<DndProvider backend={HTML5Backend}>
				<div className={styles.visual}>
					<HeaderArea />
					<div className={styles.emulator}>
						<div className={styles.emulator__left}>
							<ComponentsArea />
						</div>
						<div className={styles.emulator__middle}>
							<Engine engineInstance={globalEngine} />
						</div>
						<div className={styles.emulator__right}>
							<AttributeArea />
						</div>
					</div>
				</div>
			</DndProvider>
		</EngineContext.Provider>
	)
}

export default Visual
