import Express from 'express'
import GraphHttp from 'express-graphql'
import schema from './schema'

const APP_PORT = 8888
const app = Express()
app.use(
  '/api',
  GraphHttp({
    schema,
    graphiql: true,
  })
)

app.listen(APP_PORT, () => {
  console.log(`VLXD_API listening on port ${APP_PORT} ...`)
})
