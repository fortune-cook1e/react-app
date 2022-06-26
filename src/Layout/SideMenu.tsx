import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, DesktopOutlined } from '@ant-design/icons'
import { MenuItem, ChildMenuItem } from '@/types'
import { Link } from 'react-router-dom'
import { menu } from '@/routes/menu'
import styles from './index.module.less'
import { useSelector } from 'react-redux'
import { appSelector, setMenuStatus } from '@/store/slices/app'
import { useAppDispatch, useRouter } from '@/hooks'
import { getItemInChildrenMap } from '@/utils'

const { SubMenu, Item } = Menu
const { Sider } = Layout

interface MenuKeys {
	selected: string[]
	open: string[]
}

const SideMenu = (): JSX.Element => {
	const { menuCollapsed } = useSelector(appSelector)
	const dispatch = useAppDispatch()
	const { location } = useRouter()

	const [menuKeys] = useState<MenuKeys>(() => {
		const { pathname } = location

		const [parentItem, childItem] = getItemInChildrenMap<MenuItem | ChildMenuItem>(
			menu,
			item => item?.path === pathname
		).reverse()

		return {
			selected: childItem?.key ? [childItem.key] : ['dashboard'],
			open: []
		}
	})

	const changeMenuStatus = () => {
		const status = !menuCollapsed
		dispatch(setMenuStatus(status))
	}

	const renderMenuWithChildren = (menu: ChildMenuItem) => {
		const { title, path, children, key } = menu
		if (!children || !children.length) {
			return (
				<Item key={key}>
					<Link to={path}>{title}</Link>
				</Item>
			)
		}
		return (
			<SubMenu key={key} title={title} icon={<DesktopOutlined />}>
				{children.map(c => {
					return renderMenuWithChildren(c)
				})}
			</SubMenu>
		)
	}

	const renderMenuWithoutChildren = (menu: MenuItem) => {
		return (
			<Item key={menu.key} icon={<DesktopOutlined />}>
				<Link to={menu.path as string}>{menu.title}</Link>
			</Item>
		)
	}

	const renderMenu = (menu: MenuItem[]) => {
		return menu.map(m => {
			const { children = [], title, key } = m
			if (!children || !children.length) return renderMenuWithoutChildren(m)
			return (
				<SubMenu key={key} title={title} icon={<DesktopOutlined />}>
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

			<div className={styles.menu__button} onClick={changeMenuStatus}>
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
