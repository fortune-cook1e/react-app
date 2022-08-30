import React from 'react'
import { Form, Input, Select } from 'antd'
import { EngineCmpProps, PageConfig } from '@/pages/visual/types'
import { useEngineContext } from '@/pages/visual/context'
import { ColorResult, SketchPicker } from 'react-color'

const { Item } = Form

const COLOR_OPTIONS = [
	{
		label: '橙色',
		value: 'orange'
	},
	{
		label: '红色',
		value: 'red'
	}
]

const Page = (props: EngineCmpProps): JSX.Element => {
	const { globalEngine } = useEngineContext()
	const { values } = props

	const { title, style } = values as PageConfig
	const { style: pageConfigStyle } = globalEngine.getEnginePageConfig()

	const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const val = event.target.value
		globalEngine.updateSelectedCmpValues({
			title: val
		})
		globalEngine.updatePageConfigTitle(val)
	}

	const onBgColorChange = (color: ColorResult) => {
		globalEngine.updatePageConfigStyle({
			backgroundColor: color.hex
		})
	}

	return (
		<Form>
			<Item label='标题'>
				<Input placeholder='请输入标题' value={title} onChange={onTitleChange} />
			</Item>
			<Item label='背景色'>
				<SketchPicker color={pageConfigStyle?.backgroundColor} onChange={onBgColorChange} />
				{/* <Select
					value={pageConfigStyle?.backgroundColor}
					options={COLOR_OPTIONS}
					onChange={onBgColorChange}
				/> */}
			</Item>
		</Form>
	)
}

export default Page
