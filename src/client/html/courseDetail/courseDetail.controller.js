angular
  .module('kkangst')
  .controller('courseDetailCtrl', courseDetailCtrl)

function courseDetailCtrl () {
  var vm = this

  vm.pageHeader = {
    title: 'Course detail page'
  }
}
