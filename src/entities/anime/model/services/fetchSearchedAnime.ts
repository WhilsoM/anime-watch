import type { AppDispatch } from '@/app/store'
import { searchAnime } from '@/features/search/model/slice/searchSlice'
import { limit } from '@/shared/consts/consts'

export const fetchSearchedAnime = async (
	text: string,
	dispatch: AppDispatch
) => {
	if (text.length === 0) return

	try {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}${
				import.meta.env.VITE_SEARCH_ANIME
			}?search=${text}&limit=${limit}`
		)
		const searchedAnimeData = await response.json()

		return dispatch(searchAnime(searchedAnimeData.list))
	} catch (error) {
		console.log(error)
	}
}
