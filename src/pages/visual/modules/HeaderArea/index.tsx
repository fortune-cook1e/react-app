import React, { useRef, useEffect } from 'react'
import ClipboardJS from 'clipboard'
import styles from '../../index.module.less'
import { Button, message, Space } from 'antd'
import { useEngineContext } from '../../context'

const HeaderArea = (): JSX.Element => {
	const saveBtnRef = useRef<any>(null)
	const { globalEngine } = useEngineContext()
	let clipboard: any = null

	useEffect(() => {
		if (saveBtnRef.current) {
			clipboard = new ClipboardJS(saveBtnRef.current, {
				text: () => JSON.stringify(globalEngine.getEngineData())
			})
			clipboard.on('success', function (e: any) {
				message.success('复制元数据成功')
				e.clearSelection()
			})
			clipboard.on('error', function (e) {
				console.error('Action:', e.action)
				console.error('Trigger:', e.trigger)
			})
		}
		return () => clipboard?.destroy && clipboard.destroy()
	}, [])

	const onSaveMeta = () => {}

	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>V</div>
			<h3 className={styles.header__title}>可视化搭建</h3>
			<div className={styles.header__tools}>
				<Space>
					<Button ref={saveBtnRef} onClick={onSaveMeta}>
						保存元数据
					</Button>
				</Space>
			</div>
		</header>
	)
}

export default HeaderArea
