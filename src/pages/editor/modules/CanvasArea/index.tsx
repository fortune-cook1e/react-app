import React, { useState, Suspense, lazy } from 'react'
import styles from '../../index.module.less'
import { useDrop } from 'react-dnd'
import { useComponents } from '../../hooks/useComponents'
import { ComponentData, DropResponse, CanvasComponentData } from '../../types'
import { getUniqueId } from '@/utils'

const CanvasArea = (): JSX.Element => {
	const { componentData } = useComponents()
	const [components, setComponents] = useState<CanvasComponentData[]>([])
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
		setComponents(prev => [
			...prev,
			{
				...item,
				uniqueId: getUniqueId()
			}
		])
	}

	return (
		<div ref={drop} className={styles.canvas}>
			<Suspense fallback={<>加载..</>}>
				{components.map((c: CanvasComponentData) => {
					const Component = lazy(() => import(`../../components/${c.componentId}`))
					return <Component key={c.uniqueId} />
				})}
			</Suspense>
		</div>
	)
}

export default CanvasArea
