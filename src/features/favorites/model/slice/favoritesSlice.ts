import type { AnimeByIdData } from '@/shared/types/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: AnimeByIdData[] = []

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorites(state, action: PayloadAction<AnimeByIdData>) {
			const exists = state.find((item) => item.id === action.payload.id)
			if (!exists) state.push(action.payload)
		},
		removeFromFavorites(state, action: PayloadAction<number>) {
			return state.filter((item) => item.id !== action.payload)
		},
		clearFavorites() {
			return []
		},
	},
})

export const { addToFavorites, removeFromFavorites, clearFavorites } =
	favoritesSlice.actions
export default favoritesSlice.reducer
