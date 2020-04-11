const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(require('./middlewares'))

require('./routes')(server)

const port = 3000
server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`)
})
