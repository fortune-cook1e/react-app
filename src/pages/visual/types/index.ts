import { CSSProperties } from 'react'
import { EngineButtonProps, EngineEmployeeProps } from './attr'

export interface PageConfig {
	style?: CSSProperties
	title?: string
}

export enum EngineComponentType {
	Page = 0,
	Button = 1,
	Employee = 2
}

export type EngineCmpValuesType = EngineButtonProps | EngineEmployeeProps | PageConfig
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
