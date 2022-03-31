import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined
} from '@ant-design/icons'
import styles from './index.module.less'
import SideMenu from './SideMenu'
import { useSelector } from 'react-redux'
import { appSelector, setMenuStatus } from '@/store/slices/app'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const BaseLayout = (): JSX.Element => {
	const { menuCollapsed } = useSelector(appSelector)

	const changeMenuStatus = () => {
		const status = !menuCollapsed
		setMenuStatus(status)
	}

	return (
		<div className={styles.layout}>
			<Header className={styles.layout__header}>
				<div className='logo' />
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
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</div>
	)
}

export default BaseLayout
