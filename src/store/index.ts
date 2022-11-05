import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'

import rootReducer from './slices/index'

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): any => useDispatch<AppDispatch>()
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
