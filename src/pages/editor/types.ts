export interface ComponentData {
	id: string
	componentId: string
	name: string
	component?: any
}

export interface DropResponse {
	componentData: ComponentData
}

export interface CanvasComponentData extends ComponentData {
	uniqueId: string
}
