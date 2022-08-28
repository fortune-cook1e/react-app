import React from 'react'
import { Button as AntdButton } from 'antd'
import { EngineCmpProps } from '@/pages/visual/types'

const Button = (props: EngineCmpProps): JSX.Element => {
	const { values, style } = props
	const { text = '', type, disabled } = values
	return (
		<AntdButton style={style} type={type} disabled={disabled}>
			{text}
		</AntdButton>
	)
}

export default Button
