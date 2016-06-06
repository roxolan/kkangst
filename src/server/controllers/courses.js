module.exports.homelist = (req, res) => {
  res.render('courses-list', {
    title: 'Перелік курсів',
    pageHeader: {
      title: 'LMS',
      strapline: 'Оберіть курси, які вам потрібні'
    },
    sidebar: 'Цей сервіс допоможе вам обрати потрібні шляхи навчання і самостійного вдосконалення',
    courses: [{
      name: 'Стратегічна ідея',
      address: 'Київ, вул. Волоська, 8/5, корп.4',
      rating: 5,
      groups: ['PMBA', 'EMBA', 'EMBA(Agro)'],
      distance: '250m'
    }, {
      name: 'Маркетинг',
      address: 'Київ, вул. Волоська, 8/5, корп.4',
      rating: 4,
      groups: ['PMBA', 'EMBA', 'EMBA(Agro)'],
      distance: '250m'
    }, {
      name: 'Управління якістю',
      address: 'Київ, вул. Волоська, 8/5, корп.4',
      rating: 3,
      groups: ['PMBA', 'EMBA', 'EMBA(Agro)'],
      distance: '250m'
    }]
  })
}

module.exports.courseInfo = (req, res) => {
  res.render('course-info', { title: 'Інформація про курс' })
}

module.exports.addReview = (req, res) => {
  res.render('course-review-form', { title: 'Додати примітку' })
}
