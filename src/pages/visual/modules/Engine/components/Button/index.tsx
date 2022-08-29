import React from 'react'
import { Button as AntdButton } from 'antd'
import { EngineCmpProps } from '@/pages/visual/types'
import { EngineButtonProps } from '@/pages/visual/types/attr'

const Button = (props: EngineCmpProps): JSX.Element => {
	const { values, style } = props
	const { text = '', type, disabled, onClick } = values as EngineButtonProps

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
