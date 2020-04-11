const controllers = require('../controllers')

module.exports = (server) => {
  server.get('/v1/users', controllers.users.getUsers)
  server.get('/v1/users/:userId', controllers.users.getUser)
}
