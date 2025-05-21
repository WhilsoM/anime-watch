import type { RootState } from '@/app/store'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/shared/UI/carousel'
import { useSelector } from 'react-redux'
import { AnimeItem } from '../AnimeItem/AnimeItem'
import s from './searchcarouselanime.module.scss'

export const SearchCarouselAnime = () => {
	const state = useSelector((state: RootState) => state.search)

	return (
		<>
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
		</>
	)
}
