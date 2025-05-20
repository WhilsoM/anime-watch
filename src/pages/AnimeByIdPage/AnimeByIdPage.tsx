import { Button } from '@/shared/UI/button'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import s from './animebyid.module.scss'

export interface AnimeByIdData {
	title: string
	year: number
	score: number
	source: string
	status: string
	episodes: number
	synopsis: string
	images: {
		webp: {
			image_url: string
		}
	}
	studios: {
		name: string
		url: string
	}[]
}

export const AnimeByIdPage = () => {
	const { id } = useParams()
	console.log(id)
	const [dataById, setDataById] = useState<AnimeByIdData>()
	const [isClicked, setIsClicked] = useState(false)

	const fetchAnimeById = async () => {
		if (typeof id !== 'string' || id === null)
			return <div>Ошибка, id отсутсвует</div>

		const response = await fetch(`${import.meta.env.VITE_ANIME_BY_ID}/${id}`)
		const data = await response.json()
		setDataById(data.data)
		console.log(data)
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
			<div role='bg-img'>{/* <img src={dataById?.data} alt='' /> */}</div>
			<article role='main-info' className={s.mainInfo}>
				<div>
					<img src={dataById?.images.webp.image_url} alt={dataById?.title} />
				</div>

				<div className={s.info}>
					<h2 className='section-title'>Информация о тайтле</h2>
					<ul className={s.infoAboutTitle}>
						<li className={s.info__li}>
							Название: {dataById?.title ?? 'Не указан'}
						</li>
						<li className={s.info__li}>
							Рейтинг: {dataById?.score ?? 'Не указан'}
						</li>
						<li className={s.info__li}>
							Кол-во эпизодов: {dataById?.episodes ?? 'Не указан'}
						</li>
						<li className={s.info__li}>
							Источник: {dataById?.source ?? 'Не указан'}
						</li>
						<li className={s.info__li}>
							Статус: {dataById?.status ?? 'Не указан'}
						</li>
						<li className={s.info__li}>Год: {dataById?.year ?? 'Не указан'}</li>

						<li className={s.info__li}>
							Студии:
							{dataById?.studios?.map((studio) => (
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
								{dataById?.synopsis}
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
