import { Navigate, useLocation } from 'react-router'

export const CheckAuth = () => {
	const { pathname } = useLocation()

	return pathname === '/' ? <Navigate to={'/home-page'} /> : ''
}
