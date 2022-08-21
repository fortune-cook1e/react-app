import { AnyOptions } from '@/types'
import { CSSProperties } from 'react'
export interface ComponentData {
	id: string
	name: string
	type: ComponentType
	style?: CSSProperties // 样式内容
	props?: AnyOptions // 其他属性内容
}

export enum ComponentType {
	Button = 0,
	Table = 1
}

export interface CanvasComponentData extends ComponentData {
	uniqueId: string // 拖拽时生成
}

export type DndDropResult = {
	componentData: ComponentData
}
