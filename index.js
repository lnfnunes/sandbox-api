const jsonServer = require('json-server')

const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(require('./middlewares'))

server.use(jsonServer.rewriter(require('./proxy.json')))
require('./routes')(server)

const port = 3000
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running at port ${port}`)
})
