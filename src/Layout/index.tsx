import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined
} from '@ant-design/icons'
import styles from './index.module.less'
import SideMenu from './SideMenu'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const BaseLayout = (): JSX.Element => {
	return (
		<div className={styles.layout}>
			<Header className={styles.layout__header}>
				<div className='logo' />
			</Header>

			<Layout className={styles.layout__main}>
				<Sider width={200} className={styles.layout__sider}>
					<SideMenu />
				</Sider>

				<Layout style={{ padding: '24px' }}>
					<Content
						className='site-layout-background'
						style={{
							minHeight: 280
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</div>
	)
}

export default BaseLayout
