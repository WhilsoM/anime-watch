import { Button } from '@/shared/UI/button'
import { Input } from '@/shared/UI/input'
import { Moon, Search, Sun } from 'lucide-react'
import { useState } from 'react'
import s from './header.module.scss'

export const Header = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(false)

	return (
		<header className={`${s.header} container`} role='header'>
			<section className={s.searchBlock} role='search-anime'>
				<Input type='text' name='search' className={s.searchAnime} />
				<Search className={s.loupe} />
			</section>

			<section className={s.header__wrapper}>
				<section className={s.toggleTheme} role='toggle-theme'>
					<Button
						variant={isDarkTheme ? 'outline' : 'default'}
						onClick={() => setIsDarkTheme((prev) => !prev)}
					>
						{isDarkTheme ? <Moon /> : <Sun />}
					</Button>
				</section>

				<article>Account IMG</article>
			</section>
		</header>
	)
}
