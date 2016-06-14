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

/* GET a course by the id */
module.exports.coursesReadOne = (req, res) => {
  if (req.params && req.params.courseid) {
    console.log('Finding course details', req.params)
    Course
      .findById(req.params.courseid)
      .exec((err, course) => {
        if (!course) {
          sendJsonResponse(res, 404, {
            'message': 'courseid not found'
          })
          return
        } else if (err) {
          console.log(err)
          sendJsonResponse(res, 404, err)
          return
        }
        sendJsonResponse(res, 200, course)
      })
  } else {
    sendJsonResponse(res, 404, {
      'message': 'No courseid in request'
    })
  }
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
