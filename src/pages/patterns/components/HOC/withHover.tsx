import { FC, useState } from 'react'

export default function withHover(Element: FC) {
  return (props: any): JSX.Element => {
    const [hovering, setHover] = useState<boolean>(false)

    return (
      <Element
        {...props}
        hovering={hovering ? 1 : 0} // FixBug: 不能直接传递boolean值
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    )
  }
}
