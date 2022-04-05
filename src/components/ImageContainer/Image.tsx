import React, { useState } from 'react'
import styles from './index.module.less'
import classnames from 'classnames'

interface Props {
	alt: string
	thumb: string
	src: string
}

const Image = ({ alt, thumb, src }: Props): JSX.Element => {
	const [loaded, setLoaded] = useState<boolean>(false)

	return (
		<>
			<img
				className={classnames(styles.image, styles.thumb)}
				alt={alt}
				src={thumb}
				style={{ visibility: loaded ? 'hidden' : 'visible' }}
			/>
			<>
				<img
					onLoad={() => {
						setLoaded(true)
					}}
					className={classnames(styles.image, styles.image_full)}
					style={{ opacity: loaded ? 1 : 0 }}
					alt={alt}
					src={src}
				/>
			</>
		</>
	)
}

export default Image
