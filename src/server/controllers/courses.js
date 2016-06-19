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

module.exports.homelist = (req, res) => {
  var requestOptions
  var path = '/api/courses'
  requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {}
  }
  request(requestOptions, function(err, response, body) {
    renderHomepage(req, res, body)
  })
}

const renderDetailPage = (req, res) => {
  res.render('course-info', {
    title: 'Інформація про курс',
    pageHeader: {
      title: 'Стратегічна ідея'
    },
    sidebar: {
      context: ' - курс, що є фундаментальним для цілої програми навчання в Школі',
      callToAction: 'Якщо ви пройшли цей курс і маєте що сказати - прохання залишити коментар'
    },
    course: {
      name: 'Стратегічна ідея',
      address: 'Київ, вул. Волоська, 8/5, корп.4',
      rating: 5,
      groups: ['PMBA', 'EMBA', 'EMBA(Agro)'],
      classTimes: [{
        day: 'Вівторок',
        date: '7 червня 2016',
        timing: '10:00-13:15',
        room: 'ауд. 410'
      }, {
        day: 'П\'ятниця',
        date: '10 червня 2016',
        timing: '15:00-18:15',
        room: 'ауд. 410'
      }, {
        day: 'Понеділок',
        date: '13 червня 2016',
        timing: '10:00-13:15',
        room: 'ауд. 410'
      }],
      reviews: [{
        author: 'Віктор Оксенюк',
        rating: 4,
        timestamp: '13 червня 2016',
        reviewText: 'Прохання викласти матеріали в LMS'
      }, {
        author: 'Михайло Травецький',
        rating: 5,
        timestamp: '14 червня 2016',
        reviewText: 'Що порадите почитати в розвиток? Де можна дістати переклад Пітера Сенге?'
      }]
    }
  })
}

module.exports.courseInfo = (req, res) => {
  console.log(req.params.courseid)
  renderDetailPage(req, res)
}

module.exports.addReview = (req, res) => {
  res.render('course-review-form', {
    title: 'Додати примітку',
    pageHeader: {
      title: 'Коментар на курс: Стратегічна ідея'
    }
  })
}
