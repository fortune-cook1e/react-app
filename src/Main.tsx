import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { render } from 'react-dom'
import { RecoilRoot } from 'recoil'

import App from './App'
import ReactErrorBoundary from './components/ErrorBoundary'

import './styles/base.less'

render(
  <ReactErrorBoundary>
    <RecoilRoot>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </RecoilRoot>
  </ReactErrorBoundary>,

  document.getElementById('app')
)
