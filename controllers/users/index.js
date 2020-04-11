const _ = require('lodash')

const userVO = require('../../models/user')
const errorVO = require('../../models/error')

module.exports = {
  getUsers: (req, res) => {
    res.status(200).json({
      users: _.times(3, userVO),
    })
  },
  getUser: (req, res) => {
    const { userId } = req.params

    if (!userId) {
      const errorCode = 500
      res.status(errorCode).json(errorVO(errorCode))
      return
    }

    res.status(200).json(userVO(userId))
  },
}
