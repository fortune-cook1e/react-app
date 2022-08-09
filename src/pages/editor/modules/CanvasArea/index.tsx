import React, { useState, Suspense, lazy } from 'react'
import styles from '../../index.module.less'
import { useDrop } from 'react-dnd'
import { useComponents } from '../hooks/useComponents'
import { ComponentData, DropResponse } from '../../types'

const CanvasArea = (): JSX.Element => {
	const { componentData } = useComponents()
	const [components, setComponents] = useState<ComponentData[]>([])
	const [{ isOver }, drop] = useDrop(() => ({
		accept: componentData.map(c => c.id),
		collect: monitor => {
			return {
				isOver: !!monitor.isOver()
			}
		},
		drop: ({ componentData }: DropResponse) => {
			addComponent(componentData)
		}
	}))

	const addComponent = (item: ComponentData) => {
		// FIXBUG: 这里只能用函数形式 否则每次都会只覆盖添加一条数据
		setComponents(prev => [...prev, item])
	}

	console.log({ components })

	return (
		<div ref={drop} className={styles.canvas}>
			<Suspense fallback={<>加载..</>}>
				{components.map((c: ComponentData) => {
					const Component = c.component
					return <Component key={c.id} />
				})}
			</Suspense>
		</div>
	)
}

export default CanvasArea
