export const fetchAnimesByGenre = async (genre: string | undefined) => {
	if (!genre) return
	console.log(genre)

	try {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}${
				import.meta.env.VITE_ANIME_BY_ID
			}/list?id_list=8500,8644`
		)

		if (!response.status) {
			if (!response.ok) {
				console.error('Error', response.status)
				return []
			}
		}

		const result = await response.json()
		console.log(result)
		return result.list || []
	} catch (error) {
		console.error('Ошибка при получении аниме по жанру:', error)
		return []
	}
}
