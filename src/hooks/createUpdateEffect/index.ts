import { useRef } from 'react'
import type { useEffect, useLayoutEffect } from 'react'

type effectHookType = typeof useEffect | typeof useLayoutEffect

/**
 * @description 当useEffect和useLayout的 依赖更新时才会触发（初次挂载不触发）
 * @date 2022-05-01 17:00:00
 */
export const createUpdateEffect: (hook: effectHookType) => effectHookType =
	hook => (effect, deps) => {
		const isMounted = useRef(false)

		// for react-refresh
		hook(() => {
			return () => {
				isMounted.current = false
			}
		}, [])

		hook(() => {
			if (!isMounted.current) {
				isMounted.current = true
			} else {
				return effect()
			}
		}, deps)
	}
