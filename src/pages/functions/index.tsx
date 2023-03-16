import { lazy, Suspense, useMemo, useState } from 'react'

import { MODULES_LIST } from './const'

const Functions = (): JSX.Element => {
  const [module, setModule] = useState<string>(MODULES_LIST[0].component)

  const DynamicComponent: any = useMemo(() => {
    if (!module) return <span />
    const lazyModule = lazy(() => import(`./modules/${module}/index.tsx`))
    return lazyModule
  }, [module])

  return (
    <section>
      <h3 className='mb-3'>功能实现</h3>
      <div className='flex'>
        {MODULES_LIST.map(m => (
          <div
            className='bg-white rounded-lg hover:cursor-pointer w-60 h-60 text-center hover:shadow-lg flex items-center justify-center mb-5'
            key={m.component}
            onClick={() => setModule(m.component)}
          >
            {m.title}
          </div>
        ))}
      </div>

      <div className='bg-white rounded-lg p-8'>
        <Suspense fallback='loading...'>
          <DynamicComponent />
        </Suspense>
      </div>
    </section>
  )
}

export default Functions
