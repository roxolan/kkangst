angular
  .module('kkangst')
  .controller('reviewModalCtrl', reviewModalCtrl)

reviewModalCtrl.$inject = ['$uibModalInstance', 'courseData']
function reviewModalCtrl ($uibModalInstance, courseData) {
  var vm = this
  vm.courseData = courseData
  vm.modal = {
    cancel: function () {
      $uibModalInstance.dismiss('cancel')
    }
  }
}
