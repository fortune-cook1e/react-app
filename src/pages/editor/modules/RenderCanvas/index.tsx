import React, { ComponentType, useState } from 'react'
import styles from '../../index.module.less'
import { useDrop } from 'react-dnd'
import { useComponents } from '../hooks/useComponents'

export interface ComponentData {
	id: string
	component: string
}

const RenderCanvas = (): JSX.Element => {
	const { componentsMap } = useComponents()
	const [components, setComponents] = useState<ComponentData[]>([])
	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'button',
		drop: (item: ComponentData) => {
			addComponent(item)
		}
	}))

	const addComponent = (item: ComponentData) => {
		setComponents([...components, item])
	}

	console.log(components)

	return (
		<div ref={drop} className={styles.canvas}>
			{components.map((c: ComponentData) => {
				const Component = (componentsMap as any)[c.component]
				return <Component key={c.id} />
			})}
		</div>
	)
}

export default RenderCanvas
