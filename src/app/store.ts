import favoritesReducer from '@/features/favorites/model/slice/favoritesSlice'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
	reducer: {
		favorites: favoritesReducer,
		// другие редьюсеры
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
