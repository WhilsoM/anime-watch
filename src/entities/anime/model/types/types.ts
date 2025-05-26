import type { AnimeByIdData } from '@/shared/types/types'
import type { Dispatch, SetStateAction } from 'react'

export interface fetchAnimeByIdProps {
	id: number
	setState: Dispatch<SetStateAction<AnimeByIdData>>
}

export interface fetchGenresAnimeProps {
	setState: Dispatch<SetStateAction<string[]>>
	setError: Dispatch<SetStateAction<string>>
}
