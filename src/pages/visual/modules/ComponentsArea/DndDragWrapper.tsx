import React from 'react'
import { useDrag } from 'react-dnd'
import { EngineComponentData } from '../../types/index'

interface Props {
	componentData: EngineComponentData
	children: React.ReactNode
}

const DndDragWrapper = ({ componentData, children }: Props): JSX.Element => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: componentData.id,
		item: { componentData },
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	}))

	return <div ref={drag}>{children}</div>
}

export default DndDragWrapper
