angular
  .module('kkangst')
  .controller('courseDetailCtrl', courseDetailCtrl)

courseDetailCtrl.$inject = ['$routeParams', '$modal', 'kkangstData']
function courseDetailCtrl ($routeParams, $modal, kkangstData) {
  var vm = this
  vm.courseid = $routeParams.courseid

  kkangstData.courseById(vm.courseid)
    .success(function (data) {
      vm.data = { course: data }
      vm.pageHeader = {
        title: vm.data.course.name
      }
    })
    .error(function (e) {
      console.log(e)
    })
}
