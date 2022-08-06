import React from 'react'
import styles from './index.module.less'
import { IMAGES_DATA } from '@/constants'
import ImageContainer from '@/components/ImageContainer'
import AnimationPage from '@/components/AnimationPage'

const LazyLoad = (): JSX.Element => {
	return (
		<AnimationPage>
			<section className={styles.lazy}>
				<h3>this is lazy loading page</h3>
				<div className={styles.container}>
					{IMAGES_DATA.map(res => {
						return (
							<div key={res.id} className={styles.wrapper}>
								<ImageContainer
									src={res.urls.regular}
									thumb={res.urls.thumb}
									height={res.height}
									width={res.width}
									alt={res.alt_description}
								/>
							</div>
						)
					})}
				</div>
			</section>
		</AnimationPage>
	)
}

export default LazyLoad
