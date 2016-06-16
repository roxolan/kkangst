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
        console.log('-- reviews for this course: ', course.reviews)
      })
  } else {
    sendJsonResponse(res, 404, {
      'message': 'No courseid in request'
    })
  }
}

/* POST a new course */
/* /api/courses */
module.exports.coursesCreate = (req, res) => {
  Course.create({
    name: req.body.name,
    address: req.body.address,
    groups: req.body.groups.split(","),
    classTimes: [
      {
        day: req.body.day1,
        date: req.body.date1,
        timing: req.body.timing1,
        room: req.body.room1
      },
      {
        day: req.body.day2,
        date: req.body.date2,
        timing: req.body.timing2,
        room: req.body.room2
      },
      {
        day: req.body.day3,
        date: req.body.date3,
        timing: req.body.timing3,
        room: req.body.room3
      }
    ]
  }, (err, course) => {
    if (err) {
      console.log(err)
      sendJsonResponse(res, 400, err)
    } else {
      console.log(course)
      sendJsonResponse(res, 201, course)
    }
  })
}

module.exports.coursesUpdateOne = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}

module.exports.coursesDeleteOne = (req, res) => {
  sendJsonResponse(res, 200, {'status': 'stub'})
}
