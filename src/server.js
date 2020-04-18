const express = require('express')

const { logger } = require('./middlewares')
const routes = require('./routes')

const server = express()
const router = express.Router()

server.use(express.json())
server.use(logger)
server.use(routes.load(router))

module.exports = server
