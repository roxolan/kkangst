const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

const app = express()

app.use(favicon(path.join(__dirname, '..' + '/public/favicon.ico')))
app.use(logger('dev'))

module.exports = app
