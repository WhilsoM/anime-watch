import { SearchCarouselAnime } from '@/widgets/SearchCarouselAnime/SearchCarouselAnime'
import s from './home.module.scss'

export const HomePage = () => {
	return (
		<section className='pt-4' role='home-page'>
			<SearchCarouselAnime />

			<h3 className={`${s.useSearchTitle} text-gray-400 text-center text-2xl`}>
				Используйте поиск чтобы найти аниме
			</h3>
		</section>
	)
}
