const path = require('path')

const { getAllIndexFiles } = require('../helpers')

module.exports = {
  load: (router) => {
    getAllIndexFiles(path.join(__dirname, '../controllers')).forEach((controller) =>
      // eslint-disable-next-line import/no-dynamic-require
      require(path.relative(__dirname, controller))(router),
    )

    return router
  },
}
