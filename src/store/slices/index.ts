import { combineReducers } from '@reduxjs/toolkit'

import app from './app'
import user from './user'
const rootReducer = combineReducers({
  user,
  app
})

export default rootReducer
