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
