import { combineReducers } from '@reduxjs/toolkit'
import user from './userSlice'
const rootReducer = combineReducers({
	user
})

export default rootReducer
