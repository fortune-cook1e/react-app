import { toaster } from './ToasterClass'
import { ToasterOptions, CreateToasterOptions } from './toaster.type'

type NoCloseOptions = Omit<ToasterOptions, 'onClose'>

const defaultSetting: NoCloseOptions = {
	message: 'hahahaha',
	icon: 'success',
	duration: 50000,
	position: 'bottom'
}

export const useToaster = (): any => {
	const toastFunction = (options: CreateToasterOptions = defaultSetting) => {
		return toaster.notify(options)
	}

	toastFunction.close = toaster.close
	toastFunction.closeAll = toaster.closeAll

	return toastFunction
}
