import { html } from '@elysiajs/html'
import staticPlugin from '@elysiajs/static'
import { Elysia } from 'elysia'
import { autoroutes } from 'elysia-autoroutes'

const app = new Elysia().use(html()).use(staticPlugin({ assets: 'public' }))
  .use(
    autoroutes({ routesDir: './routes' }),
  )
  .listen(
    3000,
    () => console.log('Running on port 3000'),
  )

export type ElysiaApp = typeof app
