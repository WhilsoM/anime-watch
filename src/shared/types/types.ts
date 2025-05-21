export interface AnimeByIdData {
	mal_id: number
	title: string
	year: number
	score: number
	source: string
	status: string
	episodes: number
	synopsis: string
	images: {
		webp: {
			image_url: string
		}
	}
	studios: {
		name: string
		url: string
	}[]
}
