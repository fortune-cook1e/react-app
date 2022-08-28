import { ButtonType } from 'antd/lib/button'

export type TypeOption = {
	label: string
	value: ButtonType
}
export const TYPE_OPTIONS: TypeOption[] = [
	{
		label: '主按钮',
		value: 'primary'
	},
	{
		label: '链接按钮',
		value: 'link'
	},
	{
		label: '幽灵按钮',
		value: 'ghost'
	},
	{
		label: '默认',
		value: 'default'
	}
]
