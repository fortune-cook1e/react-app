import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'

const reducers = {
	counter,
	user
}

const rootReducers = combineReducers<typeof reducers>(reducers)
export type RootState = ReturnType<typeof rootReducers>

export default rootReducers
