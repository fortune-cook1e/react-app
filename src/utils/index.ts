export const downloadByUrl = (url: string): void => {
	const a = document.createElement('a')
	a.setAttribute('download', 'my-image.png')
	a.setAttribute('href', url)
	a.click()
}
