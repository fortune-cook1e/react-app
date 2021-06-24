import React from 'react'
import ToastManager from './Manager'
import { render } from 'react-dom'

import { ToastMethods, CreateToasterOptions } from './toaster.type'

const portalId = 'toaster-portal'

class Toaster {
	private createToast?: ToastMethods['notify']
	private removeToast?: ToastMethods['remove']
	private removeAll?: ToastMethods['removeAll']

	constructor() {
		let portal: HTMLElement
		const existingPortal = document.getElementById(portalId)
		if (existingPortal) {
			portal = existingPortal
		} else {
			const div = document.createElement('div')
			div.id = portalId
			document.body?.appendChild(div)
			portal = div
		}
		render(<ToastManager notify={this.bindFunc} />, portal)
	}

	// FIXBUG: 这里一定要是箭头函数 不然 this 会变成undefined
	private bindFunc = (methods: ToastMethods) => {
		this.createToast = methods.notify
		this.removeToast = methods.remove
		this.removeAll = methods.removeAll
	}

	notify = (options: CreateToasterOptions) => {
		return this.createToast?.(options)
	}

	close = (id: number) => {
		this.removeToast?.(id)
	}

	closeAll = () => {
		console.log('class remove alll')
		this.removeAll?.()
	}
}

export const toaster = new Toaster()
