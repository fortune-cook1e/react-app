export type Position = 'bottom' | 'top'

export type ToasterOptions = {
	id?: number
	message: string
	icon: 'success' | 'fail'
	position?: Position
	duration: number
	onClose: () => void
}

export type CreateToasterOptions = {
	message: string
	icon: 'success' | 'fail'
	position?: Position
	duration: number
}

export interface ToastMethods {
	notify: (options: CreateToasterOptions) => string | number
	remove: (id: number) => void
	removeAll: () => void
}
