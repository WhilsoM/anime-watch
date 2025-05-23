import { AnimeList } from '@/widgets/AnimeList/AnimeList'
import { SearchCarouselAnime } from '@/widgets/SearchCarouselAnime/SearchCarouselAnime'

export const HomePage = () => {
	return (
		<section className='pt-4' role='home-page'>
			<SearchCarouselAnime />

			<h2 className='section-title'>Рекомендации</h2>

			<AnimeList />
		</section>
	)
}
