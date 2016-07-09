const express = require('express')
var router = express.Router()

const ctrlCourses = require('../controllers/courses')
const ctrlReviews = require('../controllers/reviews')
const ctrlAuth = require('../controllers/authentication')

// courses
router.get('/courses', ctrlCourses.coursesList)
router.post('/courses', ctrlCourses.coursesCreate)
router.get('/courses/:courseid', ctrlCourses.coursesReadOne)
router.put('/courses/:courseid', ctrlCourses.coursesUpdateOne)
router.delete('/courses/:courseid', ctrlCourses.coursesDeleteOne)

// reviews
router.post('/courses/:courseid/reviews', ctrlReviews.reviewsCreate)
router.get('/courses/:courseid/reviews/:reviewid', ctrlReviews.reviewsReadOne)
router.put('/courses/:courseid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne)
router.delete('/courses/:courseid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne)

// authentication
router.post('/register', ctrlAuth.register)
router.post('/login', ctrlAuth.login)

module.exports = router
