export const fetchFewAnime = async () => {
	const response = await fetch('')

	if (!response.ok) {
		console.error('Error response status', response.ok)

		return { message: `error status ${response.ok}` }
	}

	const fewAnime = await response.json()

	return fewAnime
}
