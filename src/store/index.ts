import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from '@/store/reducers'

const middlewares: any[] = [thunk]

if (process.env.NODE_ENV === 'development') {
	middlewares.push(require('redux-logger').createLogger())
}

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
