import React from 'react'
import { useDrag } from 'react-dnd'
import { ComponentData } from '../../types'

interface Props {
	componentData: ComponentData
	children: React.ReactNode
}

const DrapWrapper = ({ componentData, children }: Props): JSX.Element => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: componentData.id,
		item: { componentData },
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	}))

	return <div ref={drag}>{children}</div>
}

export default DrapWrapper
