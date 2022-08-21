import { useState, useCallback } from 'react'

type UseForfaceUpdateResponse = () => void

export const useForceUpdate = (): UseForfaceUpdateResponse => {
	const [, setValue] = useState<number>(0)

	const update = useCallback(() => {
		setValue(prev => prev + 1)
	}, [])

	return update
}
