import { RootState } from '@/store'
import { createSlice } from '@reduxjs/toolkit'

export interface AppState {
	menuCollapsed: boolean
}

const initialState: AppState = {
	menuCollapsed: false
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setMenuStatus: (state, action) => {
			state.menuCollapsed = action.payload
		}
	}
})

const appReducer = appSlice.reducer
export const { setMenuStatus } = appSlice.actions
export const appSelector = (state: RootState): AppState => state.app

export default appReducer
