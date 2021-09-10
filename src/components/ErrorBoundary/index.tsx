import { ErrorBoundary } from 'react-error-boundary'
import React from 'react'

interface Props {
	// error: any
	children: React.ReactNode
}

interface ErrorFallbackProps {
	error: any
	resetErrorBoundary: () => void
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
	return (
		<div role='alert'>
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	)
}

const Error: React.FC<Props> = ({ children }) => {
	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => {
				// reset the state of your app so the error doesn't happen again
			}}
		>
			{children}
		</ErrorBoundary>
	)
}

export default Error
