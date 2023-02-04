import { resolve } from 'path'

import Router from '@koa/router'
import fs from 'fs-extra'
import Koa from 'koa'
import KoaStatic from 'koa-static'
import ReactDOMServer from 'react-dom/server'

import Demo from './SsrDemo'

function resolveDir(dir: string) {
  return resolve(__dirname, dir)
}
// import React from 'react'

const router = new Router()

const app = new Koa()

const DIST_PATH = resolve('../../public')

const PORT = 3306

router.get('/', async (ctx, next) => {
  const app = ReactDOMServer.renderToString(<Demo />)
  const indexHtmlPath = resolveDir('../../public/index.html')
  let replaceData = '231321'
  const result = await fs.readFileSync(indexHtmlPath, { encoding: 'utf-8' })
  replaceData = result.replace('<div id="app"></div>', `<div id="app">${app}</div>`)

  ctx.body = replaceData
})

app.use(KoaStatic(DIST_PATH)).use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
