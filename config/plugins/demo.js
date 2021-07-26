class DemoPlugin {
	constructor(options) {
		this.options = options
	}

	apply(compiler) {
		console.log({ compiler })
		compiler.hooks.entryOption.tap('DemoPlugin', (compilation, callback) => {
			console.log('this is demo plugin!!!')
			console.log({ compilation, callback })
		})

		// for (const hook of Object.keys(compiler.hooks)) {
		// 	console.log(hook)
		// }
	}
}

module.exports = DemoPlugin
