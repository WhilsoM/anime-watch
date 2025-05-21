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
		state.favorites.some((item) => item.mal_id === animeById?.mal_id)
	)

	const toggleFavorite = () => {
		if (!animeById) return

		isFavorite
			? dispatch(removeFromFavorites(animeById.mal_id))
			: dispatch(addToFavorites(animeById))
	}

	const fetchAnimeById = async () => {
		if (typeof id !== 'string' || id === null) return

		const response = await fetch(`${import.meta.env.VITE_ANIME_BY_ID}/${id}`)
		const data = await response.json()
		setAnimeById(data.data)
	}

	const handleClick = () => {
		setIsClicked((prev) => !prev)

		if (!isClicked) {
		}
	}
	useEffect(() => {
		fetchAnimeById()
	}, [])
	// for bg img if i have
	// content: "";
	//   display: block;
	//   position: absolute;
	//   top: 0;
	//   left: 0;
	//   right: 0;
	//   bottom: 0;
	//   z-index: 2;
	//   background: linear-gradient(to top, rgba(0, 0, 0, .6), transparent 180px), rgba(0, 0, 0, .2);

	return (
		<section role='info-anime'>
			{/* TODO: ADD BG IMG */}
			<div role='bg-img'>{/* <img src={animeById?.data} alt='' /> */}</div>

			<article role='main-info' className={s.mainInfo}>
				<div>
					<img
						className={s.poster}
						src={animeById?.images.webp.image_url}
						alt={animeById?.title}
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
					<h2 className='section-title'>Информация о тайтле</h2>
					<ul className={s.infoAboutTitle}>
						<li className={s.info__li}>
							Название: {animeById?.title ?? 'Не указан'}
						</li>
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
							Статус: {animeById?.status ?? 'Не указан'}
						</li>
						<li className={s.info__li}>
							Год: {animeById?.year ?? 'Не указан'}
						</li>

						<li className={s.info__li}>
							Студии:
							{animeById?.studios?.map((studio) => (
								<Link key={studio.name} target='_blank' to={studio.url}>
									{' '}
									{studio.name}
								</Link>
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
								{animeById?.synopsis}
							</p>
							<Button variant={'secondary'} onClick={handleClick}>
								{isClicked ? 'Свернуть' : 'Подробнее...'}
							</Button>
						</li>
					</ul>
				</div>
			</article>
		</section>
	)
}
