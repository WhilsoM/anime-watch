export interface AnimeByIdData {
	id: number
	code: string
	torrent_id: number
	type: {
		episodes: number
	}
	names: {
		ru: string
		en: string
	}
	season: {
		year: number
	}
	status: {
		string: string
	}
	announce: string
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
	franchises: {
		franchise: {
			id: string
			name: string
		}
		releases: {
			id: number
			names: {
				en: string
				ru: string
			}
		}[]
	}[]
}
