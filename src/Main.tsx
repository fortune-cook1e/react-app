import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import App from './App'
import ReactErrorBoundary from './components/ErrorBoundary'

import './styles/base.less'

const root = createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <ReactErrorBoundary>
    <RecoilRoot>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </RecoilRoot>
  </ReactErrorBoundary>
)
