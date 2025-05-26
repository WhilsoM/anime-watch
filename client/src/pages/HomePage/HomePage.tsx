import {
	fetchAnimesByGenre,
	fetchGenresAnime,
} from '@/entities/anime/model/services'
import { Button } from '@/shared/UI/button'
import { SearchCarouselAnime } from '@/widgets/SearchCarouselAnime/SearchCarouselAnime'
import { useEffect, useState } from 'react'
import s from './home.module.scss'

export const HomePage = () => {
	const [genres, setGenres] = useState<string[]>([])
	const [anime, setAnime] = useState([])
	const [error, setError] = useState<string>('')

	useEffect(() => {
		fetchGenresAnime(setGenres, setError)
		fetchAnimesByGenre('Гарем').then(setAnime)
	}, [])

	const handleFetchClick = async (
		event: React.MouseEvent<HTMLButtonElement>,
		genre: string
	) => {
		console.log(genre)

		const animeData = await fetchAnimesByGenre(genre)
		setAnime(animeData)
		console.log('anime', anime)

		console.log(animeData)
	}

	return (
		<section className='pt-4' role='home-page'>
			<SearchCarouselAnime />

			<h2 className='section-title'>Жанры Аниме</h2>

			<section className={s.genres}>
				{genres.map((genre) => (
					<Button
						onClick={(event) => handleFetchClick(event, genre)}
						key={genre}
					>
						{genre}
					</Button>
				))}
				{error.length > 1 && <p>Произошла ошибка: {error}</p>}
			</section>

			<section className={s.genreList}></section>
		</section>
	)
}
