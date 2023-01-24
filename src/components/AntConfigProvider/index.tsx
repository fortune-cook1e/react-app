import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { PropsWithChildren } from 'react'

import useConfigStore from '@/store/config'

const AntConfigProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const { theme } = useConfigStore()

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: theme
        }
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default AntConfigProvider
