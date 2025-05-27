export const getImageWithProxy = (path: string) => {
	const fullUrl = `https://anilibria.top${path}`
	return `https://images.weserv.nl/?url=${encodeURIComponent(
		fullUrl.replace('https://', '')
	)}`
}
