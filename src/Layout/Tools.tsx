import { Dropdown, Menu, message, Space } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.less'
import Logo from './Logo'

import { userSelector, doLogout } from '@/store/slices/user'

import type { MenuProps } from 'antd'

export enum MenuKey {
  Setting,
  Logout
}

const Tools = (): JSX.Element => {
  const dispatch = useDispatch()
  const { user } = useSelector(userSelector)
  const navigate = useNavigate()

  const onMenuClick: MenuProps['onClick'] = async ({ key }) => {
    switch (key) {
      case 'setting':
        return
      case 'logout':
        await dispatch(doLogout())
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
