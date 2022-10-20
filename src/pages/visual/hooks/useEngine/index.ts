import { useRef } from 'react'

import { Engine } from '../../instance/engine'

export const useEngine = (canvas?: Engine): Engine => {
  const engineRef = useRef<any | null>(null)

  if (!engineRef.current) {
    if (canvas) {
      engineRef.current = canvas
    } else {
      const globalCanvas = new Engine()
      engineRef.current = globalCanvas
    }
  }

  return engineRef.current
}
