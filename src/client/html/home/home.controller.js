angular
  .module('kkangst')
  .controller('homeCtrl', homeCtrl)

function homeCtrl () {
  var vm = this
  vm.pageHeader = {
    title: 'LMS',
    strapline: 'Оберіть курси, які вам потрібні'
  }
  vm.sidebar = {
    content: 'Цей сервіс допоможе вам обрати потрібні шляхи навчання і самостійного вдосконалення'
  }
}
