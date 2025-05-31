import type { AppDispatch, RootState } from '@/app/store'
import {
	addToFavorites,
	removeFromFavorites,
} from '@/features/favorites/model/slice/favoritesSlice'
import type { AnimeByIdData } from '@/shared/types/types'
import { Button } from '@/shared/UI/button'
import { Heart } from 'lucide-react'
import { motion } from 'motion/react'
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

		const response = await fetch(
			`${import.meta.env.VITE_API_URL}${
				import.meta.env.VITE_ANIME_BY_ID
			}?id=${id}`
		)
		const data = await response.json()
		console.log(data)

		setAnimeById(data)
	}

	useEffect(() => {
		fetchAnimeById()
	}, [])

	return (
		<section role='info-anime'>
			<article role='main-info' className={s.mainInfo}>
				<div>
					<motion.img
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						whileHover={{ scale: 0.9 }}
						whileTap={{ scale: 0.95 }}
						className={s.poster}
						src={`${import.meta.env.VITE_STORAGE_URL}${
							animeById?.posters.small.url
						}`}
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

				<motion.div className={s.info}>
					<motion.h2
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						className={`section-title ${s.title}`}
					>
						{animeById?.names.ru ?? 'Не указан'}
					</motion.h2>
					<ul className={s.infoAboutTitle}>
						<li className={s.info__li}>
							Кол-во эпизодов: <p>{animeById?.type.episodes ?? 'Не указан'}</p>
						</li>
						<li className={s.info__li}>
							Статус: <p>{animeById?.status.string ?? 'Не указан'}</p>
						</li>
						<li className={s.info__li}>
							Год: <p>{animeById?.season.year ?? 'Не указан'}</p>
						</li>
						<li className={s.info__li}>
							Жанры:{' '}
							{animeById?.genres.map((genre) => (
								<p key={genre}>{genre}</p>
							))}
						</li>
						<li className={s.info__li}>
							Студии:
							{animeById?.team.voice?.map((person) => (
								<p key={person}>{person}</p>
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
							<motion.div
								whileHover={{ scale: 0.9 }}
								whileTap={{ scale: 1 }}
								className='w-max'
							>
								<Button
									variant={'secondary'}
									onClick={() => setIsClicked((prev) => !prev)}
								>
									{isClicked ? 'Свернуть' : 'Подробнее...'}
								</Button>
							</motion.div>
						</li>
					</ul>
				</motion.div>
			</article>

			<Link to={`/anime-title/${animeById?.id}/1`}>
				<Button className='cursor-pointer'>Смотреть</Button>
			</Link>
		</section>
	)
}
