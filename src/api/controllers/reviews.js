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

/* GET a review from a course by the id */
module.exports.reviewsReadOne = (req, res) => {
  console.log('Getting single review')
  if (req.params && req.params.courseid && req.params.reviewid) {
    Course
      .findById(req.params.courseid)
      .select('name reviews')
      .exec(
        (err, course) => {
          console.log(course)
          var response, review
          if (!course) {
            sendJsonResponse(res, 404, {
              'message': 'courseid not found'
            })
            return
          } else if (err) {
            sendJsonResponse(res, 404, err)
            return
          }
          if (course.reviews && course.reviews.length > 0) {
            review = course.reviews.id(req.params.reviewid)
            if (!review) {
              sendJsonResponse(res, 404, {
                'message': 'reviewid not found'
              })
            } else {
              response = {
                course: {
                  name: course.name,
                  id: req.params.courseid
                },
                review: review
              }
              sendJsonResponse(res, 200, response)
            }
          } else {
            sendJsonResponse(res, 404, {
              'message': 'No reviews found'
            })
          }
        }
      )
  } else {
    sendJsonResponse(res, 404, {
      'message': 'Not found, courseid & reviewid are both required'
    })
  }
}

module.exports.reviewsUpdateOne = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}

module.exports.reviewsDeleteOne = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}
