import { ElysiaApp } from '..'

export default (app: ElysiaApp) =>
  app.get('/', () => {
    const uuid = crypto.randomUUID()
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/public/styles/global.css'/>
          <title>Home</title>
        </head>
        <body class='m-4'>
          <h1 class='text-3xl font-bold'>Home</h1>
          <p>Welcome to the home page!</p>
          <div class="tooltip" data-tip="hello">
          <p>ID: {uuid}</p>
          </div>
        </body>
      </html>
    )
  })
    .post('/', ({ set }) => {
      set.headers['Content-Type'] = 'application/json'
      return ({ hello: 'world' })
    })
