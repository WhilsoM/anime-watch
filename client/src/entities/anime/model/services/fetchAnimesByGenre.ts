export const fetchAnimesByGenre = async (genre: string | undefined) => {
	if (!genre) return
	console.log(genre)

	try {
		const response = await fetch(
			`${
				import.meta.env.VITE_API_URL
			}title/search/advanced?query={genres}=="${genre}"&order_by=in_favorites&sort_direction=1&limit=20`
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
