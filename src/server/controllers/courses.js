module.exports.homelist = (req, res) => {
  res.render('courses-list', { title: 'Перелік курсів' })
}

module.exports.courseInfo = (req, res) => {
  res.render('course-info', { title: 'Інформація про курс' })
}

module.exports.addReview = (req, res) => {
  res.render('index', { title: 'Додати примітку' })
}
