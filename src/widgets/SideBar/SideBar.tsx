import { NavLink } from 'react-router'
import s from './sidebar.module.scss'

export const SideBar = () => {
	return (
		<aside className={s.sidebar}>
			<nav>
				<ul>
					<li className={s.sidebar__link}>
						<NavLink to={'/home-page'}>Home</NavLink>
					</li>
					<li className={s.sidebar__link}>
						<NavLink to={'/account'}>Account</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
