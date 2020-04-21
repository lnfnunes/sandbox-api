const express = require('express')

const { useLogger } = require('./middlewares')
const routes = require('./routes')

const server = express()
const router = express.Router()

server.use(express.json())
server.use(useLogger)
server.use(routes.load(router))

module.exports = server
