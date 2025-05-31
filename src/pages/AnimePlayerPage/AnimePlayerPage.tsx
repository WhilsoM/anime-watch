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
import { Link, useParams } from 'react-router'
import { SelectorQuality } from './UI/SelectorQuality'

export const AnimePlayerPage = () => {
	const { id, episode } = useParams<{ id: string; episode: string }>()
	const [animeData, setAnimeData] = useState<TPlayerAnime>()
	const [selectedQuality, setSelectedQuality] = useState<TQuality>('sd')

	const episodesList = Array.from(
		{ length: animeData?.player.episodes.last },
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
		<div className='flex flex-col items-center gap-4 p-4'>
			<h2 className='section-title'></h2>
			{animeData?.player.alternative_player !== null ? (
				<iframe
					src={`${animeData?.player.alternative_player}`}
					width='607'
					height='360'
					allowFullScreen
					allow='autoplay *; fullscreen *'
				></iframe>
			) : (
				<>
					<article className='flex gap-4'>
						<AnimePlayer src={videoSrc} />

						<SelectorQuality
							animeData={animeData}
							episode={episode}
							selectedQuality={selectedQuality}
							setSelectedQuality={setSelectedQuality}
						/>
					</article>

					<Carousel className='w-2xl md:w-2xl'>
						<CarouselContent className=''>
							{episodesList.map((item, i) => (
								<CarouselItem className='ml-8 basis-auto' key={i}>
									<Button>
										<Link to={`/anime-title/${id}/${Number(episode) + 1}`}>
											{String(item)}
										</Link>
									</Button>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className='left-2' />
						<CarouselNext className='right-2' />
					</Carousel>
				</>
			)}
		</div>
	)
}
