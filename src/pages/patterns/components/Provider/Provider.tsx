import { PropsWithChildren, useContext, createContext, FC, useState, CSSProperties } from 'react'

export type Theme = 'light' | 'dark'

export const themes: Record<Theme, CSSProperties> = {
  light: {
    background: '#fff',
    color: '#000'
  },
  dark: {
    background: '#171717',
    color: '#fff'
  }
}

export type ProviderContext = {
  theme: CSSProperties
  toggleTheme: () => void
}

export const ThemeContext = createContext<ProviderContext | undefined>(undefined)

export function useThemeContext(): ProviderContext {
  const theme = useContext(ThemeContext)
  if (!theme) {
    throw new Error('useThemeContext must be used within ThemeProvider')
  }
  return theme
}

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme
  }

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
