const path = require('path')

const { getAllNonIndexFiles } = require('../helpers')

const middlewares = getAllNonIndexFiles(__dirname).reduce((acc, item) => {
  const middlewareName = path.basename(item)
  // eslint-disable-next-line import/no-dynamic-require
  acc[middlewareName] = require(item)
  return acc
}, {})

module.exports = middlewares
