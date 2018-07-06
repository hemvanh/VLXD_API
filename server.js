import Express from 'express'
import GraphHttp from 'express-graphql'
import ServeStatic from 'serve-static'
import schema from './schema'

const APP_PORT = 8888
const app = Express()
app.use(ServeStatic(__dirname))
app.use(
  '/api',
  GraphHttp({
    schema,
    graphiql: true,
  })
)

app.listen(process.env.PORT || APP_PORT, () => {
  console.log(`VLXD_API listening on port ${APP_PORT} ...`)
})
