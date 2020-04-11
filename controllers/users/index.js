const faker = require('faker')
const _ = require('lodash')

const userVO = require('../../models/user')
const errorVO = require('../../models/error')

module.exports = {
  getUsers: (req, res, next) => {
    res.status(200).json({
      users: _.times(3, userVO)
    })
  },
  getUser: (req, res, next) => {
    const { userId } = req.params

    if (!userId) {
      const errorCode = 500
      return res.status(errorCode).json(errorVO(errorCode))
    }

    res.status(200).json(userVO(userId))
  }
}
