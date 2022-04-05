import React, { CSSProperties, useRef, useState } from 'react'
import styles from './index.module.less'
import { useIntersectionObserver } from '@/hooks'
import Image from './Image'

interface Props {
	src: string
	thumb: string
	height: number
	width: number
	alt: string | null
}

const ImageContainer = ({
	src,
	thumb,
	height,
	width,
	alt
}: Props): JSX.Element => {
	const [visible, setVisible] = useState<boolean>(false)
	const ref = useRef<any>(null)

	const aspectRatio = (height / width) * 100
	const containerStyle: CSSProperties = {
		paddingBottom: `${aspectRatio}%`
	}

	useIntersectionObserver({
		target: ref,
		onIntersect: (entries, observer) => {
			const { isIntersecting = false } = entries[0]
			if (isIntersecting) {
				setVisible(true)
				observer.unobserve(ref.current)
			}
		}
	})

	return (
		<div ref={ref} className={styles.container} style={containerStyle}>
			{visible && <Image src={src} alt={alt || ''} thumb={thumb} />}
		</div>
	)
}

export default ImageContainer
