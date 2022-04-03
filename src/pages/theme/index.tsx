import React from 'react'
import { Button } from 'antd'
import { ConfigProvider } from 'antd'

const COLORS = ['#25b864', '#f65c2d', '#faad14']
let INDEX = 0

const ThemePage = (): JSX.Element => {
	const handleClick = () => {
		INDEX = INDEX === COLORS.length - 1 ? 0 : INDEX
		const color = COLORS[INDEX++]

		ConfigProvider.config({
			theme: {
				primaryColor: color
			}
		})
	}

	return (
		<div>
			this is theme pages
			<Button type='primary' onClick={handleClick}>
				click me
			</Button>
		</div>
	)
}

export default ThemePage
