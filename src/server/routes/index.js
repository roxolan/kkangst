const express = require('express')
const router = express.Router()
const ctrlCourses = require('../controllers/courses')
const ctrlOthers = require('../controllers/others')

router.get('/', ctrlCourses.homelist)
router.get('/course/:courseid', ctrlCourses.courseInfo)
router.get('/course/review/new', ctrlCourses.addReview)

router.get('/about', ctrlOthers.about)

module.exports = router
