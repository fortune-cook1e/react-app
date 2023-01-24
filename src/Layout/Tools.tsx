import { BgColorsOutlined } from '@ant-design/icons'
import { Dropdown, message, Space } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Floatings from './Floatings'
import styles from './index.module.less'
import Logo from './Logo'

import useUserStore from '@/store/user'

import type { MenuProps } from 'antd'

export enum MenuKey {
  Setting,
  Logout
}

const Tools = (): JSX.Element => {
  const navigate = useNavigate()
  const { doUserLogout, user } = useUserStore()
  const [themeSettingVis, setThemeSettingVis] = useState<boolean>(false)

  const onMenuClick: MenuProps['onClick'] = async ({ key }) => {
    switch (key) {
      case 'setting':
        return
      case 'logout':
        await doUserLogout
        navigate('/login')
        message.success('注销成功')
    }
  }

  const items: MenuProps['items'] = [
    {
      key: 'setting',
      label: '设置'
    },
    {
      label: '注销',
      key: 'logout'
    }
  ]

  return (
    <div className={styles.tools}>
      <Floatings visible={themeSettingVis} onClose={() => setThemeSettingVis(false)} />

      <BgColorsOutlined
        onClick={() => setThemeSettingVis(true)}
        style={{ color: '#fff', fontSize: '20px', marginRight: '10px' }}
      />
      <Dropdown menu={{ items, onClick: onMenuClick }}>
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
