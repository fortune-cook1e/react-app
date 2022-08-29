import React, { useMemo } from 'react'
import { useEngineContext } from '../../context'
import { EngineComponentType, EngineCmpProps } from '../../types'
import Button from './components/Button'
import Employee from './components/Employee'

const ATTR_COMPONENT_MAP: Record<EngineComponentType, (props: EngineCmpProps) => JSX.Element> = {
	[EngineComponentType.Button]: Button,
	[EngineComponentType.Employee]: Employee
}

const AttrComponentMap = (): JSX.Element => {
	const { globalEngine } = useEngineContext()

	const renderAttr = () => {
		const selectedCmp = globalEngine.getSelectedCmp()
		if (!selectedCmp) return
		const { cmpType } = selectedCmp
		const Cmp = ATTR_COMPONENT_MAP[cmpType]
		return Cmp ? <Cmp {...selectedCmp} /> : null
	}

	return <>{renderAttr()}</>
}

export default AttrComponentMap
