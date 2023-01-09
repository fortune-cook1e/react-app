import { FC } from 'react'

function withStyles(Component: FC) {
  return (props: any) => {
    const style = { padding: '0.2rem', margin: '1rem' }
    return <Component style={style} {...props} />
  }
}

const Button: FC = () => <button>Click me!</button>
const Text: FC = () => <p>Hello World!</p>

const StyledButton = withStyles(Button)
const StyledText = withStyles(Text)
