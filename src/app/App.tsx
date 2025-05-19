import { HomePage } from '@/pages/HomePage/HomePage'
import { Route, Routes } from 'react-router'
import { Layout } from './Layout'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='home-page' element={<HomePage />} />
			</Route>
		</Routes>
	)
}
