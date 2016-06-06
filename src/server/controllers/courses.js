module.exports.homelist = (req, res) => {
  res.render('courses-list', {
    title: 'Перелік курсів',
    pageHeader: {
      title: 'LMS',
      strapline: 'Оберіть курси, які вам потрібні'
    },
    sidebar: 'Цей сервіс допоможе вам обрати потрібні шляхи навчання і самостійного вдосконалення'
  })
}

module.exports.courseInfo = (req, res) => {
  res.render('course-info', { title: 'Інформація про курс' })
}

module.exports.addReview = (req, res) => {
  res.render('course-review-form', { title: 'Додати примітку' })
}
