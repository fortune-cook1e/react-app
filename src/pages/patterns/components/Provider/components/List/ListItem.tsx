import { useThemeContext } from '../../Provider'

const ListItem = (): JSX.Element => {
  const { theme } = useThemeContext()
  return <li style={theme}>...</li>
}

export default ListItem
