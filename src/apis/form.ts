export const fetchTableData = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve([
				{
					id: '1',
					content: 'content1',
					createTime: Date.now()
				},
				{
					id: '2',
					content: 'content2',
					createTime: Date.now()
				}
			])
		}, 1000)
	})
}
