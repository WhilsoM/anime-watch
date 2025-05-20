import type { AnimeByIdData } from '@/pages/AnimeByIdPage/AnimeByIdPage'
import type { Dispatch, SetStateAction } from 'react'

interface fetchAnimeByIdProps {
	id: number
	setState: Dispatch<SetStateAction<AnimeByIdData>>
}

export const fetchAnimeById = async ({ id, setState }: fetchAnimeByIdProps) => {
	if (typeof id !== 'string' || id === null) return 'error'

	const response = await fetch(`${import.meta.env.VITE_ANIME_BY_ID}/${id}`)
	const data = await response.json()

	return setState(data)
}
