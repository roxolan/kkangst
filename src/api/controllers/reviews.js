const mongoose = require('mongoose')
const Course = mongoose.model('Course')

// reviews for courses API controller

const sendJSONresponse = (res, status, content) => {
  res.status(status)
  res.json(content)
}

module.exports.reviewsCreate = (req, res) => {
  sendJSONresponse(res, 200, {'status': 'stub'})
}

module.exports.reviewsReadOne = (req, res) => {
  sendJSONresponse(res, 200, {'status': 'stub'})
}

module.exports.reviewsUpdateOne = (req, res) => {
  sendJSONresponse(res, 200, {'status': 'stub'})
}

module.exports.reviewsDeleteOne = (req, res) => {
  sendJSONresponse(res, 200, {'status': 'stub'})
}
