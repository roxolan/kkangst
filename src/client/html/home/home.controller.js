angular
  .module('kkangst')
  .controller('homeCtrl', homeCtrl)

function homeCtrl ($http, kkangstData) {
  var vm = this
  console.log('! kkangstData is: ', kkangstData)
  vm.pageHeader = {
    title: 'LMS',
    strapline: 'Оберіть курси, які вам потрібні'
  }
  vm.sidebar = {
    content: 'Цей сервіс допоможе вам обрати потрібні шляхи навчання і самостійного вдосконалення'
  }
  vm.message = 'Шукаємо курси...'
  kkangstData.getCourses()
    .success(function (data) {
      console.log('! courses received: ', data)
      vm.message = data.length > 0 ? '' : 'Курсів не знайдено'
      vm.courses = data
    })
    .error(function (e) {
      console.log('! error: ', e)
      vm.message = 'Вибачте, щось пішло не так'
      console.log(e)
    })
}
