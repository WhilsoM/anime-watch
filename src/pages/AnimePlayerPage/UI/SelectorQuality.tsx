import type { TPlayerAnime, TQuality } from '@/shared/types/types'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/UI/select'
import type { Dispatch, SetStateAction } from 'react'

interface SelectorQualityProps {
	animeData: TPlayerAnime
	selectedQuality: TQuality
	setSelectedQuality: Dispatch<SetStateAction<TQuality>>
	episode: string | undefined
}

export const SelectorQuality = ({
	animeData,
	selectedQuality,
	setSelectedQuality,
	episode,
}: SelectorQualityProps) => {
	const epIndex = Number(episode)
	const hls = animeData?.player.list?.[epIndex]?.hls

	return (
		<Select
			defaultValue={selectedQuality}
			onValueChange={(value: string) => setSelectedQuality(value as TQuality)}
		>
			<SelectTrigger className='w-44'>
				<SelectValue placeholder='Качество' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='fhd' disabled={!hls?.fhd}>
					FHD
				</SelectItem>
				<SelectItem value='hd' disabled={!hls?.hd}>
					HD
				</SelectItem>
				<SelectItem value='sd' disabled={!hls?.sd}>
					SD
				</SelectItem>
			</SelectContent>
		</Select>
	)
}
