module.exports.about = (req, res) => {
  res.render('generic-text', {
    title: 'Про LMS',
    content: 'LMS було створено для підтримки процесу навчання в kmbs. \n\nЦя система містить усе потрібне для організації навчання'
  })
}
