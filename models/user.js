const faker = require('faker')

module.exports = (id = 0) => ({
  id,
  name: faker.name.findName(),
})
