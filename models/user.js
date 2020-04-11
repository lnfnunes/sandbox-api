const faker = require('faker')
const _ = require('lodash')

module.exports = (id = 0) => ({
  id,
  name: faker.name.findName(),
})
