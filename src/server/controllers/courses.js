module.exports.homelist = (req, res) => {
  res.render('index', { title: 'Домашня сторінка' })
}

module.exports.courseInfo = (req, res) => {
  res.render('index', { title: 'Інформація про курс' })
}

module.exports.addReview = (req, res) => {
  res.render('index', { title: 'Додати примітку' })
}
