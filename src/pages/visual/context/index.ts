import { CanvasComponentData } from './../../editor/types'
import { createContext, useContext } from 'react'
import { GlobalCanvas } from '../instance/canvas'

interface CanvasContextValue {
	globalCanvas: GlobalCanvas
}

export const CanvasContext = createContext<CanvasContextValue | null>(null)

export const useCanvasContext = (): CanvasContextValue => {
	const context = useContext(CanvasContext)
	if (!context) {
		throw new Error('Need Provider')
	}
	return context
}
