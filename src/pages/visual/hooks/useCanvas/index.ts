import { useRef } from 'react'
import { GlobalCanvas } from '../../instance/canvas'
import { CanvasComponentData } from '../../types'

export const useCanvas = (canvas?: CanvasComponentData): GlobalCanvas => {
	const canvasRef = useRef<any | null>(null)

	if (!canvasRef.current) {
		if (canvas) {
			canvasRef.current = canvas
		} else {
			const globalCanvas = new GlobalCanvas()
			canvasRef.current = globalCanvas
		}
	}

	return canvasRef.current
}
