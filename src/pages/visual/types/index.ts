import { AnyOptions } from '@/types'
import { CSSProperties } from 'react'

export enum EngineComponentType {
	Button = 0,
	Table = 1
}

export interface MaterialComponentData {
	id: string
	name: string
	type: EngineComponentType
	style?: CSSProperties // 样式内容
	props?: AnyOptions // 其他属性内容
}

export interface EngineComponentData extends MaterialComponentData {
	uniqueId: string // 拖拽时生成
}

export type DndDropResult = {
	componentData: MaterialComponentData
}
