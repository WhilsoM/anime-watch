import favoritesReducer from '@/features/favorites/model/slice/favoritesSlice'
import searchReducer from '@/features/search/model/slice/searchSlice'

import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
	reducer: {
		favorites: favoritesReducer,
		search: searchReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
