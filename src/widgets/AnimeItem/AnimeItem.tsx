import { Link } from 'react-router'
import s from './anime-item.module.scss'

interface AnimeItemProps {
	img: string
	title: string
}

export const AnimeItem = ({ img, title }: AnimeItemProps) => {
	return (
		<article className={s.animeItem}>
			<Link to={''}>
				<img src={img} alt={title + 'img'} />
				<p className={s.animeItem__title}>{title}</p>
			</Link>
		</article>
	)
}
