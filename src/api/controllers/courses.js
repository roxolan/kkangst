const mongoose = require('mongoose')
const Course = mongoose.model('Course')

// courses API controller

const sendJSONresponse = (res, status, content) => {
  res.status(status)
  res.json(content)
}

module.exports.coursesList = (req, res) => {
  sendJSONresponse(res, 200, {'status': 'stub'})
}

module.exports.coursesCreate = (req, res) => {
  sendJSONresponse(res, 200, {'status': 'stub'})
}

module.exports.coursesReadOne = (req, res) => {
  sendJSONresponse(res, 200, {'status': 'stub'})
}

module.exports.coursesList = (req, res) => {
  sendJSONresponse(res, 200, {'status': 'stub'})
}

module.exports.coursesUpdateOne = (req, res) => {
  sendJSONresponse(res, 200, {'status': 'stub'})
}

module.exports.coursesDeleteOne = (req, res) => {
  sendJSONresponse(res, 200, {'status': 'stub'})
}
