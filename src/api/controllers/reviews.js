const mongoose = require('mongoose')
const Course = mongoose.model('Course')

// reviews for courses API controller

const sendJsonResponse = (res, status, content) => {
  res.status(status)
  res.json(content)
}

module.exports.reviewsCreate = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}

module.exports.reviewsReadOne = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}

module.exports.reviewsUpdateOne = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}

module.exports.reviewsDeleteOne = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}
