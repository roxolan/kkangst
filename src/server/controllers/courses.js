const request = require('request')

var apiOptions = {
  server: 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://kkangst.herokuapp.com'
}

const renderHomepage = (req, res, responseBody) => {
  var message
  if (!(responseBody instanceof Array)) {
    message = 'API lookup error'
    responseBody = []
  } else {
    if (!responseBody.length) {
      message = 'No corresponding courses found'
    }
  }
  res.render('courses-list', {
    title: 'Перелік курсів',
    pageHeader: {
      title: 'LMS',
      strapline: 'Оберіть курси, які вам потрібні'
    },
    sidebar: 'Цей сервіс допоможе вам обрати потрібні шляхи навчання і самостійного вдосконалення',
    courses: responseBody,
    message: message
  })
}

const _showError = (req, res, status) => {
  var title, content
  if (status === 404) {
    title = '404, page not found'
    content = 'Пробачте, не можемо знайти сторінку'
  } else if (status === 500) {
    title = '505, internal server error'
    content = 'Нам шкода, але, схоже, маємо проблеми з нашим сервером'
  } else {
    title = status + ', something went wrong'
    content = 'Щось десь пішло не так'
  }
  res.status(status)
  res.render('generic-text', {
    title: title,
    content: content
  })
}

module.exports.homelist = (req, res) => {
  var requestOptions
  var path = '/api/courses'
  requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {}
  }
  request(requestOptions, (err, response, body) => {
    renderHomepage(req, res, body)
  })
}

const getCourseInfo = (req, res, callback) => {
  var requestOptions
  var path = '/api/courses/' + req.params.courseid
  requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  }
  request(requestOptions, (err, response, body) => {
    var data = body
    if (response.statusCode === 200) {
      callback(req, res, data)
    } else {
      _showError(req, res, response.statusCode)
    }
  })
}

const renderCoursePage = (req, res, courseDetail) => {
  res.render('course-info', {
    title: courseDetail.name,
    pageHeader: {
      title: courseDetail.name
    },
    sidebar: {
      context: ' - курс, що є фундаментальним для цілої програми навчання в Школі',
      callToAction: 'Якщо ви пройшли цей курс і маєте що сказати - прохання залишити коментар'
    },
    course: courseDetail
  })
}

/* GET 'Course info' page */
module.exports.courseInfo = (req, res) => {
  getCourseInfo(req, res, (req, res, responseData) => {
    renderCoursePage(req, res, responseData)
  })
}

const renderReviewForm = (req, res, courseDetail) => {
  res.render('course-review-form', {
    title: 'Примітка до курсу: ' + courseDetail.name,
    pageHeader: {
      title: 'Коментар на курс: ' + courseDetail.name
    },
    error: req.query.err
  })
}

/* GET 'Add review' page */
module.exports.addReview = (req, res) => {
  getCourseInfo(req, res, (req, res, responseData) => {
    renderReviewForm(req, res, responseData)
  })
}

/* POST 'Add review' page */
module.exports.doAddReview = (req, res) => {
  var requestOptions, path, postdata
  var courseid = req.params.courseid
  path = '/api/courses/' + courseid + '/reviews'
  postdata = {
    author: req.body.name,
    rating: parseInt(req.body.rating, 10),
    reviewText: req.body.review
  }
  requestOptions = {
    url: apiOptions.server + path,
    method: 'POST',
    json: postdata
  }
  request(requestOptions, (err, response, body) => {
    if (response.statusCode === 201) {
      console.log('created review with postdata: ' + postdata)
      res.redirect('/course/' + courseid)
    } else if (response.statusCode === 400 && body.name && body.name === 'ValidationError') {
      res.redirect('/course/' + courseid + '/reviews/new?err=val')
    } else {
      console.log(body)
      _showError(req, res, response.statusCode)
    }
  })
}
