import type { fetchAnimeByIdProps } from '../types/types'

export const fetchAnimeById = async ({ id, setState }: fetchAnimeByIdProps) => {
	if (typeof id !== 'string' || id === null) return 'error'
	try {
		const response = await fetch(`${import.meta.env.VITE_ANIME_BY_ID}/${id}`)
		const data = await response.json()

		return setState(data)
	} catch (error) {
		console.error(error)
	}
}
