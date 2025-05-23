import { AccountPage } from '@/pages/AccountPage/AccountPage'
import { AnimeByIdPage } from '@/pages/AnimeByIdPage/AnimeByIdPage'
import { AnimePlayerPage } from '@/pages/AnimePlayerPage/AnimePlayerPage'
import { FavoritesPage } from '@/pages/FavoritesPage/FavoritesPage'
import { HomePage } from '@/pages/HomePage/HomePage'
import { Route, Routes } from 'react-router'
import { Layout } from './Layout'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='home-page' element={<HomePage />} />
				<Route path='anime-title/:id' element={<AnimeByIdPage />} />
				<Route path='anime-title/:id/:episode' element={<AnimePlayerPage />} />
				<Route path='favorites' element={<FavoritesPage />} />

				<Route path='account' element={<AccountPage />} />
			</Route>
		</Routes>
	)
}
