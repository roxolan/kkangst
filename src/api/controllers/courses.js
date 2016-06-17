const mongoose = require('mongoose')
const Course = mongoose.model('Course')

// courses API controller

const sendJsonResponse = (res, status, content) => {
  res.status(status)
  res.json(content)
}

/* POST a new course */
/* /api/courses */
// so far only tested via Postman
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

/* GET list of courses */
module.exports.coursesList = (req, res) => {
  Course
    .find({})
    .exec((err, courses) => {
      if (!courses) {
        sendJsonResponse(res, 404, {
          'message': 'courses not found'
        })
        return
      } else if (err) {
        console.log(err)
        sendJsonResponse(res, 404, err)
        return
      }
      sendJsonResponse(res, 200, courses)
      console.log('GET all courses: ', courses)
    })
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

/* PUT /api/courses/:courseid */
module.exports.coursesUpdateOne = (req, res) => {
  if (!req.params.courseid) {
    sendJsonResponse(res, 404, {
      'message': 'Not found, courseid is required'
    })
    return
  }
  Course
    .findById(req.params.courseid)
  // dashes in front mean "except"
    .select('-reviews -rating')
    .exec((err, course) => {
      if (!course) {
        sendJsonResponse(res, 404, {
          'message': 'courseid not found'
        })
        return
      } else if (err) {
        sendJsonResponse(res, 400, err)
        return
      }
      course.name = req.body.name
      course.address = req.body.address
      course.groups = req.body.groups.split(",")
      course.classTimes = [
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
      course.save((err, course) => {
        if (err) {
          sendJsonResponse(res, 404, err)
        } else {
          sendJsonResponse(res, 200, course)
        }
      })
    })
}

module.exports.coursesDeleteOne = (req, res) => {
  const courseid = req.params.courseid
  if (courseid) {
    Course
      .findByIdAndRemove(courseid)
      .exec((err, course) => {
        if (err) {
          sendJsonResponse(res, 404, err)
          return
        }
        sendJsonResponse(res, 204, null)
      })
  } else {
    sendJsonResponse(res, 404, {
      'message': 'No courseid'
    })
  }
}
