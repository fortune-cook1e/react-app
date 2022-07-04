import React from 'react'
import html2canvas from 'html2canvas'
import styles from './index.module.less'

const htmlToImage = require('html-to-image')

const IMG = 'https://big-c.oss-cn-hangzhou.aliyuncs.com/cms/img/x2fhevy4hvqyv6nuxsre6qy52e0g6e54封'

const ReactCanvas: React.FC = () => {
	const createCanvas = async () => {
		const element = document.getElementById('poster') as HTMLElement
		// const canvas = await html2canvas(element, {
		// 	// allowTaint: true,
		// 	useCORS: true,
		// 	logging: true
		// })
		// const img = canvas
		// 	.toDataURL('image/png')
		// 	.replace('image/png', 'image/octet-stream')
		// downloadByUrl(img)
		const url = await htmlToImage.toPng(element)
		console.log({ url })
	}

	return (
		<div>
			<h1>h1 tihs is canvas</h1>
			<button onClick={createCanvas}> click me </button>

			<div className={styles.poster} id='poster'>
				<div className={styles.left}>left</div>
				<div className={styles.right}>right</div>
				<div className={styles.top}>top</div>
				<div className={styles.bottom}>bottom</div>
				<img src={IMG + '?' + `time=${Date.now()}`} alt='' crossOrigin='anonymous' />
			</div>
		</div>
	)
}

export default ReactCanvas
