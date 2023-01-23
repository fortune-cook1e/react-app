import { MenuUnfoldOutlined, MenuFoldOutlined, DesktopOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.less'

import { useRouter } from '@/hooks'
import { menu } from '@/routes/menu'
import { MenuItem, ChildMenuItem } from '@/types'
import { getItemInChildrenMap } from '@/utils'

import type { MenuProps } from 'antd'
type AntMenuItem = Required<MenuProps>['items'][number]

const { Sider } = Layout

interface MenuKeys {
  selected: string[]
  open: string[]
}

const SideMenu = (): JSX.Element => {
  const {
    location: { pathname }
  } = useRouter()

  const [menuKeys] = useState<MenuKeys>(() => {
    const [parentItem, childItem] = getItemInChildrenMap<MenuItem | ChildMenuItem>(
      menu,
      item => item?.path === pathname || item.key === pathname
    ).reverse()

    return {
      selected: childItem?.path ? [childItem.path] : ['/dashboard'],
      open: [parentItem.path || parentItem.key]
    }
  })

  const [open, setOpen] = useState<boolean>(false)

  const changeMenuStatus = () => {
    setOpen(!open)
  }

  const getMenuItems = (menu: MenuItem[]): AntMenuItem[] => {
    if (!menu) return []
    return menu.map(m => {
      const { title, path = '', key, children = [] } = m
      const hasChildren = !!children.length
      return {
        label: hasChildren ? title : <Link to={path}>{title}</Link>,
        key: path || key,
        icon: hasChildren ? <DesktopOutlined /> : null,
        children: hasChildren ? getMenuItems(children) : null
      }
    })
  }

  const menuItems = getMenuItems(menu)

  return (
    <div className={styles.layout__sider}>
      <Sider
        width={200}
        className={styles.layout__menu}
        trigger={null}
        collapsible
        collapsed={open}
      >
        <Menu
          defaultSelectedKeys={menuKeys.selected}
          defaultOpenKeys={menuKeys.open}
          mode='inline'
          theme='light'
          style={{ height: '100%' }}
          items={menuItems}
        />
      </Sider>

      <div className={styles.menu__button} onClick={changeMenuStatus}>
        {open ? (
          <MenuUnfoldOutlined onClick={changeMenuStatus} />
        ) : (
          <MenuFoldOutlined onClick={changeMenuStatus} />
        )}
      </div>
    </div>
  )
}

export default SideMenu
