angular
  .module('kkangst')
  .controller('reviewModalCtrl', reviewModalCtrl)

reviewModalCtrl.$inject = ['$uibModalInstance', 'courseData']
function reviewModalCtrl ($uibModalInstance, courseData) {
  var vm = this
  vm.courseData = courseData

  vm.onSubmit = function () {
    // reset any existing error messages:
    vm.formError = ""

    if (!vm.formData.name || !vm.formData.rating || !vm.formData.reviewText) {
      // set an error message
      vm.formError = 'All fields required, please try again'
      return false
    } else {
      // otherwise log submited data to console:
      console.log(vm.formData)
      return false
    }
  }

  vm.modal = {
    cancel: function () {
      $uibModalInstance.dismiss('cancel')
    }
  }
}
