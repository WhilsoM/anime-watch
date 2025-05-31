import Hls from 'hls.js'
import { useEffect, useRef } from 'react'

interface AnimePlayerProps {
	src: string
}

export const AnimePlayer: React.FC<AnimePlayerProps> = ({ src }) => {
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		if (!videoRef.current) return

		if (Hls.isSupported()) {
			const hls = new Hls()
			hls.loadSource(src)
			hls.attachMedia(videoRef.current)
			hls.on(Hls.Events.MANIFEST_PARSED, () => {
				videoRef.current?.play()
			})

			return () => {
				hls.destroy()
			}
		} else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
			// Для Safari и iOS
			videoRef.current.src = src
			videoRef.current.addEventListener('loadedmetadata', () => {
				videoRef.current?.play()
			})
		}
	}, [src])

	return (
		<video
			ref={videoRef}
			controls
			width={607}
			height={360}
			style={{ backgroundColor: 'black' }}
		/>
	)
}
