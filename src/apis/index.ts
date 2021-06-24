export const getUserInfo = (): Promise<any> => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				name: 'userin',
				age: 20
			})
		}, 2000)
	})
}
