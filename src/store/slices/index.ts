import { combineReducers } from '@reduxjs/toolkit'
import counter from './counterSlice'
import user from './userSlice'
import thunk from './thunkSlice'
const rootReducer = combineReducers({
	counter,
	user,
	thunk
})

export default rootReducer
