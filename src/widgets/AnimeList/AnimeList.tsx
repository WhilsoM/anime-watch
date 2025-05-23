import type { AnimeByIdData } from '@/shared/types/types'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { AnimeItem } from '../AnimeItem/AnimeItem'
import s from './anime-list.module.scss'

type RecommendationsData = Pick<AnimeByIdData, 'id' | 'names' | 'posters'>

export const AnimeList = () => {
	const [recommendations, setRecommendations] = useState<RecommendationsData[]>(
		[]
	)

	const fetchRecomendation = async (
		setState: Dispatch<SetStateAction<RecommendationsData[]>>
	) => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}${
					import.meta.env.VITE_ANIME_RECOMENDATIONS
				}`
			)
			const data = await response.json()

			const sliceData = data.data.slice(0, 50)
			console.log('slice', sliceData)
			console.log('data', data)

			setState(sliceData)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchRecomendation(setRecommendations)
	}, [])

	return (
		<section className={s.animeList}>
			{recommendations.map((item) => (
				<AnimeItem
					id={item.id}
					key={item.id}
					img={item.posters.medium.url}
					title={item.names.ru}
				/>
			))}
		</section>
	)
}
