angular
  .module('kkangst')
  .controller('reviewModalCtrl', reviewModalCtrl)

reviewModalCtrl.$inject = ['$uibModalInstance', 'courseData']
function reviewModalCtrl ($uibModalInstance, courseData) {
  var vm = this
  vm.courseData = courseData

  vm.onSubmit = function () {
    console.log(vm.formData)
    return false
  }

  vm.modal = {
    cancel: function () {
      $uibModalInstance.dismiss('cancel')
    }
  }
}
