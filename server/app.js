const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const routes = require('../server/routes/index')

const app = express()

app.set('views', path.join(__dirname, '..', 'server', 'views'))
app.set('view engine', 'pug')

app.use(favicon(path.join(__dirname, '..', 'public/favicon.ico')))
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', '/public')))

app.use('/', routes)

module.exports = app
