const controllers = require('../controllers')

module.exports = (server) => {
  server.get('/users', controllers.users.getUsers)
  server.get('/users/:userId', controllers.users.getUser)
}
