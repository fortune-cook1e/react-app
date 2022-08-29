import { ButtonProps } from 'antd'

// 按钮组件Props
export type EngineButtonProps = {
	text: string
} & ButtonProps

// 员工组件Props
export type EngineEmployeeProps = {
	page: number
	pageSize: number
	keyword?: string
}
