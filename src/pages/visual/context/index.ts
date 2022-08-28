import { createContext, useContext } from 'react'
import { Engine } from '../instance/engine'

interface EngineContextValue {
	globalEngine: Engine
}

export const EngineContext = createContext<EngineContextValue | null>(null)

export const useEngineContext = (): EngineContextValue => {
	const context = useContext(EngineContext)
	if (!context) {
		throw new Error('Need Provider')
	}
	return context
}
