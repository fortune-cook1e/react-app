import {
  createContext,
  FC,
  useState,
  PropsWithChildren,
  useContext,
  Children,
  cloneElement
} from 'react'

import styles from '../../index.module.less'
import Icon from '../Icon'

interface IFlyOutContext {
  open: boolean
  toggle: (b: boolean) => void
}

const FlyOutContext = createContext<IFlyOutContext>({
  open: false,
  toggle: (s: boolean) => {}
})

const FlyOut = ({ children }: PropsWithChildren): JSX.Element => {
  const [open, toggle] = useState<boolean>(false)
  return (
    <div className={styles.flyout}>
      <FlyOutContext.Provider value={{ open, toggle }}>
        {children}
        {/* 采用Children遍历模式的话 只有第一层才能拿到props
        意思就是 Item组件如果嵌套在List中的话 是拿不到props */}
        {/* {Children.map(children, child => cloneElement(child as JSX.Element, { open, toggle }))} */}
      </FlyOutContext.Provider>
    </div>
  )
}

function Toggle() {
  const { open, toggle } = useContext(FlyOutContext)

  return (
    <div className={styles['flyout-btn']} onClick={() => toggle(!open)}>
      <Icon />
    </div>
  )
}

function List({ children }: PropsWithChildren): JSX.Element {
  const { open } = useContext(FlyOutContext)
  return <>{open && <ul className={styles['flyout-list']}>{children}</ul>}</>
}

function Item({ children }: PropsWithChildren): JSX.Element {
  return <li className={styles['flyout-item']}>{children}</li>
}

FlyOut.Toggle = Toggle
FlyOut.List = List
FlyOut.Item = Item

export default FlyOut
