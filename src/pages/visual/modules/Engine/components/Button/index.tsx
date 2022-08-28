import React from 'react'
import { Button as AntdButton } from 'antd'
import { EngineCmpProps } from '@/pages/visual/types'

const Button = (props: EngineCmpProps): JSX.Element => {
	const { values, style } = props
	const { text = '', type, disabled, onClick } = values

	const onBtnClick = (event: MouseEvent) => {
		event.stopPropagation()
		onClick?.(event as any)
	}

	return (
		<AntdButton style={style} type={type} disabled={disabled} onClick={(e: any) => onBtnClick(e)}>
			{text}
		</AntdButton>
	)
}

export default Button
