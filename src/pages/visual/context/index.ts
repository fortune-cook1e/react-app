import { EventEmitter } from '@/hooks/useEventEmitter'
import { createContext, useContext } from 'react'
import { Engine } from '../instance/engine'

export type Mode = 'add' | 'view' | 'edit'

interface EngineContextValue {
	globalEngine: Engine
	eventEmitter: EventEmitter
	mode: Mode
	editingId?: string
}

export const EngineContext = createContext<EngineContextValue | null>(null)

export const useEngineContext = (): EngineContextValue => {
	const context = useContext(EngineContext)
	if (!context) {
		throw new Error('Need Provider')
	}
	return context
}
