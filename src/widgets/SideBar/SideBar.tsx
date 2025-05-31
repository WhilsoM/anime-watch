import { getCurrentWidth } from '@/features/getCurrentWidth'
import { Button } from '@/shared/UI/button'
import { Home, Menu, Star, UserRound } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router'
import s from './sidebar.module.scss'

export const SideBar = () => {
	const width = getCurrentWidth()
	const [isHide, setIsHide] = useState(false)

	const hideOrShowSidebar = () => {
		return setIsHide((prev) => !prev)
	}

	return (
		<aside className={`${s.sidebar} ${isHide ? s.hide : s.show}`}>
			<nav>
				<ul className={isHide ? s.hideNavList : ''}>
					{width <= 550 && (
						<li className={s.sidebar__link}>
							<Button onClick={hideOrShowSidebar}>
								<Menu size={15} />
							</Button>
						</li>
					)}

					<li className={s.sidebar__link}>
						<NavLink to={'/home-page'}>
							<Home size={17} />

							{!isHide && <span>Home</span>}
						</NavLink>
					</li>

					<li className={s.sidebar__link}>
						<NavLink to={'/favorites'}>
							<Star size={17} />

							{!isHide && <span>Favorites</span>}
						</NavLink>
					</li>
					<li className={s.sidebar__link}>
						<NavLink to={'/account'}>
							<UserRound size={17} />

							{!isHide && <span>Account</span>}
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
