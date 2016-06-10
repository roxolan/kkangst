const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
require('./src/server/models/db')

const routes = require('./src/server/routes/index')
const routesApi = require('./src/api/routes/index')

const app = express()

app.set('views', path.join(__dirname, 'src', 'server', 'views'))
app.set('view engine', 'pug')

app.use(favicon(path.join(__dirname, 'public/favicon.ico')))
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, './node_modules')))

app.use('/', routes)
app.use('/api', routesApi)

/*
 app.use((req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'))
 })
 app.use('/users', users)
 */

// catch 404 & forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app
