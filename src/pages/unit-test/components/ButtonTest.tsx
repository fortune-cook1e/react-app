import { Button, ButtonProps } from 'antd'
import { FC } from 'react'

const ButtonTest: FC<ButtonProps> = ({ children, ...rest }) => <Button {...rest}>{children}</Button>

export default ButtonTest
