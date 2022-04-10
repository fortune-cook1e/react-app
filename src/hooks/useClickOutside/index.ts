import { useEffect } from 'react'

const useClickOutside = (eleRef: any, callback: (e: Event) => void): void => {
	useEffect(() => {
		const handleClickOutside = (e: Event) => {
			if (!eleRef.current.contains(e.target) && callback) {
				callback(e)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])
}

export default useClickOutside
