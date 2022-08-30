import React, { useEffect, useState } from 'react'
import { Form, Input, Select } from 'antd'
import { useEngineContext } from '@/pages/visual/context'
import { EngineCmpProps } from '../../../../types'
import { EngineEmployeeProps } from '@/pages/visual/types/attr'

const { Item } = Form

const Employee = (props: EngineCmpProps): JSX.Element => {
	const { globalEngine } = useEngineContext()
	const { values } = props

	const { keyword } = values as EngineEmployeeProps

	const onKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const val = event.target.value
		globalEngine.updateSelectedCmpValues({
			keyword: val
		})
	}

	return (
		<Form>
			<Item label='关键词'>
				<Input placeholder='请输入查询关键字' value={keyword} onChange={onKeywordChange} />
			</Item>
		</Form>
	)
}

export default Employee
