import create from 'zustand'

interface ConfigState {
  theme: string
  changeTheme: (color: string) => void
}

const useConfigStore = create<ConfigState>(set => ({
  theme: '#1677ff',
  changeTheme: (c: string) =>
    set(state => ({
      ...state,
      theme: c
    }))
}))

export default useConfigStore
