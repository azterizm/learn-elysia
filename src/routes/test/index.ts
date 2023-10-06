import { ElysiaApp } from '../..'
import path from 'path'

export default (app: ElysiaApp) =>
  app.get('/', () => {
    return Bun.file(path.resolve('uploads/logo.png'))
  })
