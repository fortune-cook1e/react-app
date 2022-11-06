import { BgColorsOutlined } from '@ant-design/icons'
import { Dropdown, Menu, message, Space } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import Floatings from './Floatings'
import styles from './index.module.less'
import Logo from './Logo'

import { logout } from '@/apis'
import { userState } from '@/recoil/atoms'

import type { MenuProps } from 'antd'

export enum MenuKey {
  Setting,
  Logout
}

const Tools = (): JSX.Element => {
  const navigate = useNavigate()
  const [user, setUser] = useRecoilState(userState)
  const [themeSettingVis, setThemeSettingVis] = useState<boolean>(false)

  const onMenuClick: MenuProps['onClick'] = async ({ key }) => {
    switch (key) {
      case 'setting':
        return
      case 'logout':
        await logout()
        setUser(null)
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
