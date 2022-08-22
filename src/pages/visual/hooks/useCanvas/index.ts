import { useRef } from 'react'
import { GlobalCanvas } from '../../instance/canvas'
import { CanvasComponentData } from '../../types'

export const useCanvas = (canvasData?: CanvasComponentData[]): GlobalCanvas => {
	const canvasRef = useRef<any | null>(null)

	if (!canvasRef.current) {
		if (canvasData) {
			const globalCanvas = new GlobalCanvas(canvasData)
			canvasRef.current = globalCanvas
		} else {
			const globalCanvas = new GlobalCanvas()
			canvasRef.current = globalCanvas
		}
	}

	return canvasRef.current
}
