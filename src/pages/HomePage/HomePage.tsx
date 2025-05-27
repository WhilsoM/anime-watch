import { SearchCarouselAnime } from '@/widgets/SearchCarouselAnime/SearchCarouselAnime'
import { useEffect, useState } from 'react'
import s from './home.module.scss'

export const HomePage = () => {
	const [animes, setAnimes] = useState([])
	const [error, setError] = useState<string>('')

	useEffect(() => {}, [])

	return (
		<section className='pt-4' role='home-page'>
			<SearchCarouselAnime />

			<section className={s.animeList}>{}</section>

			<h3 className='text-gray-400 text-center text-3xl'>
				Используйте поиск чтобы найти больше аниме
			</h3>
		</section>
	)
}
