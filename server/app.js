const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const routes = require('../server/routes/index')
const users = require('../server/routes/users')


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
app.use('/users', users)

// catch 404 & forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

}

module.exports = app
