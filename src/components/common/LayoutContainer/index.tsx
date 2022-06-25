import React, { Children } from 'react'
import LayoutHeader from './LayoutHeader'
import LayoutContent from './LayoutContent'
import styles from './index.module.less'
import classNames from 'classnames'

const getChildrenOnDisplayName = (children: any, displayName: string) => {
	return Children.map(children, child => {
		return child.type.displayName === displayName ? child : null
	})
}

interface Props {
	className?: string
	children: React.ReactNode
}

const LayoutContainer = ({ children, className }: Props): JSX.Element => {
	const Header = getChildrenOnDisplayName(children, 'LayoutHeader')
	const Content = getChildrenOnDisplayName(children, 'LayoutContent')

	return (
		<div className={classNames(styles.layout, className)}>
			{children}
			{Header}
			{Content}
		</div>
	)
}

LayoutContainer.Header = LayoutHeader
LayoutContainer.Content = LayoutContent

export default LayoutContainer
