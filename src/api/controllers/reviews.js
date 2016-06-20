const mongoose = require('mongoose')
const Course = mongoose.model('Course')

// reviews for courses API controller

const sendJsonResponse = (res, status, content) => {
  res.status(status)
  res.json(content)
}

module.exports.reviewsCreate = (req, res) => {
  var courseid = req.params.courseid
  if (courseid) {
    Course
      .findById(courseid)
      .select('reviews')
      .exec((err, course) => {
        if (err) {
          sendJsonResponse(res, 400, err)
        } else {
          doAddReview(req, res, course)
        }
      })
  } else {
    sendJsonResponse(res, 404, {
      "message" : "Not found, courseid required"
    })
  }
}

const doAddReview = (req, res, course) => {
  // provided with a parent document (course)
  if (!course) {
    sendJsonResponse(res, 404, {
      "message" : "courseid not found"
    })
  } else {
    // push data & save the parent document (course)
    course.reviews.push({
      author: req.body.author,
      rating: req.body.rating,
      reviewText: req.body.reviewText
    })
    course.save((err, course) => {
      var thisReview
      if (err) {
        sendJsonResponse(res, 400, err)
      } else {
        updateAverageRating(course._id)
        // Retrieve last review added to array & return it as confirmation
        thisReview = course.reviews[course.reviews.length - 1]
        sendJsonResponse(res, 201, thisReview)
      }
    })
  }
}

const updateAverageRating = (courseid) => {
  Course
    .findById(courseid)
    .select('rating reviews')
    .exec((err, course) => {
      if (!err) {
        doSetAverageRating(course)
      }
    })
}

const doSetAverageRating = (course) => {
  var i, reviewCount, ratingAverage, ratingTotal
  if (course.reviews && course.reviews.length > 0) {
    reviewCount = course.reviews.length
    ratingTotal = 0
    for (i = 0; i < reviewCount; i++) {
      ratingTotal = ratingTotal + course.reviews[i].rating
    }
    ratingAverage = parseInt(ratingTotal / reviewCount, 10)
    course.rating = ratingAverage
    course.save((err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Average rating updated to', ratingAverage)
      }
    })
  }
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
  if (!req.params.courseid || !req.params.reviewid) {
    sendJsonResponse(res, 404, {
      'message': 'Not found, courseid & reviewid are both required'
    })
    return
  }
  Course
    .findById(req.params.courseid)
    .select('reviews')
    .exec((err, course) => {
      var thisReview
      if (!course) {
        sendJsonResponse(res, 404, {
          'message': 'courseid not found'
        })
        return
      } else if (err) {
        sendJsonResponse(res, 400, err)
        return
      }
      if (course.reviews && course.reviews.length > 0) {
        // find subdocument:
        thisReview = course.reviews.id(req.params.reviewid)
        if (!thisReview) {
          sendJsonResponse(res, 404, {
            'message': 'reviewid not found'
          })
        } else {
          thisReview.author = req.body.author
          thisReview.rating = req.body.rating
          thisReview.reviewText = req.body.reviewText
          course.save((err, course) => {
            if (err) {
              sendJsonResponse(res, 404, err)
            } else {
              updateAverageRating(course._id)
              sendJsonResponse(res, 200, thisReview)
            }
          })
        }
      } else {
        sendJsonResponse(res, 404, {
          'message': 'No review to update'
        })
      }
    })
}

module.exports.reviewsDeleteOne = (req, res) => {
  if (!req.params.courseid || !req.params.reviewid) {
    sendJsonResponse(res, 404, {
      'message': 'Not found, courseid & reviewid are both required'
    })
    return
  }
  Course
    .findById(req.params.courseid)
    .select('reviews')
    .exec((err, course) => {
      var thisReview
      if (!course) {
        sendJsonResponse(res, 404, {
          'message': 'courseid not found'
        })
        return
      } else if (err) {
        sendJsonResponse(res, 400, err)
        return
      }
      if (course.reviews && course.reviews.length > 0) {
        // find subdocument:
        thisReview = course.reviews.id(req.params.reviewid)
        if (!thisReview) {
          sendJsonResponse(res, 404, {
            'message': 'reviewid not found'
          })
        } else {
          course.reviews.id(req.params.reviewid).remove()
          course.save((err, course) => {
            if (err) {
              sendJsonResponse(res, 404, err)
            } else {
              updateAverageRating(course._id)
              sendJsonResponse(res, 200, null)
            }
          })
        }
      } else {
        sendJsonResponse(res, 404, {
          'message': 'No review to update'
        })
      }
    })
}
