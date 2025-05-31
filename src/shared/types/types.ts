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
	team: Record<TTeam, string[]>

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

	player: {
		episodes: {
			first: number
			last: number
		}
		alternative_player: string
		list: Record<number, Episode>
	}
}

export type TPlayerAnime = Pick<AnimeByIdData, 'player'>

type TTeam = 'voice' | 'translator' | 'editing' | 'decor' | 'timing'

export type TQuality = 'fhd' | 'hd' | 'sd'

type Episode = {
	episode: number
	name: string
	created_timestamp: number
	preview: any
	skips: {
		opening: string[]
		ending: string[]
	}
	hls: Record<TQuality, string>
}
