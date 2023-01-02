import { Button } from 'antd'
import { FC } from 'react'

import { useThemeContext } from '../../Provider'

const Toggle: FC = () => {
  const { toggleTheme } = useThemeContext()
  return <Button onClick={toggleTheme}>toggle the theme</Button>
}

export default Toggle
