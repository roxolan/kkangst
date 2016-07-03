angular
  .module('kkangst')
  .controller('reviewModalCtrl', reviewModalCtrl)

reviewModalCtrl.$inject = ['$uibModalInstance', 'kkangstData', 'courseData']
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
      // on successful form submission send details to new function:
      vm.doAddReview(vm.courseData.courseid, vm.formData)
    }
  }

  vm.doAddReview = function (courseid, formData) {
    kkangstData.addReviewById(courseid, {
      author: formData.name,
      rating: formData.rating,
      reviewText: formData.reviewText
    })
      .success(function(data) {
        vm.modal.close(data)
      })
      .error(function () {
        vm.formError = "Your review has not been saved, please try again"
      })
    return false
  }


  vm.modal = {
    close: function (result) {
      $uibModalInstance.close(result)
    },
    cancel: function () {
      $uibModalInstance.dismiss('cancel')
    }
  }
}
