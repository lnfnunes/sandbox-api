const faker = require('faker')
const _ = require('lodash')

const userVO = require('../../models/user')

module.exports = {
  getUsers: (req, res, next) => {
    res.status(200).json({
      users: _.times(3, userVO)
    })
  },
  getUser: (req, res, next) => {
    const { userId } = req.params
    res.status(200).json(userVO(userId))
  }
}
