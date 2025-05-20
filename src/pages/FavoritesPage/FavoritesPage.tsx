import type { RootState } from '@/app/store'
import { AnimeItem } from '@/widgets/AnimeItem/AnimeItem'
import { useSelector } from 'react-redux'
import s from './favorites.module.scss'

export const FavoritesPage = () => {
	const favorites = useSelector((state: RootState) => state.favorites)
	return (
		<section role='favorites-anime'>
			<h2 className='section-title'>Favorites</h2>

			{favorites.length === 0 && <p>Нету избранных аниме :(</p>}
			<section role='list-favorites-anime' className={s.favoritesList}>
				{favorites.length > 0 &&
					favorites.map((favorite) => (
						<AnimeItem
							key={favorite.mal_id}
							id={favorite.mal_id}
							img={favorite.images.webp.image_url}
							title={favorite.title}
						/>
					))}
			</section>
		</section>
	)
}
