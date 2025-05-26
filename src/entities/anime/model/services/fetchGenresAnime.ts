export const fetchGenresAnime = async (setState: any, setError: any) => {
	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}genres`)

		if (!response.status) {
			return console.error('Error', response.status)
		}

		const genres = await response.json()

		return setState(genres)
	} catch (error: any) {
		console.log(error)
		setError(error)
	}
}
