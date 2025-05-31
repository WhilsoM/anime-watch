import type {
	AnimeByIdData,
	TPlayerAnime,
	TQuality,
} from '@/shared/types/types'
import { Button } from '@/shared/UI/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/shared/UI/carousel'
import { AnimePlayer } from '@/widgets/AnimePlayer/AnimePlayer'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import s from './animeplayer.module.scss'
import { SelectorQuality } from './UI/SelectorQuality'

export const AnimePlayerPage = () => {
	const { id, episode } = useParams<{ id: string; episode: string }>()
	const [animeData, setAnimeData] = useState<TPlayerAnime>()
	const [selectedQuality, setSelectedQuality] = useState<TQuality>('sd')
	const navigate = useNavigate()

	const episodesList = Array.from(
		{ length: animeData?.player.episodes.last || 0 },
		(_, i) => i + 1
	)

	useEffect(() => {
		fetchAnimeById()
	}, [])

	const fetchAnimeById = async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}title?id=${id}`
			)
			const anime: AnimeByIdData = await response.json()
			console.log(anime.player.list[Number(episode)])

			setAnimeData(anime)
		} catch (error) {
			console.log(error)
		}
	}

	const videoSrc =
		animeData?.player.alternative_player ??
		`https://cache.libria.fun${
			animeData?.player.list[Number(episode)].hls[selectedQuality]
		}`

	return (
		<div className={`${s.animePlayerPage}`}>
			<Button className={s.back} onClick={() => navigate(-1)}>
				Назад
			</Button>

			<h1 className='section-title text-center'>Просмотр аниме</h1>

			{animeData?.player.alternative_player !== null ? (
				<iframe
					src={animeData?.player.alternative_player}
					width='100%'
					height='480'
					className='rounded-xl shadow-lg border'
					allowFullScreen
					allow='autoplay *; fullscreen *'
				></iframe>
			) : (
				<>
					<div className='flex flex-col md:flex-row items-center gap-6'>
						<AnimePlayer src={videoSrc} />
						<div>
							<h3 className='text-2xl mb-1'>Качество</h3>
							<SelectorQuality
								animeData={animeData}
								episode={episode}
								selectedQuality={selectedQuality}
								setSelectedQuality={setSelectedQuality}
							/>
						</div>
					</div>

					<div className={s.chooseEpisode}>
						<h2 className='text-black text-xl font-semibold mb-4 dark:text-white'>
							Выберите серию
						</h2>
						<Carousel className={s.carouselWrapper}>
							<CarouselContent className='flex gap-2'>
								{episodesList.map((ep) => (
									<CarouselItem key={ep} className={`${s.carouselItem}`}>
										<Link to={`/anime-title/${id}/${ep}`}>
											<Button
												variant={Number(episode) === ep ? 'default' : 'outline'}
												className='min-w-[48px]  px-4 py-2 bg-gray-100 text-black dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-50'
											>
												{ep}
											</Button>
										</Link>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className='left-2 bg-gray-200 text-black dark:bg-neutral-700 dark:text-white hover:bg-gray-300 dark:hover:bg-neutral-600 rounded-full shadow-md' />
							<CarouselNext className='right-2 bg-gray-200 text-black dark:bg-neutral-700 dark:text-white hover:bg-gray-300  dark:hover:bg-neutral-600 rounded-full shadow-md' />
						</Carousel>
					</div>
				</>
			)}
		</div>
	)
}
