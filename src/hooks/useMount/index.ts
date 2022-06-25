import { useEffect } from 'react'

/**
 * @description 初次挂载执行
 * @param {function} fn
 * @date 2022-05-01 16:56:07
 */
const useMount = (fn: () => void) => {
	useEffect(() => {
		fn?.()
	}, [])
}

export default useMount
