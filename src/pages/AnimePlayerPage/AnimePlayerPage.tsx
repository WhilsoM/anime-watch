import type { AnimeByIdData, TPlayerAnime } from '@/shared/types/types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const AnimePlayerPage = () => {
	const { id, episode } = useParams<{ id: string; episode: string }>()
	const [animeData, setAnimeData] = useState<TPlayerAnime>()

	console.log(id, episode)

	useEffect(() => {
		fetchAnimeById()
	}, [])

	const fetchAnimeById = async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}title?id=${id}`
			)
			const anime: AnimeByIdData = await response.json()
			console.log(anime.player)

			return setAnimeData(anime)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='flex flex-col items-center gap-4 p-4'>
			<iframe
				src={`${animeData?.player.alternative_player}`}
				width='607'
				height='360'
				allowFullScreen
				allow='autoplay *; fullscreen *'
			></iframe>
		</div>
	)
}
