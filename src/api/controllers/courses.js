const mongoose = require('mongoose')
const Course = mongoose.model('Course')

// courses API controller

const sendJsonResponse = (res, status, content) => {
  res.status(status)
  res.json(content)
}

module.exports.coursesList = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}

module.exports.coursesCreate = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}

module.exports.coursesReadOne = (req, res) => {
  Course
    .findById(req.params.courseid)
    .exec((err, course) => {
      sendJsonResponse(res, 200, course)
    })
}

module.exports.coursesList = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}

module.exports.coursesUpdateOne = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}

module.exports.coursesDeleteOne = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}
