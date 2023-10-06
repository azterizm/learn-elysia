import { ElysiaApp } from '../..'

export default (app: ElysiaApp) =>
  app.get('/', ({ params: { message } }) => ({
    message,
  }))
