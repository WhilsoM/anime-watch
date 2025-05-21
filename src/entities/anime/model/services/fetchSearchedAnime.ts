import type { AppDispatch } from '@/app/store'
import { searchAnime } from '@/features/search/model/slice/searchSlice'
import { limit } from '@/shared/consts/consts'

export const fetchSearchedAnime = async (
	text: string,
	dispatch: AppDispatch
) => {
	if (text.length === 0) return

	const response = await fetch(
		`https://api.jikan.moe/v4/anime?q=${text}&limit=${limit}`
	)
	const searchedAnimeData = await response.json()

	return dispatch(searchAnime(searchedAnimeData.data))
}
