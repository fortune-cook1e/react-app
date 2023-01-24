import dayjs from 'dayjs'
import { createRoot } from 'react-dom/client'

import App from './App'
import ReactErrorBoundary from './components/ErrorBoundary'

import './styles/base.less'
dayjs.locale('zh-cn')

const ROOT_ELEMENT = document.getElementById('app') as HTMLElement

const root = createRoot(ROOT_ELEMENT)

root.render(
  <ReactErrorBoundary>
    <App />
  </ReactErrorBoundary>
)
