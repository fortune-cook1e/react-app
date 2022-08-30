import React, { useMemo } from 'react'
import { useEngineContext } from '../../../../context'
import { EngineComponentType, EngineComponentData, EngineCmpProps } from '../../../../types'
import Button from '../../components/Button'
import Employee from '../../components/Employee'
import Page from '../../components/Page'
import RemoveWrapper from '../../RemoveWrapper'

const ENGINE_COMPONENT_MAP: Record<EngineComponentType, (props: EngineCmpProps) => JSX.Element> = {
	[EngineComponentType.Page]: Page,
	[EngineComponentType.Button]: Button,
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

	const onSelectCmp = (event: React.MouseEvent<HTMLElement>): void => {
		event.stopPropagation()
		globalEngine.setSelectedCmp(canvasCmpData)
	}

	return (
		<div onClick={onSelectCmp}>
			<RemoveWrapper id={uniqueId}>{renderCanvasCmp}</RemoveWrapper>
		</div>
	)
}

export default EngineComponentMap
