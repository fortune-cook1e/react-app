import { useEffect } from 'react'

interface Props {
	target: any
	onIntersect: (entries: any, observer: any) => void
	threshold?: number
	rootMargin?: string
}

export const useIntersectionObserver = ({
	target,
	onIntersect,
	threshold = 0.5,
	rootMargin = '0px'
}: Props): void => {
	useEffect(() => {
		const observer = new IntersectionObserver(onIntersect, {
			rootMargin,
			threshold
		})
		const current = target.current
		observer.observe(current)
		return () => {
			observer.unobserve(current)
		}
	})
}
