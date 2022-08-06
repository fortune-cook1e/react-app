import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './index.module.less'
import SideMenu from './SideMenu'
import Logo from './Logo'
import Tools from './Tools'
import Floatings from './Floatings'
import { AnimatePresence } from 'framer-motion'

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

				<Floatings />

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
