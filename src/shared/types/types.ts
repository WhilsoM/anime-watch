export interface AnimeByIdData {
	id: number
	code: string
	torrent_id: number
	names: {
		ru: string
		en: string
	}
	year: number
	score: number
	source: string
	announce: string
	episodes: number
	description: string
	posters: {
		small: {
			url: string
		}
		medium: {
			url: string
		}
		original: {
			url: string
		}
	}
	team: {
		voice: string[]
		translator: string[]
		editing: string[]
		decor: string[]
		timing: string[]
	}
	genres: string[]
}
