const express = require('express')
const router = express.Router()
const ctrlCourses = require('../controllers/courses')
const ctrlOthers = require('../controllers/others')

router.get('/', ctrlOthers.angularApp)
router.get('/course/:courseid', ctrlCourses.courseInfo)
router.get('/course/:courseid/review/new', ctrlCourses.addReview)
router.post('/course/:courseid/review/new', ctrlCourses.doAddReview)

router.get('/about', ctrlOthers.about)

module.exports = router
