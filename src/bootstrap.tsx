import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import store from '@/store'
import App from './App'
import './styles/base.less'

render(
	<ConfigProvider locale={zhCN}>
		<Provider store={store}>
			<App />
		</Provider>
	</ConfigProvider>,

	document.getElementById('app')
)
