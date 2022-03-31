import { combineReducers } from '@reduxjs/toolkit'
import user from './user'
import app from './app'
const rootReducer = combineReducers({
	user,
	app
})

export default rootReducer
