import React, { useMemo } from 'react'
import { useEngineContext } from '../../context'
import { EngineComponentType, EngineCmpProps } from '../../types'
import Button from './components/Button'

const ATTR_COMPONENT_MAP: Record<EngineComponentType, (props: EngineCmpProps) => JSX.Element> = {
	[EngineComponentType.Button]: Button
}

const AttrComponentMap = (): JSX.Element => {
	const { globalEngine } = useEngineContext()

	const renderAttr = () => {
		const selectedCmp = globalEngine.getSelectedCmp()
		if (!selectedCmp) return
		const { cmpType } = selectedCmp
		const Cmp = ATTR_COMPONENT_MAP[cmpType]
		return <Cmp {...selectedCmp} />
	}

	return <>{renderAttr()}</>
}

export default AttrComponentMap
