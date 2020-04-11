const controllers = require('../controllers')

module.exports = (server) => {
  server.get('/status', controllers.status.getStatus)

  server.get('/v1/users', controllers.users.getUsers)
  server.get('/v1/users/:userId', controllers.users.getUser)
}
