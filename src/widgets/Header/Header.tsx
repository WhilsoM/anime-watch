import { type AppDispatch } from '@/app/store'
import { fetchSearchedAnime } from '@/entities/anime/model/services/fetchSearchedAnime'
import { Button } from '@/shared/UI/button'
import { Input } from '@/shared/UI/input'
import { Moon, Search, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import s from './header.module.scss'

export const Header = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(false)
	const [isHomePage, setIsHomePage] = useState(true)
	const [searchAnimeValue, setSearchAnimeValue] = useState('')
	const dispatch = useDispatch<AppDispatch>()
	const { pathname } = useLocation()

	useEffect(() => {
		if (pathname !== '/home-page') setIsHomePage(false)
		else setIsHomePage(true)
		console.log(pathname, isHomePage)
	}, [pathname])

	const searchAnimeHandle = async () => {
		if (searchAnimeValue.length === 0) return
		await fetchSearchedAnime(searchAnimeValue, dispatch)
	}

	return (
		<header className={`${s.header} container`} role='header'>
			{isHomePage && (
				<section className={s.searchBlock} role='search-anime'>
					<Input
						value={searchAnimeValue}
						onChange={(e) => setSearchAnimeValue(e.target.value)}
						type='text'
						name='search'
						className={s.searchAnime}
					/>
					<Button onClick={searchAnimeHandle} variant={'destructive'}>
						<Search className={s.loupe} />
					</Button>
				</section>
			)}
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
