;(function() {
"use strict";

angular.module('kkangst', ['ngRoute', 'ngSanitize', 'ui.bootstrap'])

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../html/home/home.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .when('/about', {
      templateUrl: '../html/common/views/genericText.view.html',
      controller: 'aboutCtrl',
      controllerAs: 'vm'
    })
    .when('/course/:courseid', {
      templateUrl: '../html/courseDetail/courseDetail.view.html',
      controller: 'courseDetailCtrl',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'})
  $locationProvider.html5Mode(true)
}

var mainCtrl = function () {
  var vm = this
  vm.author = 'Вітя Котусенко'
  vm.year = 1974
}

angular
  .module('kkangst')
  .config(['$routeProvider', '$locationProvider', config])
  .controller('mainCtrl', mainCtrl)
}());

;(function() {
"use strict";

angular
  .module('kkangst')
  .service('kkangstData', kkangstData)

kkangstData.$inject = ['$http']
function kkangstData ($http) {
  var getCourses = function () {
    return $http.get('/api/courses')
  }

  var courseById = function (courseid) {
    return $http.get('/api/courses/' + courseid)
  }

  var addReviewById = function (courseid, reviewData) {
    return $http.post('/api/courses/' + courseid + '/reviews', reviewData)
  }

  return {
    getCourses: getCourses,
    courseById: courseById,
    addReviewById: addReviewById
  }
}
}());

;(function() {
"use strict";

angular
  .module('kkangst')
  .filter('addHtmlLineBreaks', addHtmlLineBreaks)

function addHtmlLineBreaks () {
  return function (text) {
    var output = text.replace(/\n/g, '<br/>')
    return output
  }
}
}());

;(function() {
"use strict";

angular
  .module('kkangst')
  .filter('formatDistance', formatDistance)

var _isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function formatDistance () {
  return function (distance) {
    var numDistance, unit
    if (distance && _isNumeric(distance)) {
      if (distance > 1) {
        numDistance = parseFloat(distance).toFixed(1)
        unit = 'km'
      } else {
        numDistance = parseInt(distance * 1000, 10)
        unit = 'm'
      }
      return numDistance + unit
    } else {
      return '?'
    }
  }
}
}());

;(function() {
"use strict";

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
}());

;(function() {
"use strict";

$('#addReview').submit(function (e) {
  $('.alert.alert-danger').hide()
  if (!$('input#name').val() || !$('select#rating').val() || !$('textarea#review').val()) {
    if ($('.alert.alert-danger').length) {
      $('.alert.alert-danger').show()
    } else {
      $(this).prepend('<div role="alert" class="alert alert-danger">All fields required. Validated by jQuery</div>')
    }
    return false
  }
})
}());

;(function() {
"use strict";

angular
  .module('kkangst')
  .controller('homeCtrl', homeCtrl)

homeCtrl.$inject = ['kkangstData']
function homeCtrl (kkangstData) {
  var vm = this
  vm.pageHeader = {
    title: 'LMS',
    strapline: 'Оберіть курси, які вам потрібні'
  }
  vm.sidebar = {
    content: 'Цей сервіс допоможе вам обрати потрібні шляхи навчання і самостійного вдосконалення'
  }
  vm.message = 'Шукаємо курси...'
  kkangstData.getCourses()
    .success(function (data) {
      vm.message = data.length > 0 ? '' : 'Курсів не знайдено'
      vm.courses = data
    })
    .error(function (e) {
      vm.message = 'Вибачте, щось пішло не так'
      console.log(e)
    })
}
}());

;(function() {
"use strict";

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
    modalInstance.result.then(function (data) {
      vm.data.course.reviews.push(data)
    })
  }
}
}());

