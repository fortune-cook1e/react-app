import React, { FC, PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import Fallback from './Fallback'

const ReactErrorBoundary: FC<PropsWithChildren<any>> = ({ children }) => {
  return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>
}

export default ReactErrorBoundary
