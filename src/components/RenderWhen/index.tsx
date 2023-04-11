import { Children, FC, ReactNode } from 'react'

interface RenderWhenProps {
  children: ReactNode
  isTrue?: boolean
  limit?: number
}

export interface IfProps {
  children: ReactNode
  isTrue?: boolean
}

const If: FC<IfProps> = ({ children, isTrue }) => <>{children}</>

const RenderWhen = ({ limit = 1, isTrue = true, children }: RenderWhenProps): JSX.Element => {
  const list: ReactNode[] = []

  if (!isTrue) return <></>

  Children.map(children, (child: any) => {
    const { isTrue: isChildTrue } = child?.props || {}
    if (isChildTrue && list.length < limit) {
      list.push(child)
    }
  })

  return <>{list}</>
}

RenderWhen.If = If

export default RenderWhen
