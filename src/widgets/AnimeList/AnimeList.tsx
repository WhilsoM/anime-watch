import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { AnimeItem } from '../AnimeItem/AnimeItem'
import s from './anime-list.module.scss'

interface RecommendationsData {
	entry: {
		mal_id: number
		title: string
		images: {
			webp: {
				image_url: string
			}
		}
	}
}

export const AnimeList = () => {
	const [recommendations, setRecommendations] = useState<RecommendationsData[]>(
		[]
	)

	const fetchRecomendation = async (
		setState: Dispatch<SetStateAction<RecommendationsData[]>>
	) => {
		const response = await fetch(
			'https://api.jikan.moe/v4/anime/1/recommendations'
		)
		const data = await response.json()

		const sliceData = data.data.slice(0, 50)

		setState(sliceData)
	}

	useEffect(() => {
		fetchRecomendation(setRecommendations)
	}, [])

	return (
		<section className={s.animeList}>
			{recommendations.map((item) => (
				<AnimeItem
					key={item.entry.mal_id}
					img={item.entry.images.webp.image_url}
					title={item.entry.title}
				/>
			))}
		</section>
	)
}
