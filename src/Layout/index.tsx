import { Layout } from 'antd'
import { AnimatePresence } from 'framer-motion'
import { Outlet } from 'react-router-dom'

import styles from './index.module.less'
import Logo from './Logo'
import SideMenu from './SideMenu'
import Tools from './Tools'

const { Header, Content } = Layout

const BaseLayout = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header className={styles.layout__header}>
        <Logo />
        <Tools />
      </Header>

      <Layout className={styles.layout__main}>
        <SideMenu />

        <Layout style={{ padding: '24px' }}>
          <Content
            className='site-layout-background'
            style={{
              minHeight: 280
            }}
          >
            {/* 子路由组件渲染地方 */}
            <AnimatePresence>
              <Outlet />
            </AnimatePresence>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default BaseLayout
