import type { AppDispatch } from '@/app/store'
import { searchAnime } from '@/features/search/model/slice/searchSlice'

export const fetchSearchedAnime = async (
	text: string,
	dispatch: AppDispatch
) => {
	if (text.length === 0) return

	const response = await fetch(`https://api.jikan.moe/v4/anime?q=${text}`)
	const searchedAnimeData = await response.json()

	return dispatch(searchAnime(searchedAnimeData.data))
}
