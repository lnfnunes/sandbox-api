const faker = require('faker')

module.exports = (id = '0') => ({
  id: `${id}`,
  name: faker.name.findName(),
})
