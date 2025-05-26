import type { AnimeByIdData } from '@/shared/types/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: AnimeByIdData[] = []

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchAnime(state, action: PayloadAction<AnimeByIdData[]>) {
			const uniqueItems = action.payload.filter(
				(item, index, self) =>
					index === self.findIndex((t) => t.mal_id === item.mal_id)
			)
			return uniqueItems
		},
	},
})

export const { searchAnime } = searchSlice.actions
export default searchSlice.reducer
