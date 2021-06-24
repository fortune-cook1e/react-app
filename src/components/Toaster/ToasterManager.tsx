import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import Toaster from './index'
import {
	ToasterOptions,
	ToastMethods,
	CreateToasterOptions
} from './toaster.type'
// class ToasterManager {
// 	constructor() {}
// }

type Props = {
	bindFunc: (methods: ToastMethods) => void
}

const ToasterManager: React.FC<Props> = ({ bindFunc }) => {
	const [toasts, setToasts] = useState<ToasterOptions[]>([])
	const [count, setCount] = useState<number>(0)

	const removeToast = (id: number) => {
		console.log('removeToast', { id, toasts })
		const afterRemoveToasts = toasts.filter(
			(item: ToasterOptions) => item.id !== id
		)
		// console.log('after remove toast', { toasts, afterRemoveToasts })
		setToasts(afterRemoveToasts)
	}

	const createToast = (options: CreateToasterOptions): number => {
		setCount(count + 1)
		const id = count + 1
		console.log('createToast', { toasts, id })
		setToasts([
			...toasts,
			{
				...options,
				id,
				duration: 3000,
				onClose: () => removeToast(id)
			}
		])
		return id
	}

	const removeAll = () => {
		setToasts([])
	}

	useEffect(() => {
		bindFunc({
			notify: createToast,
			remove: removeToast,
			removeAll
		})
	}, [bindFunc, createToast, removeToast, removeAll])

	return (
		<AnimatePresence initial={false}>
			{/* {console.log('render', { toasts })} */}
			{toasts.map((item: ToasterOptions) => {
				return <Toaster key={item.id} {...item} />
			})}
		</AnimatePresence>
	)
}

export default ToasterManager
