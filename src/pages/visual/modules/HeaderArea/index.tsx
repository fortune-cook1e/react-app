import React, { useRef, useEffect, useState } from 'react'
import styles from '../../index.module.less'
import { Button, message, Space } from 'antd'
import { useEngineContext } from '../../context'
import JsonViewer from './components/JsonViewer'
import { EVENT_MAP } from '../../constants'
import { addVisual, updateVisual } from '@/apis/v2/visual'
import { useRequest } from 'ahooks'
import { useNavigate } from 'react-router-dom'

const HeaderArea = (): JSX.Element => {
	const navigate = useNavigate()
	const { eventEmitter, globalEngine, mode, editingId } = useEngineContext()
	const [visible, setVisible] = useState<boolean>(false)

	const { loading: addLoading, run: addVisualRunner } = useRequest(addVisual, {
		manual: true
	})

	const { loading: updateLoading, run: updateVisualRunner } = useRequest(updateVisual, {
		manual: true
	})

	const onSaveAsPicture = () => {
		eventEmitter.emit(EVENT_MAP.saveAsPic)
	}

	const onSave = async () => {
		const data = globalEngine.getEngineData()
		const pageConfig = globalEngine.getEnginePageConfig()

		const cmpListStr = JSON.stringify(data)
		const pageConfigStr = JSON.stringify(pageConfig)
		if (mode === 'add') {
			await addVisualRunner({
				cmpList: cmpListStr,
				pageConfig: pageConfigStr
			})
		} else {
			await updateVisualRunner({
				cmpList: cmpListStr,
				pageConfig: pageConfigStr,
				id: editingId as string
			})
		}
		message.success('保存成功')
	}

	const goBack = () => {
		navigate('/visual-management')
	}

	return (
		<header className={styles.header}>
			<JsonViewer visible={visible} onClose={() => setVisible(false)} />

			<div className={styles.header__logo}>V</div>
			<h3 className={styles.header__title}>可视化搭建</h3>
			<div className={styles.header__tools}>
				<Space>
					<Button type='primary' onClick={onSave} loading={addLoading || updateLoading}>
						保存
					</Button>
					<Button type='default' onClick={onSaveAsPicture}>
						下载为图片
					</Button>
					<Button type='default' onClick={() => setVisible(true)}>
						查看元数据
					</Button>
					<Button type='default' onClick={goBack}>
						返回
					</Button>
				</Space>
			</div>
		</header>
	)
}

export default HeaderArea
