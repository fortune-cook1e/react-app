import { useRef, useEffect } from 'react'

type Subscription = (val: any) => any

export class EventEmitter {
	private subscriptions = new Map<string, Subscription[]>()

	emit(key: string, val?: any): void {
		if (!this.subscriptions.has(key)) return
		const subs = this.subscriptions.get(key) || []
		for (const sub of subs) {
			sub(val)
		}
	}

	useSubscription(key: string, callback: Subscription): void {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const callbackRef = useRef<Subscription>()
		callbackRef.current = callback
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (!this.subscriptions.get(key)) {
				const subs = []
				subs.push(callback)
				this.subscriptions.set(key, subs)
			} else {
				this.subscriptions.get(key)?.push(callback)
			}
			return () => {
				this.subscriptions.delete(key)
			}
		}, [])
	}
}

export default function useEventEmitter(): EventEmitter {
	const ref = useRef<EventEmitter>()
	if (!ref.current) {
		ref.current = new EventEmitter()
	}
	return ref.current
}
