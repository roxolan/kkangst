angular
  .module('kkangst')
  .controller('aboutCtrl', aboutCtrl)

function aboutCtrl () {
  var vm = this

  vm.pageHeader = {
    title: 'Про LMS'
  }
  vm.main = {
    content: 'LMS було створено для підтримки процесу навчання в kmbs. \n\nЦя система містить усе потрібне для організації навчання.'
  }
}
