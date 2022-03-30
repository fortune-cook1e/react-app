import React from 'react'
import { Layout, Menu, Breadcrumb, message } from 'antd'
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined
} from '@ant-design/icons'
import { MenuItem, ChildMenuItem } from '@/types'
import { useNavigate } from 'react-router-dom'
import { menu } from '@/routes/menu'

const { SubMenu, Item } = Menu
const { Header, Content, Sider } = Layout

const SideMenu = (): JSX.Element => {
	const navigate = useNavigate()

	const handleJumpPage = (url: string) => {
		if (!url) return message.error('暂无 url  请补充')
		navigate(url)
	}

	const renderMenuWithChildren = (menu: ChildMenuItem) => {}

	const renderMenuWithoutChildren = (menu: MenuItem) => {
		return <Item key={menu.path}>{menu.title}</Item>
	}

	const renderMenu = (menu: MenuItem[]) => {
		return menu.map(m => {
			const { children = [] } = m
			if (!children || !children.length) return renderMenuWithoutChildren(m)
		})
	}

	return (
		<Menu
			mode='inline'
			// defaultSelectedKeys={['1']}
			// defaultOpenKeys={['sub1']}
			style={{ height: '100%', borderRight: 0 }}
		>
			{renderMenu(menu)}
		</Menu>
	)
}

export default SideMenu
