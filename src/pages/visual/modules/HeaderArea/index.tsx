import React, { useRef, useEffect, useState } from 'react'
import styles from '../../index.module.less'
import { Button, message, Space } from 'antd'
import { useEngineContext } from '../../context'
import JsonViewer from './components/JsonViewer'
import { EVENT_MAP } from '../../constants'

const HeaderArea = (): JSX.Element => {
	const { eventEmitter } = useEngineContext()
	const [visible, setVisible] = useState<boolean>(false)

	const onSaveAsPicture = () => {
		eventEmitter.emit(EVENT_MAP.saveAsPic)
	}

	return (
		<header className={styles.header}>
			<JsonViewer visible={visible} onClose={() => setVisible(false)} />

			<div className={styles.header__logo}>V</div>
			<h3 className={styles.header__title}>可视化搭建</h3>
			<div className={styles.header__tools}>
				<Space>
					<Button type='primary' onClick={onSaveAsPicture}>
						下载为图片
					</Button>
					<Button type='primary' onClick={() => setVisible(true)}>
						查看元数据
					</Button>
				</Space>
			</div>
		</header>
	)
}

export default HeaderArea
