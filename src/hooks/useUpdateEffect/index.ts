import { useEffect } from 'react'
import { createUpdateEffect } from '../createUpdateEffect'

/**
 * @description 只有当依赖更新时才出发 useEffect
 * @date 2022-05-01 17:03:04
 */
export default createUpdateEffect(useEffect)
