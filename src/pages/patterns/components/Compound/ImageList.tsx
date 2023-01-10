import { FC } from 'react'

import FlyoutMenu from './components/FlyOutMenu'
import styles from './index.module.less'

const sources = [
  'https://images.pexels.com/photos/939478/pexels-photo-939478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1692984/pexels-photo-1692984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/162829/squirrel-sciurus-vulgaris-major-mammal-mindfulness-162829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const ImageList: FC = () => {
  return (
    <>
      {sources.map(s => (
        <div className={styles['image-item']} key={s}>
          <img src={s} alt='Squirrel' />
          <FlyoutMenu />
        </div>
      ))}
    </>
  )
}

export default ImageList
