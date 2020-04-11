const faker = require('faker')

module.exports = (code = 500) => ({
  code,
  message: faker.lorem.sentence(),
})
