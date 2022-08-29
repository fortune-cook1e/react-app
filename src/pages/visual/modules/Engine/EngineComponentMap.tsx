import React, { useMemo } from 'react'
import { useEngineContext } from '../../context'
import { EngineComponentType, EngineComponentData, EngineCmpProps } from '../../types'
import Button from '../Engine/components/Button'
import Table from '../Engine/components/Table'
import Employee from './components/Employee'

const ENGINE_COMPONENT_MAP: Record<EngineComponentType, (props: EngineCmpProps) => JSX.Element> = {
	[EngineComponentType.Button]: Button,
	[EngineComponentType.Table]: Table,
	[EngineComponentType.Employee]: Employee
}

interface Props {
	canvasCmpData: EngineComponentData
}

const EngineComponentMap = ({ canvasCmpData }: Props): JSX.Element => {
	const { uniqueId, cmpType } = canvasCmpData

	const { globalEngine } = useEngineContext()

	const renderCanvasCmp = useMemo(() => {
		const Cmp = ENGINE_COMPONENT_MAP[cmpType]
		return Cmp ? <Cmp {...canvasCmpData} /> : null
	}, [canvasCmpData])

	const onSelectCmp = () => {
		globalEngine.setSelectedCmp(uniqueId)
	}

	return <div onClick={onSelectCmp}>{renderCanvasCmp}</div>
}

export default EngineComponentMap
