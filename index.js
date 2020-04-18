const server = require('./src/server')

const port = 3000
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at port ${port}`)
})
