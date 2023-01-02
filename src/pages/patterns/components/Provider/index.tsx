import { FC } from 'react'

import List from './components/List'
import Toggle from './components/Toggle'
import ThemeProvider from './Provider'

const ProviderPattern: FC = () => {
  return (
    <ThemeProvider>
      <Toggle />
      <List />
    </ThemeProvider>
  )
}

export default ProviderPattern
