import React from 'react'
import styles from './index.module.less'
import { Dropdown, Menu, Space } from 'antd'
import Logo from './Logo'
import { useSelector } from 'react-redux'
import { userSelector } from '@/store/slices/user'

export enum MenuKey {
	Setting,
	Logout
}

const Tools = (): JSX.Element => {
	const { user } = useSelector(userSelector)

	// TODO: 实现注销

	const menu = (
		<Menu
			items={[
				{
					label: '设置',
					key: MenuKey.Setting
				},
				{
					label: '注销',
					key: MenuKey.Logout
				}
			]}
		/>
	)

	return (
		<div className={styles.tools}>
			<Dropdown overlay={menu}>
				<div className={styles.tools__menu}>
					<Space>
						<Logo />
						<span className={styles.username}>{user?.username}</span>
					</Space>
				</div>
			</Dropdown>
		</div>
	)
}

export default Tools