;(function() {
"use strict";

angular
  .module('kkangst')
  .controller('reviewModalCtrl', reviewModalCtrl)

reviewModalCtrl.$inject = ['$uibModalInstance', 'kkangstData', 'courseData']

function reviewModalCtrl ($uibModalInstance, kkangstData, courseData) {
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
}());

;(function() {
"use strict";

angular
  .module('kkangst')
  .directive('ratingStars', ratingStars)

function ratingStars () {
  return {
    restrict: 'EA',
    scope: {
      thisRating: '=rating'
    },
    templateUrl: '../html/directives/ratingStars/ratingStars.template.html'
  }
}
}());

;(function() {
"use strict";

angular
  .module('kkangst')
  .directive('footerGeneric', footerGeneric)

function footerGeneric () {
  return {
    restrict: 'EA',
    templateUrl: '../html/directives/footerGeneric/footerGeneric.template.html'
  }
}
}());

;(function() {
"use strict";

angular
  .module('kkangst')
  .directive('navigation', navigation)

function navigation () {
  return {
    restrict: 'EA',
    templateUrl: '../html/directives/navigation/navigation.template.html'
  }
}
}());

;(function() {
"use strict";

angular
  .module('kkangst')
  .directive('pageHeader', pageHeader)

function pageHeader () {
  return {
    restrict: 'EA',
    scope: {
      content : '=content'
    },
    templateUrl: '../html/directives/pageHeader/pageHeader.template.html'
  }
}
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImtrYW5nc3REYXRhLnNlcnZpY2UuanMiLCJhZGRIdG1sTGluZUJyZWFrcy5maWx0ZXIuanMiLCJmb3JtYXREaXN0YW5jZS5maWx0ZXIuanMiLCJhYm91dC5jb250cm9sbGVyLmpzIiwidmFsaWRhdGlvbi5qcyIsImhvbWUuY29udHJvbGxlci5qcyIsImNvdXJzZURldGFpbC5jb250cm9sbGVyLmpzIiwicmV2aWV3TW9kYWwuY29udHJvbGxlci5qcyIsInJhdGluZ1N0YXJzLmRpcmVjdGl2ZS5qcyIsImZvb3RlckdlbmVyaWMuZGlyZWN0aXZlLmpzIiwibmF2aWdhdGlvbi5kaXJlY3RpdmUuanMiLCJwYWdlSGVhZGVyLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdra2FuZ3N0JywgWyduZ1JvdXRlJywgJ25nU2FuaXRpemUnLCAndWkuYm9vdHN0cmFwJ10pXG5cbmZ1bmN0aW9uIGNvbmZpZyAoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG4gICRyb3V0ZVByb3ZpZGVyXG4gICAgLndoZW4oJy8nLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJy4uL2h0bWwvaG9tZS9ob21lLnZpZXcuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnaG9tZUN0cmwnLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfSlcbiAgICAud2hlbignL2Fib3V0Jywge1xuICAgICAgdGVtcGxhdGVVcmw6ICcuLi9odG1sL2NvbW1vbi92aWV3cy9nZW5lcmljVGV4dC52aWV3Lmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ2Fib3V0Q3RybCcsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KVxuICAgIC53aGVuKCcvY291cnNlLzpjb3Vyc2VpZCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnLi4vaHRtbC9jb3Vyc2VEZXRhaWwvY291cnNlRGV0YWlsLnZpZXcuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnY291cnNlRGV0YWlsQ3RybCcsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KVxuICAgIC5vdGhlcndpc2Uoe3JlZGlyZWN0VG86ICcvJ30pXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKVxufVxuXG52YXIgbWFpbkN0cmwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2bSA9IHRoaXNcbiAgdm0uYXV0aG9yID0gJ9CS0ZbRgtGPINCa0L7RgtGD0YHQtdC90LrQvidcbiAgdm0ueWVhciA9IDE5NzRcbn1cblxuYW5ndWxhclxuICAubW9kdWxlKCdra2FuZ3N0JylcbiAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgJyRsb2NhdGlvblByb3ZpZGVyJywgY29uZmlnXSlcbiAgLmNvbnRyb2xsZXIoJ21haW5DdHJsJywgbWFpbkN0cmwpXG4iLG51bGwsbnVsbCxudWxsLG51bGwsIiQoJyNhZGRSZXZpZXcnKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcbiAgJCgnLmFsZXJ0LmFsZXJ0LWRhbmdlcicpLmhpZGUoKVxuICBpZiAoISQoJ2lucHV0I25hbWUnKS52YWwoKSB8fCAhJCgnc2VsZWN0I3JhdGluZycpLnZhbCgpIHx8ICEkKCd0ZXh0YXJlYSNyZXZpZXcnKS52YWwoKSkge1xuICAgIGlmICgkKCcuYWxlcnQuYWxlcnQtZGFuZ2VyJykubGVuZ3RoKSB7XG4gICAgICAkKCcuYWxlcnQuYWxlcnQtZGFuZ2VyJykuc2hvdygpXG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykucHJlcGVuZCgnPGRpdiByb2xlPVwiYWxlcnRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPkFsbCBmaWVsZHMgcmVxdWlyZWQuIFZhbGlkYXRlZCBieSBqUXVlcnk8L2Rpdj4nKVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSlcbiJdfQ==
