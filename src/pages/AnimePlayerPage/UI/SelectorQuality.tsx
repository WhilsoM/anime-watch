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
	return (
		<Select defaultValue={selectedQuality} onValueChange={setSelectedQuality}>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Quality' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem
					disabled={animeData?.player.list[Number(episode)]?.hls['fhd'] == null}
					value='fhd'
				>
					FHD
				</SelectItem>

				<SelectItem
					disabled={animeData?.player.list[Number(episode)]?.hls['hd'] == null}
					value='hd'
				>
					HD
				</SelectItem>

				<SelectItem
					disabled={animeData?.player.list[Number(episode)]?.hls['sd'] == null}
					value='sd'
				>
					SD
				</SelectItem>
			</SelectContent>
		</Select>
	)
}
