import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'

import './styles/base.less'
const queryClient = new QueryClient()

render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<App />
		</Provider>
	</QueryClientProvider>,

	document.getElementById('app')
)
