import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	DesktopOutlined
} from '@ant-design/icons'
import { MenuItem, ChildMenuItem } from '@/types'
import { Link, useLocation } from 'react-router-dom'
import { menu } from '@/routes/menu'
import styles from './index.module.less'
import { useSelector } from 'react-redux'
import { appSelector, setMenuStatus } from '@/store/slices/app'
import { useAppDispatch } from '@/hooks/redux'

const { SubMenu, Item } = Menu
const { Sider } = Layout

interface MenuKeys {
	selected: string[]
	open: string[]
}

// const findCurrentMenuItem = (pathname: string, menu: MenuItem[]) => {
// 	if (!menu.length) return
// 	let currentFatherMenu = null
// 	const currentChildMenu = null
// 	menu.forEach(m => {
// 		const { path, name, children = [] } = m
// 		if (path === pathname) {
// 			currentFatherMenu = m
// 		}
// 	})
// }

const SideMenu = (): JSX.Element => {
	const { menuCollapsed } = useSelector(appSelector)
	const dispatch = useAppDispatch()
	const location = useLocation()

	const [menuKeys, setMenuKeys] = useState<MenuKeys>(() => {
		const { pathname } = location

		return {
			selected: ['theme'],
			open: ['study']
		}
	})

	console.log(menuKeys)

	const changeMenuStatus = () => {
		const status = !menuCollapsed
		dispatch(setMenuStatus(status))
	}

	const renderMenuWithChildren = (menu: ChildMenuItem) => {
		const { title, path, children, name } = menu
		if (!children || !children.length) {
			return (
				<Item key={name}>
					<Link to={path}>{title}</Link>
				</Item>
			)
		}
		return (
			<SubMenu key={name} title={title} icon={<DesktopOutlined />}>
				{children.map(c => {
					return renderMenuWithChildren(c)
				})}
			</SubMenu>
		)
	}

	const renderMenuWithoutChildren = (menu: MenuItem) => {
		return (
			<Item key={menu.name} icon={<DesktopOutlined />}>
				<Link to={menu.path as string}>{menu.title}</Link>
			</Item>
		)
	}

	const renderMenu = (menu: MenuItem[]) => {
		return menu.map(m => {
			const { children = [], title, name } = m
			if (!children || !children.length) return renderMenuWithoutChildren(m)
			return (
				<SubMenu key={name} title={title} icon={<DesktopOutlined />}>
					{children.map(renderMenuWithChildren)}
				</SubMenu>
			)
		})
	}

	return (
		<div className={styles.layout__sider}>
			<Sider
				width={200}
				className={styles.layout__menu}
				trigger={null}
				collapsible
				collapsed={menuCollapsed}
			>
				<Menu
					mode='inline'
					theme='light'
					style={{ height: '100%' }}
					defaultOpenKeys={menuKeys.open}
					defaultSelectedKeys={menuKeys.selected}
				>
					{renderMenu(menu)}
				</Menu>
			</Sider>

			<div className={styles.menu__button}>
				{menuCollapsed ? (
					<MenuUnfoldOutlined onClick={changeMenuStatus} />
				) : (
					<MenuFoldOutlined onClick={changeMenuStatus} />
				)}
			</div>
		</div>
	)
}

export default SideMenu
