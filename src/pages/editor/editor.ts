import { getUniqueId } from './../../utils/index'
import { CanvasComponentData, ComponentData } from './types'

class EditorComponent {
	componentList!: CanvasComponentData[]

	constructor() {
		this.componentList = []
	}

	add(c: ComponentData) {
		const uniqueId = getUniqueId()
		this.componentList.push({
			...c,
			uniqueId
		})
	}

	remove(c: CanvasComponentData) {
		return this.componentList.filter(item => item.uniqueId !== c.uniqueId)
	}

	clear() {
		this.componentList = []
	}
}

export default new EditorComponent()
