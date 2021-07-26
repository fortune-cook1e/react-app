const errorMiddleware = require('react-dev-utils/errorOverlayMiddleware')

class ErrorPlugin {
	apply(compiler) {
		const className = this.constructor.name
		if (compiler.options.mode !== 'development') return
		compiler.hooks.entryOption.tap(className, (context, entry) => {
			// console.log({ entry })
			// console.log(entry.app)
			// console.log({ entry })
			// console.log(entry.app)
			// const chunkPath = require.resolve(entry)
			// adjustEntry(entry, chunkPath)
			// console.log(entry)
			// console.log('etnryopion~~~~')
			// const chunkPath = require.resolve('../../src/main.tsx')
			// adjustEntry(entry.app, chunkPath)
		})

		compiler.hooks.afterResolvers.tap(className, ({ options }) => {
			if (options.devServer) {
				console.log('after resolve ~~~~~')
				const originalBefore = options.devServer.before
				options.devServer.before = (app, server) => {
					if (originalBefore) {
						originalBefore(app, server)
					}
					app.use(errorMiddleware())
				}
			}
		})
	}
}

function adjustEntry(entry, chunkpath) {
	console.log({ entry, chunkpath })
	try {
		if (Array.isArray(entry)) {
			const hasEntry = entry.includes(chunkpath)
			console.log({ hasEntry })

			if (!hasEntry) {
				entry.unshift(chunkpath)
			}
		} else {
			console.log('objekeyssdsds')
			Object.keys(entry).forEach(entryName => {
				entry[entryName] = adjustEntry(entry[entryName], chunkpath)
			})
		}
	} catch (e) {
		console.log(e)
	}
}

module.exports = ErrorPlugin
