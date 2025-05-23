import type { AppDispatch, RootState } from '@/app/store'
import {
	addToFavorites,
	removeFromFavorites,
} from '@/features/favorites/model/slice/favoritesSlice'
import type { AnimeByIdData } from '@/shared/types/types'
import { Button } from '@/shared/UI/button'
import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import s from './animebyid.module.scss'

export const AnimeByIdPage = () => {
	const { id } = useParams()
	const [animeById, setAnimeById] = useState<AnimeByIdData>()
	const [isClicked, setIsClicked] = useState(false)
	const dispatch = useDispatch<AppDispatch>()
	const isFavorite = useSelector((state: RootState) =>
		state.favorites.some((item) => item.id === animeById?.id)
	)

	const toggleFavorite = () => {
		if (!animeById) return

		isFavorite
			? dispatch(removeFromFavorites(animeById.id))
			: dispatch(addToFavorites(animeById))
	}

	const fetchAnimeById = async () => {
		if (typeof id !== 'string' || id === null) return

		const response = await fetch(`${import.meta.env.VITE_ANIME_BY_ID}?id=${id}`)
		const data = await response.json()
		console.log(data)

		setAnimeById(data)
		console.log(animeById)
	}

	const handleClick = () => {
		setIsClicked((prev) => !prev)

		if (!isClicked) {
		}
	}
	useEffect(() => {
		fetchAnimeById()
	}, [])

	return (
		<section role='info-anime'>
			<article role='main-info' className={s.mainInfo}>
				<div>
					<img
						className={s.poster}
						src={animeById?.posters.medium.url}
						alt={animeById?.names.en}
					/>
					<Button
						className='p-4'
						variant={'secondary'}
						onClick={toggleFavorite}
					>
						{isFavorite ? (
							<Heart className={s.heart} color='red' />
						) : (
							<Heart className={s.heart} />
						)}
					</Button>
				</div>

				<div className={s.info}>
					<h2 className={`section-title ${s.title}`}>
						{animeById?.names.ru ?? 'Не указан'}
					</h2>
					<ul className={s.infoAboutTitle}>
						<li className={s.info__li}>
							Рейтинг: {animeById?.score ?? 'Не указан'}
						</li>
						<li className={s.info__li}>
							Кол-во эпизодов: {animeById?.episodes ?? 'Не указан'}
						</li>
						<li className={s.info__li}>
							Источник: {animeById?.source ?? 'Не указан'}
						</li>
						<li className={s.info__li}>
							Статус: {animeById?.announce ?? 'Не указан'}
						</li>
						<li className={s.info__li}>
							Год: {animeById?.year ?? 'Не указан'}
						</li>

						<li className={s.info__li}>
							Студии:
							{animeById?.team.voice?.map((person) => (
								<p>{person}</p>
							))}{' '}
						</li>
						<li className={s.info__li}>
							<span>Описание: </span>
							<p
								style={{
									height: isClicked ? '100%' : 50,
								}}
								className={s.info__desc}
							>
								{animeById?.description}
							</p>
							<Button variant={'secondary'} onClick={handleClick}>
								{isClicked ? 'Свернуть' : 'Подробнее...'}
							</Button>
						</li>
					</ul>
				</div>
			</article>

			<Link to={`/anime-title/${animeById?.id}/1`}>
				<button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'>
					Смотреть
				</button>
			</Link>
		</section>
	)
}
