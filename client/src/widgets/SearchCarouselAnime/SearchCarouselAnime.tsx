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

					<Carousel className='w-full'>
						<CarouselContent className='-ml-1'>
							{state.map((item) => (
								<CarouselItem
									className='pl-1 md:basis-1/2 lg:basis-1/3'
									key={item.id}
								>
									<AnimeItem
										id={item.id}
										img={`${import.meta.env.VITE_PROXY_URL}${
											item.posters.medium.url
										}`}
										title={item.names.ru}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className='left-2' />
						<CarouselNext className='right-2' />
					</Carousel>
				</article>
			)}
		</>
	)
}
