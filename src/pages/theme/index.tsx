import React from 'react'
import { Button } from 'antd'
import { ConfigProvider } from 'antd'
import styles from './index.module.less'

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

	const handleCss3Click = () => {
		document.documentElement.style.setProperty('--primary-color', '#f65c2d')
	}

	return (
		<div>
			<section>
				<h3>antd 主题测试</h3>
				this is theme pages
				<Button type='primary' onClick={handleClick}>
					click me
				</Button>
			</section>

			<section>
				<h3 className={styles.variable__text}>css3 原生颜色主题测试</h3>
				<Button onClick={handleCss3Click}>click me</Button>
			</section>
		</div>
	)
}

export default ThemePage
