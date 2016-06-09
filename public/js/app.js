'use strict'

angular.module('kkangst', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router'
])

var app = angular.module('kkangst')
  .config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$interpolateProvider',
      function($controllerProvider, $compileProvider, $filterProvider, $provide, $interpolateProvider) {
        app.controller = $controllerProvider.register
        app.directive = $compileProvider.directive
        app.filter = $filterProvider.register
        app.factory = $provide.factory
        app.service = $provide.service
        app.constant = $provide.constant
        app.value = $provide.value

        $interpolateProvider.startSymbol('::')
        $interpolateProvider.endSymbol('::')

      }
    ]
  )

app.controller('MainCtrl', [function() {
    var vm = this
    vm.title = "Titulus"
  }])

angular.module('kkangst')
  .controller('AppCtrl', [ '$scope', '$state',
    function ($scope, $state) {
      $scope.app = {
        settings: {
          htmlClass: '',
          bodyClass: ''
        }
      }
      $scope.$state = $state
    }])

angular.module('kkangst')
  .run([ '$rootScope', '$state', '$stateParams',
         function ($rootScope, $state, $stateParams) {
           $rootScope.$state = $state
           $rootScope.$stateParams = $stateParams
         }
       ])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/website/home.html'
      })
      // $locationProvider.html5Mode(true)
  }])

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1haW4uanMiLCJjb25maWcucm91dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5hbmd1bGFyLm1vZHVsZSgna2thbmdzdCcsIFtcbiAgJ25nUm91dGUnLFxuICAnbmdSZXNvdXJjZScsXG4gICduZ1Nhbml0aXplJyxcbiAgJ25nVG91Y2gnLFxuICAndWkucm91dGVyJ1xuXSlcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdra2FuZ3N0JylcbiAgLmNvbmZpZyhcbiAgICBbJyRjb250cm9sbGVyUHJvdmlkZXInLCAnJGNvbXBpbGVQcm92aWRlcicsICckZmlsdGVyUHJvdmlkZXInLCAnJHByb3ZpZGUnLCAnJGludGVycG9sYXRlUHJvdmlkZXInLFxuICAgICAgZnVuY3Rpb24oJGNvbnRyb2xsZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlciwgJGZpbHRlclByb3ZpZGVyLCAkcHJvdmlkZSwgJGludGVycG9sYXRlUHJvdmlkZXIpIHtcbiAgICAgICAgYXBwLmNvbnRyb2xsZXIgPSAkY29udHJvbGxlclByb3ZpZGVyLnJlZ2lzdGVyXG4gICAgICAgIGFwcC5kaXJlY3RpdmUgPSAkY29tcGlsZVByb3ZpZGVyLmRpcmVjdGl2ZVxuICAgICAgICBhcHAuZmlsdGVyID0gJGZpbHRlclByb3ZpZGVyLnJlZ2lzdGVyXG4gICAgICAgIGFwcC5mYWN0b3J5ID0gJHByb3ZpZGUuZmFjdG9yeVxuICAgICAgICBhcHAuc2VydmljZSA9ICRwcm92aWRlLnNlcnZpY2VcbiAgICAgICAgYXBwLmNvbnN0YW50ID0gJHByb3ZpZGUuY29uc3RhbnRcbiAgICAgICAgYXBwLnZhbHVlID0gJHByb3ZpZGUudmFsdWVcblxuICAgICAgICAkaW50ZXJwb2xhdGVQcm92aWRlci5zdGFydFN5bWJvbCgnOjonKVxuICAgICAgICAkaW50ZXJwb2xhdGVQcm92aWRlci5lbmRTeW1ib2woJzo6JylcblxuICAgICAgfVxuICAgIF1cbiAgKVxuXG5hcHAuY29udHJvbGxlcignTWFpbkN0cmwnLCBbZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZtID0gdGhpc1xuICAgIHZtLnRpdGxlID0gXCJUaXR1bHVzXCJcbiAgfV0pXG4iLCJhbmd1bGFyLm1vZHVsZSgna2thbmdzdCcpXG4gIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyAnJHNjb3BlJywgJyRzdGF0ZScsXG4gICAgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlKSB7XG4gICAgICAkc2NvcGUuYXBwID0ge1xuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGh0bWxDbGFzczogJycsXG4gICAgICAgICAgYm9keUNsYXNzOiAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkc2NvcGUuJHN0YXRlID0gJHN0YXRlXG4gICAgfV0pXG4iLCJhbmd1bGFyLm1vZHVsZSgna2thbmdzdCcpXG4gIC5ydW4oWyAnJHJvb3RTY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJyxcbiAgICAgICAgIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuICAgICAgICAgICAkcm9vdFNjb3BlLiRzdGF0ZSA9ICRzdGF0ZVxuICAgICAgICAgICAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtc1xuICAgICAgICAgfVxuICAgICAgIF0pXG5cbiAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgJyRsb2NhdGlvblByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC53aGVuKCcvJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJy93ZWJzaXRlL2hvbWUuaHRtbCdcbiAgICAgIH0pXG4gICAgICAvLyAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSlcbiAgfV0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
