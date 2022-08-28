import { CSSProperties } from 'react'
import { EngineButtonProps } from './attr'

export enum EngineComponentType {
	Button = 0,
	Table = 1
}

export type EngineCmpValuesType = EngineButtonProps
export interface MaterialComponentData {
	id: string
	name: string
	cmpType: EngineComponentType
	style?: CSSProperties // 样式内容
	values: EngineCmpValuesType
}

export interface EngineComponentData extends MaterialComponentData {
	uniqueId: string // 拖拽时生成
}

export type DndDropResult = {
	componentData: MaterialComponentData
}

export type EngineCmpProps = EngineComponentData
