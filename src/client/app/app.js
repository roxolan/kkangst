angular.module('kkangst', ['ngRoute', 'ngSanitize'])

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
      controller: 'locationDetailCtrl',
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
