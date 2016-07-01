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
    var modalInstance = $uibModal.open({
      templateUrl: '../html/reviewModal/reviewModal.view.html',
      controller: 'reviewModalCtrl as vm',
      resolve: {
        courseData: function () {
          return {
            courseid: vm.courseid,
            courseName: vm.data.course.name
          }
        }
      }
    })
  }
}
