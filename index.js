const jsonServer = require('json-server')

const server = jsonServer.create()
const middlewares = jsonServer.defaults()

// Middlewares
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(require('./src/middlewares'))

// Routes
server.use(jsonServer.rewriter(require('./src/routes/proxy.json')))
require('./src/routes')(server)

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`
  JSON Server is running at port ${PORT}
  http://localhost:${PORT}/status
  `)
})
