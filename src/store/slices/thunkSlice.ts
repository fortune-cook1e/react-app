import {
	createSlice,
	PayloadAction,
	createAsyncThunk,
	createAction,
	createReducer
} from '@reduxjs/toolkit'
import { RootState } from '@/store'

export const thunkHello = createAction<string, 'thunkHello'>('thunkHello')

export const thunkBye = createAction<string, 'thunkBye'>('thunkBye')

const fetchAsyncData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('async is done!')
		}, 2000)
	})
}

export const getAsyncData = createAsyncThunk('thunk/getAsyncData', async () => {
	const message = await fetchAsyncData()
	return message
})

interface InitialState {
	message: string
}

const initialState: InitialState = {
	message: 'original message'
}

const thunkSlice = createSlice({
	name: 'thunk',
	initialState,
	reducers: {}
	// extraReducers: builder => {
	// 	builder.addCase(
	// 		getAsyncData.fulfilled,
	// 		(state, action: PayloadAction<any>) => {
	// 			state.message = action.payload
	// 		}
	// 	)
	// }
})

console.log('sayndata', getAsyncData.fulfilled, typeof getAsyncData.fulfilled)

const thunkReducers = createReducer(initialState, {
	[thunkHello.type]: (state, action) => {
		console.log('thunkhello')
		state.message = action.payload
	},
	[thunkBye.type]: (state, action) => {
		console.log('thunkbye')
		state.message = action.payload
	},
	[getAsyncData.fulfilled]: (state, action) => {
		console.log('getAsyncData,', { action })
		state.message = action.payload
	}
})

// const thunkReducerTwo = createReducer(initialState, builder => {
// 	builder.addCase(
// 		getAsyncData.fulfilled,
// 		(state, action: PayloadAction<any>) => {
// 			console.log('getAsyncData,', { action })
// 			state.message = action.payload
// 		}
// 	)
// })

// console.log({ thunkReducers, thunkReducerTwo })

export const thunkSelector = (state: RootState): InitialState => state.thunk

export default thunkReducers
