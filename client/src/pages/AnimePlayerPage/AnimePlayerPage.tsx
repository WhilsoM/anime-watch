import { useNavigate, useParams } from 'react-router'
import kodikMap from './kodikMap.json'

export const AnimePlayerPage = () => {
	const { id, episode } = useParams<{ id: string; episode: string }>()
	const navigate = useNavigate()
	console.log(id, episode)

	const epNumber = Number(episode) || 1
	const iframeSrc = kodikMap['16632'].episodes['1']
	console.log(kodikMap)

	console.log(iframeSrc)

	const nextEpisode = () => navigate(`/anime-by-id/${id}/${epNumber + 1}`)
	const prevEpisode = () => {
		if (epNumber > 1) navigate(`/anime-by-id/${id}/${epNumber - 1}`)
	}

	if (!iframeSrc) {
		return (
			<div className='text-center text-red-500 p-4'>
				Ссылка на серию {epNumber} не найдена 😢
			</div>
		)
	}

	return (
		<div className='flex flex-col items-center gap-4 p-4'>
			<iframe
				src={iframeSrc}
				width='607'
				height='360'
				allowFullScreen
				allow='autoplay *; fullscreen *'
			></iframe>

			<div className='flex gap-4 mt-4'>
				<button onClick={prevEpisode} className='bg-gray-200 px-4 py-2 rounded'>
					← Назад
				</button>
				<button
					onClick={nextEpisode}
					className='bg-blue-500 text-white px-4 py-2 rounded'
				>
					Вперёд →
				</button>
			</div>
		</div>
	)
}
