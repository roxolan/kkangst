angular
  .module('kkangst')
  .controller('courseDetailCtrl', courseDetailCtrl)

courseDetailCtrl.$inject = ['$routeParams', '$uibModal', 'kkangstData']
function courseDetailCtrl ($routeParams, $uibModal, kkangstData) {
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

  vm.popupReviewForm = function () {
    alert("Let's add a review!")
  }
}
