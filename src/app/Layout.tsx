import { Footer } from '@/widgets/Footer/Footer'
import { Header } from '@/widgets/Header/Header'
import { SideBar } from '@/widgets/SideBar/SideBar'
import { Navigate, Outlet, useLocation } from 'react-router'
import './styles/global.scss'

export const Layout = () => {
	const { pathname } = useLocation()

	if (pathname === '/') {
		return <Navigate to={'/home-page'} />
	}

	return (
		<>
			<Header />
			<SideBar />

			<main className='container'>
				<Outlet />
			</main>

			<Footer />
		</>
	)
}
