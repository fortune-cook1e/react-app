import React, { useMemo } from 'react'
import { useCanvasContext } from '../../context'
import { EngineComponentType, EngineComponentData } from '../../types'
import Button from '../Engine/components/Button'
import Table from '../Engine/components/Table'

const CANVAS_COMPONENT_MAP = {
	[EngineComponentType.Button]: Button,
	[EngineComponentType.Table]: Table
}

interface Props {
	canvasCmpData: EngineComponentData
}

const EngineComponentMap = ({ canvasCmpData }: Props): JSX.Element => {
	const { uniqueId, type } = canvasCmpData

	const { globalCanvas } = useCanvasContext()

	const renderCanvasCmp = useMemo(() => {
		const Cmp = CANVAS_COMPONENT_MAP[type] as any
		return <Cmp {...canvasCmpData} />
	}, [canvasCmpData])

	const onSelectCmp = () => {
		globalCanvas.setSelectedCmp(uniqueId)
	}

	return <div onClick={onSelectCmp}>{renderCanvasCmp}</div>
}

export default EngineComponentMap
