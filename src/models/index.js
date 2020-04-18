const path = require('path')

const { getAllNonIndexFiles, capitalize } = require('../helpers')

const models = getAllNonIndexFiles(__dirname).reduce((acc, item) => {
  const modelName = capitalize(path.basename(item))
  // eslint-disable-next-line import/no-dynamic-require
  acc[modelName] = require(item)
  return acc
}, {})

module.exports = models
