angular.module('kkangst')
  .run([ '$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state
      $rootScope.$stateParams = $stateParams
    }
  ])
  .config([ '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      var htmlClass = {}

      $urlRouterProvider
        .otherwise('/home')
    }
  ])
