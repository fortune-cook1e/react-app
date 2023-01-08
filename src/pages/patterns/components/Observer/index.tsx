import { Button } from 'antd'

import observer from './observer'

const ob1 = () => {
  console.log('this is ob1')
}

const ob2 = () => {
  console.log('this is ob2')
}

observer.subscribe(ob1)
observer.subscribe(ob2)

const Observer = (): JSX.Element => {
  const btnClick = () => {
    observer.notify()
  }

  return (
    <div>
      <h1>his is Observer</h1>
      <Button type='primary' onClick={btnClick}>
        click me
      </Button>
    </div>
  )
}

export default Observer
