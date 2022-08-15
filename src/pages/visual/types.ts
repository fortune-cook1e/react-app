export interface ComponentData {
	id: string
	componentId: string
	name: string
	component?: any
}

export interface CanvasComponentData extends ComponentData {
	uniqueId: string // 拖拽时生成
}

export type DndDropResult = {
	componentData: ComponentData
}
