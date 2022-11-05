import { BgColorsOutlined } from '@ant-design/icons'
import { Dropdown, Menu, message, Space } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Floatings from './Floatings'
import styles from './index.module.less'
import Logo from './Logo'

import { RootState, store } from '@/store'
import { userSelector, setUser } from '@/store/slices/user'

import type { MenuProps } from 'antd'

export enum MenuKey {
  Setting,
  Logout
}

const Tools = (): JSX.Element => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()
  const [themeSettingVis, setThemeSettingVis] = useState<boolean>(false)

  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    setUser(null)
    switch (key) {
      case 'setting':
        return
      case 'logout':
        // await dispatch(doLogout())
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
      <Floatings visible={themeSettingVis} onClose={() => setThemeSettingVis(false)} />

      <BgColorsOutlined
        onClick={() => setThemeSettingVis(true)}
        style={{ color: '#fff', fontSize: '20px', marginRight: '10px' }}
      />
      <Dropdown overlay={menu}>
        <div className={styles.tools__menu}>
          <Space size={8}>
            <Logo />
            <span className={styles.username}>{user?.username}</span>
          </Space>
        </div>
      </Dropdown>
    </div>
  )
}

export default Tools
