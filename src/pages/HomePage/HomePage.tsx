import type { RootState } from '@/app/store'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/shared/UI/carousel'
import { AnimeItem } from '@/widgets/AnimeItem/AnimeItem'
import { AnimeList } from '@/widgets/AnimeList/AnimeList'
import { useSelector } from 'react-redux'
import s from './home.module.scss'

export const HomePage = () => {
	const state = useSelector((state: RootState) => state.search)
	console.log(state)

	return (
		<section role='home-page'>
			{state.length > 0 && (
				<article className={s.searchedAnime} role='searched-animes'>
					<h2 className='section-title'>Поиск аниме</h2>

					<Carousel>
						<CarouselContent>
							{state.map((item) => (
								<CarouselItem key={item.mal_id}>
									<AnimeItem
										id={item.mal_id}
										img={item.images.webp.image_url}
										title={item.title}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</article>
			)}
			<h2 className='section-title'>Рекомендации</h2>

			<AnimeList />
		</section>
	)
}
