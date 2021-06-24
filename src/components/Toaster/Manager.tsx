import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import Toaster from './index'
import {
	ToasterOptions,
	ToastMethods,
	CreateToasterOptions
} from './toaster.type'

type Props = {
	notify: (methods: ToastMethods) => void
}

type State = {
	toasts: ToasterOptions[]
}

class ToastManager extends React.Component<Props, State> {
	static counter = 0
	state: State = {
		toasts: []
	}

	constructor(props: Props) {
		super(props)

		const methods = {
			notify: this.createToast,
			remove: this.removeToast,
			removeAll: this.removeAll
		}

		props.notify(methods)
	}

	removeToast = (id: number) => {
		console.log('remove toast', this.state.toasts, id)
		const afterRemoveToasts = this.state.toasts.filter(
			(item: ToasterOptions) => item.id !== id
		)
		this.setState({
			toasts: afterRemoveToasts
		})
	}

	createToast = (options: CreateToasterOptions): number => {
		ToastManager.counter++
		const id = ToastManager.counter

		this.setState(prevState => {
			return {
				toasts: [
					...prevState.toasts,
					{
						...options,
						id,
						duration: 3000,
						onClose: () => this.removeToast(id)
					}
				]
			}
		})

		return id
	}

	removeAll = () => {
		this.setState({
			toasts: []
		})
	}

	render() {
		return (
			<AnimatePresence initial={false}>
				{/* {console.log('render', { toasts })} */}
				{this.state.toasts.map((item: ToasterOptions) => {
					return <Toaster key={item.id} {...item} />
				})}
			</AnimatePresence>
		)
	}
}

export default ToastManager
