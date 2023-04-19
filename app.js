const express = require('express')
const router = require('./src/routes')
const errorHandler = require('./src/middlewares/errorHandler')
require('dotenv').config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)

app.use('/public', express.static(__dirname + '/public'))

app.use(errorHandler)

module.exports = app