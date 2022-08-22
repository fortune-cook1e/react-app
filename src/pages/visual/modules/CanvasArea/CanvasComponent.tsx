import React, { useMemo } from 'react'
import { CanvasComponentData, ComponentType } from '../../types'
import Button from '../../components/Button'
import Table from '../../components/Table'

const CANVAS_COMPONENT_MAP = {
	[ComponentType.Button]: Button,
	[ComponentType.Table]: Table
}

interface Props {
	canvasCmpData: CanvasComponentData
}

const CanvasComponent = ({ canvasCmpData }: Props): JSX.Element => {
	const { uniqueId, type } = canvasCmpData

	const renderCanvasCmp = useMemo(() => {
		const Cmp = CANVAS_COMPONENT_MAP[type] as any
		return <Cmp {...canvasCmpData} />
	}, [canvasCmpData])

	return <>{renderCanvasCmp}</>
}

export default CanvasComponent
