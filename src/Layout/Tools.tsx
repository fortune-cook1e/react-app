import React from 'react'
import styles from './index.module.less'
import { Dropdown, Menu, message, Space } from 'antd'
import type { MenuProps } from 'antd'
import Logo from './Logo'
import { useSelector } from 'react-redux'
import { userSelector } from '@/store/slices/user'
import { useAuth } from '@/hooks'
import { useNavigate } from 'react-router-dom'

export enum MenuKey {
	Setting,
	Logout
}

const Tools = (): JSX.Element => {
	const { user } = useSelector(userSelector)
	const { logout } = useAuth()
	const navigate = useNavigate()

	const onMenuClick: MenuProps['onClick'] = async ({ key }) => {
		switch (key) {
			case 'setting':
				return
			case 'logout':
				await logout()
				navigate('/login')
				message.success('注销成功')
		}
	}

	const menu = (
		<Menu
			onClick={onMenuClick}
			items={[
				{
					label: '设置',
					key: 'setting'
				},
				{
					label: '注销',
					key: 'logout'
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
