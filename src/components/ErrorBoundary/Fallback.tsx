import { Button, Result } from 'antd'
import React from 'react'
import { FallbackProps } from 'react-error-boundary'

import styles from './index.module.less'

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps): JSX.Element => {
	console.error('error fall back', { error })

	const goHome = () => {
		location.reload()
	}

	return (
		<div className={styles.fallback}>
			<Result
				status='500'
				title='页面崩溃'
				subTitle='请点击下方按钮刷新页面'
				extra={
					<Button type='primary' onClick={goHome}>
						刷新页面
					</Button>
				}
			/>
		</div>
	)
}

export default ErrorFallback
