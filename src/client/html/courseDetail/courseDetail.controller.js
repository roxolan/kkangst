angular
  .module('kkangst')
  .controller('courseDetailCtrl', courseDetailCtrl)

courseDetailCtrl.$inject = ['$routeParams']
function courseDetailCtrl ($routeParams) {
  var vm = this
  vm.courseid = $routeParams.courseid

  vm.pageHeader = {
    title: vm.courseid
  }
}
