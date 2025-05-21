import type { AnimeByIdData } from '@/shared/types/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: AnimeByIdData[] = []

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchAnime(state, action: PayloadAction<AnimeByIdData[]>) {
			return action.payload
		},
	},
})

export const { searchAnime } = searchSlice.actions
export default searchSlice.reducer
