import React, { useMemo } from 'react'
import { useEngineContext } from '../../context'
import { EngineComponentType, EngineComponentData, EngineCmpProps } from '../../types'
import Button from '../Engine/components/Button'
import Table from '../Engine/components/Table'

const ENGINE_COMPONENT_MAP: Record<EngineComponentType, (props: EngineCmpProps) => JSX.Element> = {
	[EngineComponentType.Button]: Button,
	[EngineComponentType.Table]: Table
}

interface Props {
	canvasCmpData: EngineComponentData
}

const EngineComponentMap = ({ canvasCmpData }: Props): JSX.Element => {
	const { uniqueId, cmpType } = canvasCmpData

	const { globalEngine } = useEngineContext()

	const renderCanvasCmp = useMemo(() => {
		const Cmp = ENGINE_COMPONENT_MAP[cmpType]
		return <Cmp {...canvasCmpData} />
	}, [canvasCmpData])

	const onSelectCmp = () => {
		console.log('select cmp...')
		globalEngine.setSelectedCmp(uniqueId)
	}

	return <div onClick={onSelectCmp}>{renderCanvasCmp}</div>
}

export default EngineComponentMap
