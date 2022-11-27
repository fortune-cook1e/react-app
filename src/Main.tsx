import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import React from 'react'
import { render } from 'react-dom'
import { RecoilRoot } from 'recoil'

import App from './App'

import './styles/base.less'

render(
  <RecoilRoot>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </RecoilRoot>,
  document.getElementById('app')
)
