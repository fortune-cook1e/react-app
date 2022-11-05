import React, { FC, Suspense } from 'react'

import styles from './index.module.less'

import rolling from '@/assets/svgs/rolling.svg'

interface SuspenseWrapperProps {
  path: string
  LazyComponent: React.LazyExoticComponent<React.ComponentType<any>>
}

const SuspenseWrapper: FC<SuspenseWrapperProps> = ({ LazyComponent }) => {
  return (
    <Suspense
      fallback={
        <div className={styles['loader-container']}>
          <div className={styles['loader-container-inner']}>
            <img src={rolling} />
          </div>
        </div>
      }
    >
      <LazyComponent />
    </Suspense>
  )
}

export default SuspenseWrapper
